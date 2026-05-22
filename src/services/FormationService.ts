import { randomUUID } from "crypto";
import { db } from "../core/db";
import { CatalogCache } from "../core/cache";
import {
  VEHICLE_CATEGORIES,
  type VehicleCategory,
} from "./VehicleService";

// Wizard tier labels — the formation table tracks which tier a layout belongs
// to so the wizard can pick the right one. Nullable: an admin can stage a
// formation before linking it.
export const FORMATION_TIERS = ["Vanguard", "Sentinel", "Praetorian"] as const;
export type FormationTier = (typeof FORMATION_TIERS)[number];

export type Formation = {
  id: string;
  label: string;
  description: string | null;
  tier_id: FormationTier | null;
  canvas_width: number;
  canvas_depth: number;
  status: "active" | "archived";
  /** True iff this is the formation the wizard renders for `tier_id`.
   *  Enforced one-per-tier by a partial unique index in the migration. */
  is_default: boolean;
  created_at: string | null;
  updated_at: string | null;
};

export type Slot = {
  id: string;
  formation_id: string;
  label: string | null;
  /** Lateral position in metres. 0 = canvas centre line, +X right of travel. */
  x: number;
  /** Longitudinal position in metres. 0 = canvas rear edge, +Z toward front. */
  z: number;
  /** Compass-style facing in degrees. 0 = +Z (forward), 90 = +X (right). */
  rotation_deg: number;
  /** Subset of VEHICLE_CATEGORIES — which vehicle roles may occupy this slot. */
  allowed_categories: VehicleCategory[];
  order_index: number;
  created_at: string | null;
};

export type FormationWithSlots = Formation & { slots: Slot[] };

const ACTIVE_KEY = "formations.active";
const DEFAULTS_KEY = "formations.defaults"; // wizard reads this
const formationKey = (id: string) => `formation:${id}`;

const SLUG_RE = /^[a-z][a-z0-9_-]{0,62}$/;

const LABEL_MAX = 80;
const DESC_MAX = 2000;
const SLOT_LABEL_MAX = 32;

const CANVAS_MIN = 5;
const CANVAS_MAX = 1000;
const COORD_BOUND = 2000; // metres; far beyond any realistic motorcade canvas
const MAX_SLOTS_PER_FORMATION = 64;

const isCategory = (s: unknown): s is VehicleCategory =>
  typeof s === "string" &&
  (VEHICLE_CATEGORIES as readonly string[]).includes(s);

const isTier = (s: unknown): s is FormationTier =>
  typeof s === "string" && (FORMATION_TIERS as readonly string[]).includes(s);

function parseAllowedCategories(raw: unknown): VehicleCategory[] {
  if (Array.isArray(raw)) {
    return (raw as unknown[]).filter(isCategory) as VehicleCategory[];
  }
  if (typeof raw === "string" && raw.length > 0) {
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return (parsed as unknown[]).filter(isCategory) as VehicleCategory[];
      }
    } catch {
      /* fall through */
    }
    if (isCategory(raw)) return [raw];
  }
  return [];
}

function toFormation(r: any): Formation {
  const tier = r.tier_id;
  return {
    id: r.id as string,
    label: r.label as string,
    description: (r.description ?? null) as string | null,
    tier_id: isTier(tier) ? tier : null,
    canvas_width: Number(r.canvas_width ?? 60),
    canvas_depth: Number(r.canvas_depth ?? 200),
    status: (r.status as "active" | "archived") ?? "active",
    is_default: Number(r.is_default ?? 0) === 1,
    created_at: (r.created_at ?? null) as string | null,
    updated_at: (r.updated_at ?? null) as string | null,
  };
}

function toSlot(r: any): Slot {
  return {
    id: r.id as string,
    formation_id: r.formation_id as string,
    label: (r.label ?? null) as string | null,
    x: Number(r.x ?? 0),
    z: Number(r.z ?? 0),
    rotation_deg: Number(r.rotation_deg ?? 0),
    allowed_categories: parseAllowedCategories(r.allowed_categories),
    order_index: Number(r.order_index ?? 0),
    created_at: (r.created_at ?? null) as string | null,
  };
}

function normalizeRotation(raw: unknown): number {
  const n = Number(raw ?? 0);
  if (!Number.isFinite(n)) return 0;
  return ((n % 360) + 360) % 360;
}

type FormationCreate = {
  id: string;
  label: string;
  description?: string | null;
  tier_id?: string | null;
  canvas_width?: number;
  canvas_depth?: number;
};

type FormationUpdate = {
  label?: string;
  description?: string | null;
  tier_id?: string | null;
  canvas_width?: number;
  canvas_depth?: number;
  status?: "active" | "archived";
};

type SlotCreate = {
  label?: string | null;
  x: number;
  z: number;
  rotation_deg?: number;
  allowed_categories: string[];
  order_index?: number;
};

type SlotUpdate = {
  label?: string | null;
  x?: number;
  z?: number;
  rotation_deg?: number;
  allowed_categories?: string[];
  order_index?: number;
};

export class FormationService {
  // ─── reads ────────────────────────────────────────────────────────────────

  static async listActive(): Promise<Formation[]> {
    return CatalogCache.get(ACTIVE_KEY, async () => {
      const r = await db.execute(
        "SELECT * FROM formations WHERE status = 'active' ORDER BY tier_id, label, id",
      );
      return r.rows.map(toFormation);
    });
  }

  static async listAll(): Promise<Formation[]> {
    const r = await db.execute(
      "SELECT * FROM formations ORDER BY status = 'archived', tier_id, label, id",
    );
    return r.rows.map(toFormation);
  }

  static async get(id: string): Promise<Formation | null> {
    const r = await db.execute({
      sql: "SELECT * FROM formations WHERE id = ? LIMIT 1",
      args: [id],
    });
    return r.rows[0] ? toFormation(r.rows[0]) : null;
  }

  static async listSlots(formation_id: string): Promise<Slot[]> {
    const r = await db.execute({
      sql: `SELECT * FROM slots
            WHERE formation_id = ?
            ORDER BY order_index, created_at, id`,
      args: [formation_id],
    });
    return r.rows.map(toSlot);
  }

  static async getSlot(id: string): Promise<Slot | null> {
    const r = await db.execute({
      sql: "SELECT * FROM slots WHERE id = ? LIMIT 1",
      args: [id],
    });
    return r.rows[0] ? toSlot(r.rows[0]) : null;
  }

  /** One query, returns formation_id → slot count. Used by the list page so
   *  N formations don't trigger N round-trips. */
  static async slotCounts(): Promise<Map<string, number>> {
    const r = await db.execute(
      "SELECT formation_id, COUNT(*) AS n FROM slots GROUP BY formation_id",
    );
    const out = new Map<string, number>();
    for (const row of r.rows) {
      out.set(String((row as any).formation_id), Number((row as any).n ?? 0));
    }
    return out;
  }

  /** Bulk slot fetch for the admin grid — one query for N formations so the
   *  card SVG can render dots without an N+1 round-trip per page render. */
  static async slotsForFormations(
    formationIds: string[],
  ): Promise<Map<string, Slot[]>> {
    const out = new Map<string, Slot[]>();
    if (formationIds.length === 0) return out;
    // Pre-seed every id with an empty array so callers can `.get(id) ?? []`
    // without a fallback for formations that have no slots yet.
    for (const id of formationIds) out.set(id, []);
    const placeholders = formationIds.map(() => "?").join(",");
    const r = await db.execute({
      sql: `SELECT * FROM slots
            WHERE formation_id IN (${placeholders})
            ORDER BY formation_id, order_index, created_at, id`,
      args: formationIds,
    });
    for (const row of r.rows) {
      const slot = toSlot(row);
      const arr = out.get(slot.formation_id);
      if (arr) arr.push(slot);
    }
    return out;
  }

  /** Default-active formation for every tier. The wizard reads this through
   *  the catalog manifest — keyed by tier name so SceneManager can do
   *  `defaults[tier]` directly. Tiers with no current default are absent
   *  from the map; SceneManager falls back to its TIER_CONFIG. */
  static async activeDefaultsByTier(): Promise<
    Map<FormationTier, FormationWithSlots>
  > {
    return CatalogCache.get(DEFAULTS_KEY, async () => {
      const r = await db.execute(
        `SELECT * FROM formations
         WHERE is_default = 1 AND status = 'active' AND tier_id IS NOT NULL`,
      );
      const formations = r.rows.map(toFormation);
      const slotsMap = await this.slotsForFormations(formations.map((f) => f.id));
      const out = new Map<FormationTier, FormationWithSlots>();
      for (const f of formations) {
        if (!f.tier_id) continue;
        out.set(f.tier_id, { ...f, slots: slotsMap.get(f.id) ?? [] });
      }
      return out;
    });
  }

  static async getWithSlots(id: string): Promise<FormationWithSlots | null> {
    return CatalogCache.get(formationKey(id), async () => {
      const f = await this.get(id);
      if (!f) return null;
      const slots = await this.listSlots(id);
      return { ...f, slots };
    });
  }

  // ─── validation ───────────────────────────────────────────────────────────

  private static validateFormation(
    input: FormationCreate | FormationUpdate,
    opts: { isCreate: boolean },
  ) {
    if (opts.isCreate) {
      const i = input as FormationCreate;
      if (!SLUG_RE.test(i.id ?? "")) {
        throw new Error(
          "ID must start with a letter and contain only lowercase letters, digits, _ or -.",
        );
      }
    }
    const label = (input as any).label;
    if (label !== undefined) {
      if (typeof label !== "string" || label.trim().length === 0) {
        throw new Error("Label is required.");
      }
      if (label.length > LABEL_MAX) {
        throw new Error(`Label must be ${LABEL_MAX} characters or fewer.`);
      }
    }
    const desc = (input as any).description;
    if (desc != null && String(desc).length > DESC_MAX) {
      throw new Error(`Description must be ${DESC_MAX} characters or fewer.`);
    }
    const tier = (input as any).tier_id;
    if (tier !== undefined && tier !== null && tier !== "") {
      if (!isTier(tier)) {
        throw new Error(
          `Unknown tier "${tier}". Allowed: ${FORMATION_TIERS.join(", ")}.`,
        );
      }
    }
    for (const dim of ["canvas_width", "canvas_depth"] as const) {
      const v = (input as any)[dim];
      if (v !== undefined && v !== null) {
        const n = Number(v);
        if (!Number.isFinite(n) || n < CANVAS_MIN || n > CANVAS_MAX) {
          throw new Error(
            `${dim.replace("_", " ")} must be between ${CANVAS_MIN} and ${CANVAS_MAX} metres.`,
          );
        }
      }
    }
    const status = (input as any).status;
    if (status !== undefined && status !== "active" && status !== "archived") {
      throw new Error("Status must be active or archived.");
    }
  }

  private static validateSlot(
    formation: Formation,
    input: SlotCreate | SlotUpdate,
    opts: { isCreate: boolean },
  ) {
    const label = (input as any).label;
    if (label != null) {
      if (typeof label !== "string") throw new Error("Label must be a string.");
      if (label.length > SLOT_LABEL_MAX) {
        throw new Error(`Label must be ${SLOT_LABEL_MAX} characters or fewer.`);
      }
    }
    const cats = (input as any).allowed_categories;
    if (opts.isCreate || cats !== undefined) {
      if (!Array.isArray(cats) || cats.length === 0) {
        throw new Error("Pick at least one allowed role.");
      }
      const bad = (cats as unknown[]).filter((c) => !isCategory(c));
      if (bad.length > 0) {
        throw new Error(
          `Invalid role(s): ${bad.join(", ")}. Allowed: ${VEHICLE_CATEGORIES.join(", ")}.`,
        );
      }
      const unique = new Set(cats as string[]);
      if (unique.size !== cats.length) {
        throw new Error("Duplicate roles aren't allowed.");
      }
    }
    for (const coord of ["x", "z"] as const) {
      const v = (input as any)[coord];
      if (v !== undefined && v !== null) {
        const n = Number(v);
        if (!Number.isFinite(n)) {
          throw new Error(`${coord} must be a number.`);
        }
        if (Math.abs(n) > COORD_BOUND) {
          throw new Error(`${coord} is out of range (±${COORD_BOUND} m).`);
        }
        // Soft canvas bound: warn but allow up to COORD_BOUND so the admin
        // can place a marker just off-grid without first resizing the canvas.
        // Hard bound enforced by COORD_BOUND above.
        if (coord === "x" && Math.abs(n) > formation.canvas_width) {
          throw new Error(
            `x is outside the canvas (±${formation.canvas_width / 2} m). Widen the canvas first.`,
          );
        }
        if (coord === "z" && (n < -formation.canvas_depth || n > formation.canvas_depth * 1.5)) {
          throw new Error(
            `z is outside the canvas (0–${formation.canvas_depth} m). Lengthen the canvas first.`,
          );
        }
      }
    }
    const rot = (input as any).rotation_deg;
    if (rot !== undefined && rot !== null) {
      const n = Number(rot);
      if (!Number.isFinite(n)) throw new Error("Rotation must be a number.");
    }
    const oi = (input as any).order_index;
    if (oi !== undefined && oi !== null) {
      const n = Number(oi);
      if (!Number.isInteger(n) || n < 0) {
        throw new Error("Order index must be a non-negative integer.");
      }
    }
  }

  // ─── formation writes ─────────────────────────────────────────────────────

  static async create(input: FormationCreate): Promise<Formation> {
    this.validateFormation(input, { isCreate: true });

    const existing = await this.get(input.id);
    if (existing) throw new Error(`Formation "${input.id}" already exists.`);

    const tier =
      input.tier_id != null && input.tier_id !== "" && isTier(input.tier_id)
        ? input.tier_id
        : null;

    await db.execute({
      sql: `INSERT INTO formations
            (id, label, description, tier_id, canvas_width, canvas_depth,
             status, updated_at)
            VALUES (?, ?, ?, ?, ?, ?, 'active', CURRENT_TIMESTAMP)`,
      args: [
        input.id,
        input.label.trim(),
        input.description ?? null,
        tier,
        input.canvas_width ?? 60,
        input.canvas_depth ?? 200,
      ],
    });

    CatalogCache.invalidate(ACTIVE_KEY);
    CatalogCache.invalidate(DEFAULTS_KEY);
    const fresh = await this.get(input.id);
    if (!fresh) throw new Error("Formation disappeared after insert.");
    return fresh;
  }

  static async update(id: string, patch: FormationUpdate): Promise<Formation> {
    const existing = await this.get(id);
    if (!existing) throw new Error(`Unknown formation: ${id}`);

    this.validateFormation(patch, { isCreate: false });

    const sets: string[] = [];
    const args: any[] = [];
    const put = (col: string, value: any) => {
      sets.push(`${col} = ?`);
      args.push(value);
    };

    if (patch.label !== undefined) put("label", patch.label.trim());
    if (patch.description !== undefined) put("description", patch.description);
    if (patch.tier_id !== undefined) {
      put(
        "tier_id",
        patch.tier_id != null && patch.tier_id !== "" && isTier(patch.tier_id)
          ? patch.tier_id
          : null,
      );
    }
    if (patch.canvas_width !== undefined) put("canvas_width", patch.canvas_width);
    if (patch.canvas_depth !== undefined) put("canvas_depth", patch.canvas_depth);
    if (patch.status !== undefined) put("status", patch.status);

    if (sets.length === 0) return existing;

    sets.push("updated_at = CURRENT_TIMESTAMP");
    args.push(id);
    await db.execute({
      sql: `UPDATE formations SET ${sets.join(", ")} WHERE id = ?`,
      args,
    });

    CatalogCache.invalidate(ACTIVE_KEY);
    CatalogCache.invalidate(DEFAULTS_KEY);
    CatalogCache.invalidate(formationKey(id));
    const fresh = await this.get(id);
    if (!fresh) throw new Error("Formation disappeared after update.");
    return fresh;
  }

  static async archive(id: string): Promise<Formation> {
    // Archiving the default for a tier silently drops the default. The
    // wizard falls back to SceneManager.TIER_CONFIG until an admin picks
    // a new default. We DON'T auto-promote another formation — too magic;
    // admin should make the choice explicit.
    return this.update(id, { status: "archived" });
  }

  static async reactivate(id: string): Promise<Formation> {
    return this.update(id, { status: "active" });
  }

  /** Mark `id` as the default for its tier and clear any sibling default
   *  in a single batch so the partial unique index never sees a transient
   *  duplicate. Throws if the formation is archived or tier-less — both
   *  are nonsense states for "default in the wizard".
   *  Caches invalidated: ACTIVE_KEY, DEFAULTS_KEY, per-row formationKey. */
  static async setDefault(id: string): Promise<Formation> {
    const target = await this.get(id);
    if (!target) throw new Error(`Unknown formation: ${id}`);
    if (target.status === "archived") {
      throw new Error("Archived formations can't be made default. Reactivate first.");
    }
    if (!target.tier_id) {
      throw new Error("Assign a tier before marking this formation as default.");
    }

    // libsql batch = single transaction. Clear sibling first; the partial
    // unique index then accepts our SET. If the target is already default
    // the clear-step is a no-op and the set-step touches updated_at only.
    await db.batch([
      {
        sql: `UPDATE formations
              SET is_default = 0, updated_at = CURRENT_TIMESTAMP
              WHERE tier_id = ? AND is_default = 1 AND id != ?`,
        args: [target.tier_id, id],
      },
      {
        sql: `UPDATE formations
              SET is_default = 1, updated_at = CURRENT_TIMESTAMP
              WHERE id = ?`,
        args: [id],
      },
    ]);

    CatalogCache.invalidate(ACTIVE_KEY);
    CatalogCache.invalidate(DEFAULTS_KEY);
    CatalogCache.invalidate(formationKey(id));
    const fresh = await this.get(id);
    if (!fresh) throw new Error("Formation disappeared after setDefault.");
    return fresh;
  }

  // ─── slot writes ──────────────────────────────────────────────────────────

  static async addSlot(formation_id: string, input: SlotCreate): Promise<Slot> {
    const formation = await this.get(formation_id);
    if (!formation) throw new Error(`Unknown formation: ${formation_id}`);

    this.validateSlot(formation, input, { isCreate: true });

    // Cheap per-formation cap so a stuck client can't fill the table.
    const existing = await this.listSlots(formation_id);
    if (existing.length >= MAX_SLOTS_PER_FORMATION) {
      throw new Error(
        `Slot limit reached (${MAX_SLOTS_PER_FORMATION}). Archive one first.`,
      );
    }

    const id = randomUUID();
    const order_index =
      input.order_index ??
      (existing.length === 0
        ? 0
        : Math.max(...existing.map((s) => s.order_index)) + 1);

    await db.execute({
      sql: `INSERT INTO slots
            (id, formation_id, label, x, z, rotation_deg,
             allowed_categories, order_index)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      args: [
        id,
        formation_id,
        input.label ?? null,
        Number(input.x),
        Number(input.z),
        normalizeRotation(input.rotation_deg),
        JSON.stringify(input.allowed_categories),
        order_index,
      ],
    });

    CatalogCache.invalidate(formationKey(formation_id));
    CatalogCache.invalidate(DEFAULTS_KEY);
    const fresh = await this.getSlot(id);
    if (!fresh) throw new Error("Slot disappeared after insert.");
    return fresh;
  }

  static async updateSlot(id: string, patch: SlotUpdate): Promise<Slot> {
    const existing = await this.getSlot(id);
    if (!existing) throw new Error(`Unknown slot: ${id}`);

    const formation = await this.get(existing.formation_id);
    if (!formation) {
      // Orphaned slot — formation soft-archived, slot row lingered. Allow
      // the update so the admin can fix it, but skip canvas-bound checks.
      this.validateSlot(
        { ...existing, canvas_width: CANVAS_MAX, canvas_depth: CANVAS_MAX } as any,
        patch,
        { isCreate: false },
      );
    } else {
      this.validateSlot(formation, patch, { isCreate: false });
    }

    const sets: string[] = [];
    const args: any[] = [];
    const put = (col: string, value: any) => {
      sets.push(`${col} = ?`);
      args.push(value);
    };

    if (patch.label !== undefined) put("label", patch.label);
    if (patch.x !== undefined) put("x", Number(patch.x));
    if (patch.z !== undefined) put("z", Number(patch.z));
    if (patch.rotation_deg !== undefined)
      put("rotation_deg", normalizeRotation(patch.rotation_deg));
    if (patch.allowed_categories !== undefined)
      put("allowed_categories", JSON.stringify(patch.allowed_categories));
    if (patch.order_index !== undefined) put("order_index", patch.order_index);

    if (sets.length === 0) return existing;

    args.push(id);
    await db.execute({
      sql: `UPDATE slots SET ${sets.join(", ")} WHERE id = ?`,
      args,
    });

    CatalogCache.invalidate(formationKey(existing.formation_id));
    CatalogCache.invalidate(DEFAULTS_KEY);
    const fresh = await this.getSlot(id);
    if (!fresh) throw new Error("Slot disappeared after update.");
    return fresh;
  }

  static async deleteSlot(id: string): Promise<{ formation_id: string }> {
    const existing = await this.getSlot(id);
    if (!existing) throw new Error(`Unknown slot: ${id}`);

    await db.execute({
      sql: "DELETE FROM slots WHERE id = ?",
      args: [id],
    });

    CatalogCache.invalidate(formationKey(existing.formation_id));
    CatalogCache.invalidate(DEFAULTS_KEY);
    return { formation_id: existing.formation_id };
  }
}

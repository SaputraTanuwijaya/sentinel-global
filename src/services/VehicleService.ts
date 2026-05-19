import { db } from "../core/db";
import { CatalogCache } from "../core/cache";
import { PricingService } from "./PricingService";

// Role-based categories — match the wizard's slot roles exactly. Each vehicle
// can belong to multiple roles (e.g. F150 is both LEAD and REAR in the
// original Motorcade.tsx VEHICLE_DB).
export const VEHICLE_CATEGORIES = [
  "PRINCIPAL",
  "LEAD",
  "REAR",
  "SWEEPER",
  "CAT",
  "ECM",
] as const;
export type VehicleCategory = (typeof VEHICLE_CATEGORIES)[number];

export type VehicleSpecs = Record<string, string>;

export type Vehicle = {
  id: string;
  label: string;
  /** Canonical/primary category (first entry of `categories`). Kept for the
   *  legacy `vehicles.category` column. */
  category: VehicleCategory;
  /** Full set of roles this vehicle fits — used by the wizard slot picker. */
  categories: VehicleCategory[];
  description: string | null;
  model_path: string;
  thumbnail_path: string | null;
  scale: number;
  /** Y-axis rotation correction applied to the loaded GLB, in degrees.
   *  Replaces the F150/Electra special-case in SceneManager. */
  model_rotation_y_deg: number;
  price_cents: number;
  /** Free-form technical specs (armor, hp, torque, …). Rendered as-is in
   *  the wizard's vehicle detail panel; keys and labels are admin-defined. */
  specs: VehicleSpecs;
  status: "active" | "archived";
  created_at: string | null;
  updated_at: string | null;
};

// Keep validation simple but bounded so a malformed admin payload can't
// stuff arbitrary blobs into the manifest.
const SPEC_MAX_ENTRIES = 20;
const SPEC_KEY_MAX = 32;
const SPEC_VALUE_MAX = 128;
const SPEC_KEY_RE = /^[a-z][a-z0-9_]{0,31}$/;

// Canonical spec keys that every vehicle is expected to carry. The admin
// form locks these (editable values, immutable keys, can't remove) and the
// service auto-fills any missing ones with an empty string. The wizard
// detail panel renders empty values as "—" so partial data doesn't crash
// the UI. Order here = order shown in admin.
export const REQUIRED_SPEC_KEYS = [
  "armor",
  "protection",
  "hp",
  "torque",
  "speed",
  "occupancy",
] as const;

const ACTIVE_KEY = "vehicles.active";

// Vehicle slugs (Escalade, G63, BMW) are mixed-case for product-name fidelity,
// so this is looser than the dresscode slug regex.
// Exported so the admin route can validate the slug BEFORE writing the file
// to disk — otherwise a bad slug 400s the DB insert but leaves an orphan
// upload behind (e.g. "Rolls Royce Ghost.glb" with spaces).
export const VEHICLE_SLUG_RE = /^[A-Za-z][A-Za-z0-9_-]{0,62}$/;
const SLUG_RE = VEHICLE_SLUG_RE;

const isCategory = (s: unknown): s is VehicleCategory =>
  typeof s === "string" && (VEHICLE_CATEGORIES as readonly string[]).includes(s);

function parseCategories(raw: unknown): VehicleCategory[] {
  if (Array.isArray(raw))
    return (raw as unknown[]).filter(isCategory) as VehicleCategory[];
  if (typeof raw === "string" && raw.length > 0) {
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return (parsed as unknown[]).filter(isCategory) as VehicleCategory[];
      }
    } catch {
      /* fall through to single-value fallback */
    }
    if (isCategory(raw)) return [raw];
  }
  return [];
}

function parseSpecs(raw: unknown): VehicleSpecs {
  // Accept either an already-parsed object (rare — the DB returns text) or
  // a JSON string. Anything malformed yields an empty record so the caller
  // can render a "no specs" empty state instead of crashing.
  if (raw == null || raw === "") return {};
  let obj: unknown = raw;
  if (typeof raw === "string") {
    try {
      obj = JSON.parse(raw);
    } catch {
      return {};
    }
  }
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) return {};
  const out: VehicleSpecs = {};
  for (const [k, v] of Object.entries(obj as Record<string, unknown>)) {
    if (typeof k !== "string" || !SPEC_KEY_RE.test(k)) continue;
    if (typeof v !== "string") continue;
    out[k] = v.length > SPEC_VALUE_MAX ? v.slice(0, SPEC_VALUE_MAX) : v;
  }
  return out;
}

function normalizeRotation(raw: unknown): number {
  const n = Number(raw ?? 0);
  if (!Number.isFinite(n)) return 0;
  // Wrap into [0, 360) so admin can type negatives or values > 360 freely.
  const wrapped = ((n % 360) + 360) % 360;
  return wrapped;
}

function toVehicle(r: any): Vehicle {
  const cats = parseCategories(r.categories);
  // Fallback chain: parsed categories → legacy `category` value → empty.
  // We never want an empty `category` field exposed; pick a deterministic
  // primary from the array.
  const primary: VehicleCategory =
    (cats[0] as VehicleCategory) ??
    (isCategory(r.category) ? (r.category as VehicleCategory) : ("LEAD" as VehicleCategory));
  return {
    id: r.id as string,
    label: r.label as string,
    category: primary,
    categories: cats.length > 0 ? cats : [primary],
    description: (r.description ?? null) as string | null,
    model_path: r.model_path as string,
    thumbnail_path: (r.thumbnail_path ?? null) as string | null,
    scale: Number(r.scale ?? 1),
    model_rotation_y_deg: normalizeRotation(r.model_rotation_y_deg),
    price_cents: Number(r.price_cents ?? 0),
    specs: parseSpecs(r.specs_json),
    status: (r.status as "active" | "archived") ?? "active",
    created_at: (r.created_at ?? null) as string | null,
    updated_at: (r.updated_at ?? null) as string | null,
  };
}

type CreateInput = {
  id: string;
  label: string;
  /** At least one role. Stored as a JSON array under `categories`; the first
   *  entry is mirrored into the legacy `category` column. */
  categories: string[];
  description?: string | null;
  model_path: string;
  thumbnail_path?: string | null;
  scale?: number;
  model_rotation_y_deg?: number;
  price_cents?: number;
  specs?: VehicleSpecs;
};

type UpdateInput = {
  label?: string;
  categories?: string[];
  description?: string | null;
  model_path?: string;
  thumbnail_path?: string | null;
  scale?: number;
  model_rotation_y_deg?: number;
  price_cents?: number;
  specs?: VehicleSpecs;
  status?: "active" | "archived";
};

export class VehicleService {
  // ─── reads ────────────────────────────────────────────────────────────────

  static async listActive(): Promise<Vehicle[]> {
    return CatalogCache.get(ACTIVE_KEY, async () => {
      const r = await db.execute(
        "SELECT * FROM vehicles WHERE status = 'active' ORDER BY category, label, id",
      );
      return r.rows.map(toVehicle);
    });
  }

  static async listAll(filter?: { category?: string }): Promise<Vehicle[]> {
    if (filter?.category && isCategory(filter.category)) {
      // Filter by membership in the JSON `categories` array. Falls back to
      // legacy `category = ?` for any rows that haven't been migrated yet.
      const r = await db.execute({
        sql: `SELECT * FROM vehicles
              WHERE (categories LIKE ?) OR (category = ?)
              ORDER BY status = 'archived', label, id`,
        args: [`%"${filter.category}"%`, filter.category],
      });
      return r.rows.map(toVehicle);
    }
    const r = await db.execute(
      "SELECT * FROM vehicles ORDER BY status = 'archived', category, label, id",
    );
    return r.rows.map(toVehicle);
  }

  static async get(id: string): Promise<Vehicle | null> {
    const r = await db.execute({
      sql: "SELECT * FROM vehicles WHERE id = ? LIMIT 1",
      args: [id],
    });
    return r.rows[0] ? toVehicle(r.rows[0]) : null;
  }

  // ─── writes ───────────────────────────────────────────────────────────────

  private static validate(
    input: CreateInput | UpdateInput,
    opts: { isCreate: boolean },
  ) {
    if (opts.isCreate) {
      const i = input as CreateInput;
      if (!SLUG_RE.test(i.id ?? "")) {
        throw new Error(
          "ID must start with a letter and contain only letters, digits, _ or -.",
        );
      }
      if (!i.model_path || typeof i.model_path !== "string") {
        throw new Error("A GLB model is required.");
      }
      // Categories required on create — empty array means the vehicle would
      // be unselectable in the wizard.
      if (!Array.isArray(i.categories) || i.categories.length === 0) {
        throw new Error("Pick at least one role.");
      }
    }
    const label = (input as any).label;
    if (label !== undefined) {
      if (typeof label !== "string" || label.trim().length === 0) {
        throw new Error("Label is required.");
      }
      if (label.length > 80) throw new Error("Label must be 80 characters or fewer.");
    }
    const cats = (input as any).categories;
    if (cats !== undefined) {
      if (!Array.isArray(cats) || cats.length === 0) {
        throw new Error("Pick at least one role.");
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
    const desc = (input as any).description;
    if (desc != null && String(desc).length > 2000) {
      throw new Error("Description must be 2000 characters or fewer.");
    }
    const scale = (input as any).scale;
    if (scale !== undefined && scale !== null) {
      const n = Number(scale);
      if (!Number.isFinite(n) || n <= 0) {
        throw new Error("Scale must be a positive number.");
      }
      if (n > 10) throw new Error("Scale cannot exceed 10.");
    }
    const price = (input as any).price_cents;
    if (price !== undefined && price !== null) {
      const n = Number(price);
      if (!Number.isFinite(n) || n < 0 || !Number.isInteger(n)) {
        throw new Error("Price must be a non-negative integer (cents).");
      }
      if (n > PricingService.MAX_CENTS) {
        throw new Error(
          `Price cannot exceed $${(PricingService.MAX_CENTS / 100).toLocaleString()}.`,
        );
      }
    }
    const status = (input as any).status;
    if (status !== undefined && status !== "active" && status !== "archived") {
      throw new Error("Status must be active or archived.");
    }
    const rotation = (input as any).model_rotation_y_deg;
    if (rotation !== undefined && rotation !== null) {
      const n = Number(rotation);
      if (!Number.isFinite(n)) {
        throw new Error("Rotation must be a number (degrees).");
      }
    }
    const specs = (input as any).specs;
    if (specs !== undefined && specs !== null) {
      if (typeof specs !== "object" || Array.isArray(specs)) {
        throw new Error("Specs must be a key/value object.");
      }
      const entries = Object.entries(specs as Record<string, unknown>);
      if (entries.length > SPEC_MAX_ENTRIES) {
        throw new Error(`Specs can have at most ${SPEC_MAX_ENTRIES} entries.`);
      }
      for (const [k, v] of entries) {
        if (typeof k !== "string" || !SPEC_KEY_RE.test(k)) {
          throw new Error(
            `Spec key "${k}" is invalid — use lower-case letters, digits, and underscores (max ${SPEC_KEY_MAX}).`,
          );
        }
        if (typeof v !== "string") {
          throw new Error(`Spec value for "${k}" must be a string.`);
        }
        if (v.length > SPEC_VALUE_MAX) {
          throw new Error(
            `Spec value for "${k}" must be ${SPEC_VALUE_MAX} characters or fewer.`,
          );
        }
      }
      // Guarantee canonical keys exist so the wizard's detail panel can
      // depend on them. Missing required keys are filled with "" — the UI
      // shows that as "—" rather than dropping the row entirely.
      for (const required of REQUIRED_SPEC_KEYS) {
        if (!(required in (specs as Record<string, string>))) {
          (specs as Record<string, string>)[required] = "";
        }
      }
    }
  }

  static async create(input: CreateInput): Promise<Vehicle> {
    this.validate(input, { isCreate: true });

    const existing = await this.get(input.id);
    if (existing) throw new Error(`Vehicle "${input.id}" already exists.`);

    const primary = input.categories[0]!;
    await db.execute({
      sql: `INSERT INTO vehicles
            (id, label, category, categories, description, model_path, thumbnail_path,
             scale, model_rotation_y_deg, price_cents, specs_json,
             status, updated_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'active', CURRENT_TIMESTAMP)`,
      args: [
        input.id,
        input.label.trim(),
        primary,
        JSON.stringify(input.categories),
        input.description ?? null,
        input.model_path,
        input.thumbnail_path ?? null,
        input.scale ?? 1.0,
        normalizeRotation(input.model_rotation_y_deg),
        input.price_cents ?? 0,
        input.specs && Object.keys(input.specs).length > 0
          ? JSON.stringify(input.specs)
          : null,
      ],
    });

    CatalogCache.invalidate(ACTIVE_KEY);
    const fresh = await this.get(input.id);
    if (!fresh) throw new Error("Vehicle disappeared after insert.");
    return fresh;
  }

  static async update(id: string, patch: UpdateInput): Promise<Vehicle> {
    const existing = await this.get(id);
    if (!existing) throw new Error(`Unknown vehicle: ${id}`);

    this.validate(patch, { isCreate: false });

    const sets: string[] = [];
    const args: any[] = [];
    const put = (col: string, value: any) => {
      sets.push(`${col} = ?`);
      args.push(value);
    };

    if (patch.label !== undefined) put("label", patch.label.trim());
    if (patch.categories !== undefined) {
      // Keep the legacy `category` column in sync with the first entry so
      // any code path still reading it gets a coherent value.
      put("category", patch.categories[0]!);
      put("categories", JSON.stringify(patch.categories));
    }
    if (patch.description !== undefined) put("description", patch.description);
    if (patch.model_path !== undefined) put("model_path", patch.model_path);
    if (patch.thumbnail_path !== undefined)
      put("thumbnail_path", patch.thumbnail_path);
    if (patch.scale !== undefined) put("scale", patch.scale);
    if (patch.model_rotation_y_deg !== undefined)
      put("model_rotation_y_deg", normalizeRotation(patch.model_rotation_y_deg));
    if (patch.price_cents !== undefined) put("price_cents", patch.price_cents);
    if (patch.specs !== undefined) {
      put(
        "specs_json",
        patch.specs && Object.keys(patch.specs).length > 0
          ? JSON.stringify(patch.specs)
          : null,
      );
    }
    if (patch.status !== undefined) put("status", patch.status);

    if (sets.length === 0) return existing;

    sets.push("updated_at = CURRENT_TIMESTAMP");
    args.push(id);
    await db.execute({
      sql: `UPDATE vehicles SET ${sets.join(", ")} WHERE id = ?`,
      args,
    });

    CatalogCache.invalidate(ACTIVE_KEY);
    const fresh = await this.get(id);
    if (!fresh) throw new Error("Vehicle disappeared after update.");
    return fresh;
  }

  static async archive(id: string): Promise<Vehicle> {
    return this.update(id, { status: "archived" });
  }

  static async reactivate(id: string): Promise<Vehicle> {
    return this.update(id, { status: "active" });
  }
}

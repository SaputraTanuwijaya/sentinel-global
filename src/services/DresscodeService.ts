import { db } from "../core/db";
import { CatalogCache } from "../core/cache";
import { PricingService } from "./PricingService";

export type Dresscode = {
  id: string;
  label: string;
  description: string | null;
  video_path: string | null;
  poster_path: string | null;
  price_multiplier: number;
  order_index: number;
  status: "active" | "archived";
  created_at: string | null;
  updated_at: string | null;
};

const ACTIVE_KEY = "dresscodes.active";
const SLUG_RE = /^[a-z][a-z0-9_-]{0,62}$/;

function toDresscode(r: any): Dresscode {
  return {
    id: r.id as string,
    label: r.label as string,
    description: (r.description ?? null) as string | null,
    video_path: (r.video_path ?? null) as string | null,
    poster_path: (r.poster_path ?? null) as string | null,
    price_multiplier: Number(r.price_multiplier ?? 1),
    order_index: Number(r.order_index ?? 0),
    status: (r.status as "active" | "archived") ?? "active",
    created_at: (r.created_at ?? null) as string | null,
    updated_at: (r.updated_at ?? null) as string | null,
  };
}

type CreateInput = {
  id: string;
  label: string;
  description?: string | null;
  price_multiplier?: number;
  order_index?: number;
  video_path?: string | null;
  poster_path?: string | null;
};

type UpdateInput = {
  label?: string;
  description?: string | null;
  price_multiplier?: number;
  order_index?: number;
  video_path?: string | null;
  poster_path?: string | null;
  status?: "active" | "archived";
};

export class DresscodeService {
  // ─── reads ────────────────────────────────────────────────────────────────

  static async listActive(): Promise<Dresscode[]> {
    return CatalogCache.get(ACTIVE_KEY, async () => {
      const r = await db.execute(
        "SELECT * FROM dresscodes WHERE status = 'active' ORDER BY order_index, id",
      );
      return r.rows.map(toDresscode);
    });
  }

  static async listAll(): Promise<Dresscode[]> {
    const r = await db.execute(
      "SELECT * FROM dresscodes ORDER BY status = 'archived', order_index, id",
    );
    return r.rows.map(toDresscode);
  }

  static async get(id: string): Promise<Dresscode | null> {
    const r = await db.execute({
      sql: "SELECT * FROM dresscodes WHERE id = ? LIMIT 1",
      args: [id],
    });
    return r.rows[0] ? toDresscode(r.rows[0]) : null;
  }

  // ─── writes ───────────────────────────────────────────────────────────────

  private static validate(input: CreateInput | UpdateInput, opts: { isCreate: boolean }) {
    if (opts.isCreate) {
      const i = input as CreateInput;
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
      if (label.length > 80) throw new Error("Label must be 80 characters or fewer.");
    }
    const desc = (input as any).description;
    if (desc != null && String(desc).length > 2000) {
      throw new Error("Description must be 2000 characters or fewer.");
    }
    const pm = (input as any).price_multiplier;
    if (pm !== undefined && pm !== null) {
      const n = Number(pm);
      if (!Number.isFinite(n) || n < 0) {
        throw new Error("Price multiplier must be zero or positive.");
      }
      if (n > PricingService.MAX_MULT) {
        throw new Error(`Price multiplier cannot exceed ${PricingService.MAX_MULT}.`);
      }
    }
    const oi = (input as any).order_index;
    if (oi !== undefined && oi !== null) {
      const n = Number(oi);
      if (!Number.isInteger(n) || n < 0) {
        throw new Error("Order index must be a non-negative integer.");
      }
    }
    const status = (input as any).status;
    if (status !== undefined && status !== "active" && status !== "archived") {
      throw new Error("Status must be active or archived.");
    }
  }

  static async create(input: CreateInput): Promise<Dresscode> {
    this.validate(input, { isCreate: true });

    const existing = await this.get(input.id);
    if (existing) throw new Error(`Dresscode "${input.id}" already exists.`);

    await db.execute({
      sql: `INSERT INTO dresscodes
            (id, label, description, video_path, poster_path,
             price_multiplier, order_index, status, updated_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, 'active', CURRENT_TIMESTAMP)`,
      args: [
        input.id,
        input.label.trim(),
        input.description ?? null,
        input.video_path ?? null,
        input.poster_path ?? null,
        input.price_multiplier ?? 1.0,
        input.order_index ?? 0,
      ],
    });

    CatalogCache.invalidate(ACTIVE_KEY);
    const fresh = await this.get(input.id);
    if (!fresh) throw new Error("Dresscode disappeared after insert.");
    return fresh;
  }

  static async update(id: string, patch: UpdateInput): Promise<Dresscode> {
    const existing = await this.get(id);
    if (!existing) throw new Error(`Unknown dresscode: ${id}`);

    this.validate(patch, { isCreate: false });

    const sets: string[] = [];
    const args: any[] = [];
    const put = (col: string, value: any) => {
      sets.push(`${col} = ?`);
      args.push(value);
    };

    if (patch.label !== undefined) put("label", patch.label.trim());
    if (patch.description !== undefined) put("description", patch.description);
    if (patch.video_path !== undefined) put("video_path", patch.video_path);
    if (patch.poster_path !== undefined) put("poster_path", patch.poster_path);
    if (patch.price_multiplier !== undefined)
      put("price_multiplier", patch.price_multiplier);
    if (patch.order_index !== undefined) put("order_index", patch.order_index);
    if (patch.status !== undefined) put("status", patch.status);

    if (sets.length === 0) return existing;

    sets.push("updated_at = CURRENT_TIMESTAMP");
    args.push(id);
    await db.execute({
      sql: `UPDATE dresscodes SET ${sets.join(", ")} WHERE id = ?`,
      args,
    });

    CatalogCache.invalidate(ACTIVE_KEY);
    const fresh = await this.get(id);
    if (!fresh) throw new Error("Dresscode disappeared after update.");
    return fresh;
  }

  static async archive(id: string): Promise<Dresscode> {
    return this.update(id, { status: "archived" });
  }

  static async reactivate(id: string): Promise<Dresscode> {
    return this.update(id, { status: "active" });
  }
}

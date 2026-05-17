import { db } from "../core/db";
import { CatalogCache } from "../core/cache";

export type PricingRule = {
  key: string;
  category: string;
  label: string;
  description: string | null;
  value_cents: number | null;
  value_multiplier: number | null;
  updated_at: string | null;
};

const CACHE_KEY = "pricing.all";

export class PricingService {
  static readonly MAX_CENTS = 100_000_000; // $1,000,000
  static readonly MAX_MULT = 5.0;

  // ─── reads (cache-backed) ────────────────────────────────────────────────

  static async getAll(): Promise<PricingRule[]> {
    return CatalogCache.get(CACHE_KEY, async () => {
      const result = await db.execute(
        "SELECT key, category, label, description, value_cents, value_multiplier, updated_at FROM pricing_rules ORDER BY category, key",
      );
      return result.rows.map((r) => ({
        key: r.key as string,
        category: r.category as string,
        label: r.label as string,
        description: (r.description ?? null) as string | null,
        value_cents:
          r.value_cents == null ? null : Number(r.value_cents),
        value_multiplier:
          r.value_multiplier == null ? null : Number(r.value_multiplier),
        updated_at: (r.updated_at ?? null) as string | null,
      }));
    });
  }

  static async getAllAsMap(): Promise<Map<string, PricingRule>> {
    const rules = await this.getAll();
    return new Map(rules.map((r) => [r.key, r]));
  }

  static async get(key: string): Promise<PricingRule | null> {
    const rules = await this.getAll();
    return rules.find((r) => r.key === key) ?? null;
  }

  // ─── writes (validate + invalidate) ──────────────────────────────────────

  static async update(
    key: string,
    patch: { value_cents?: number; value_multiplier?: number },
  ): Promise<PricingRule> {
    const existing = await this.get(key);
    if (!existing) {
      throw new Error(`Unknown pricing rule: ${key}`);
    }

    const hasCents = patch.value_cents !== undefined;
    const hasMult = patch.value_multiplier !== undefined;

    if (hasCents === hasMult) {
      throw new Error(
        "Provide exactly one of value_cents or value_multiplier.",
      );
    }

    // Don't allow flipping a rule's "shape" — a cents row stays cents, etc.
    const ruleShape: "cents" | "multiplier" =
      existing.value_cents !== null ? "cents" : "multiplier";

    if (hasCents && ruleShape !== "cents") {
      throw new Error(`Rule "${key}" expects a multiplier, not a price.`);
    }
    if (hasMult && ruleShape !== "multiplier") {
      throw new Error(`Rule "${key}" expects a price, not a multiplier.`);
    }

    if (hasCents) {
      const n = patch.value_cents!;
      if (!Number.isFinite(n)) throw new Error("Enter a number.");
      if (n < 0) throw new Error("Must be zero or positive.");
      if (n > PricingService.MAX_CENTS) {
        throw new Error(
          `Cannot exceed $${(PricingService.MAX_CENTS / 100).toLocaleString()}.`,
        );
      }
      await db.execute({
        sql: "UPDATE pricing_rules SET value_cents = ?, updated_at = CURRENT_TIMESTAMP WHERE key = ?",
        args: [Math.round(n), key],
      });
    } else {
      const n = patch.value_multiplier!;
      if (!Number.isFinite(n)) throw new Error("Enter a number.");
      if (n < 0) throw new Error("Must be zero or positive.");
      if (n > PricingService.MAX_MULT) {
        throw new Error(`Multiplier cannot exceed ${PricingService.MAX_MULT}.`);
      }
      await db.execute({
        sql: "UPDATE pricing_rules SET value_multiplier = ?, updated_at = CURRENT_TIMESTAMP WHERE key = ?",
        args: [n, key],
      });
    }

    CatalogCache.invalidate(CACHE_KEY);

    const updated = await this.get(key);
    if (!updated) {
      // Shouldn't happen — we just updated it — but be defensive.
      throw new Error("Pricing rule disappeared after update.");
    }
    return updated;
  }
}

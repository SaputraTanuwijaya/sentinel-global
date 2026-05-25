// One-time migration: unify vehicle pricing on vehicles.price_cents.
//
// Until now the pricing matrix carried `vehicle_role.PRINCIPAL`, `.LEAD`,
// `.CAT`, etc. as the source of truth, and the per-vehicle `price_cents`
// column was inert (admin could edit it but no math used it). That made the
// admin UI lie: the Vehicle edit page advertised a price field that did
// nothing.
//
// This script:
//   1. For every vehicle with price_cents=0 (i.e. never touched by admin),
//      backfill from the matching pricing_rules.vehicle_role.{primary_role}.
//      Vehicles whose admin already set a price are preserved.
//   2. DELETE every `vehicle_role.*` row from pricing_rules. Mission history
//      (totalCost stored at write time) is unaffected.
//
// Idempotent: re-running after the backfill is a no-op (no vehicle_role
// rules left to read from; the WHERE on price_cents=0 protects against
// reseeding admin-set prices).
//
// Run once with:
//   bun run scripts/migrate-pricing-vehicle-unify.ts

import { db } from "../src/core/db";

async function main() {
  console.log("→ backfilling vehicles.price_cents from vehicle_role.* rules");

  // Pull the role→cents map from whatever vehicle_role rules currently exist.
  // If the rules table is already clean (re-run), this is just empty.
  const rulesResult = await db.execute(
    `SELECT key, value_cents FROM pricing_rules WHERE category = 'vehicle_role'`,
  );
  const rolePriceMap = new Map<string, number>();
  for (const row of rulesResult.rows) {
    const key = String((row as any).key ?? "");
    const cents = Number((row as any).value_cents ?? 0);
    if (!key.startsWith("vehicle_role.")) continue;
    const role = key.slice("vehicle_role.".length);
    rolePriceMap.set(role, cents);
  }
  console.log(`   found ${rolePriceMap.size} vehicle_role rule(s)`);

  if (rolePriceMap.size === 0) {
    console.log("   (nothing to backfill — already migrated)");
  } else {
    // Only touch vehicles with price_cents=0. Anything non-zero is presumed
    // admin-set and gets to keep its value.
    const vehiclesResult = await db.execute(
      `SELECT id, category FROM vehicles WHERE price_cents = 0`,
    );
    let updated = 0;
    for (const row of vehiclesResult.rows) {
      const id = String((row as any).id ?? "");
      const role = String((row as any).category ?? "");
      const cents = rolePriceMap.get(role);
      if (cents == null) {
        console.log(`     · ${id}: no role price for "${role}" — left at 0`);
        continue;
      }
      await db.execute({
        sql: `UPDATE vehicles SET price_cents = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`,
        args: [cents, id],
      });
      console.log(`     · ${id}: set to $${(cents / 100).toFixed(2)}/hr (from ${role})`);
      updated += 1;
    }
    console.log(`   ✓ backfilled ${updated} vehicle(s)`);
  }

  console.log("→ deleting vehicle_role.* pricing rules");
  const del = await db.execute(
    `DELETE FROM pricing_rules WHERE category = 'vehicle_role'`,
  );
  console.log(`   ✓ ${del.rowsAffected ?? "?"} row(s) removed`);

  console.log("Done.");
}

main().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});

// Idempotent migration: adds rendezvous columns to the `missions` table.
//
// Wizard step 5 (Rendezvous.tsx) captures a map pin (lat/lng) and a UTC
// datetime, both held on window.MissionState. Until this script runs, those
// values were captured client-side and dropped on the floor at checkout —
// the missions row had no columns for them, so admin detail pages showed
// nothing about WHERE/WHEN the deployment was supposed to happen.
//
// Safe to re-run: every ALTER is gated on a column-exists check via
// `PRAGMA table_info(missions)`.
//
// Run once with:
//   bun run scripts/migrate-mission-rendezvous.ts

import { db } from "../src/core/db";

async function columnExists(table: string, column: string): Promise<boolean> {
  const r = await db.execute(`PRAGMA table_info(${table})`);
  return r.rows.some((row: any) => (row.name ?? row[1]) === column);
}

async function addColumnIfMissing(
  table: string,
  column: string,
  ddl: string,
): Promise<void> {
  if (await columnExists(table, column)) {
    console.log(`   ✓ ${table}.${column} already present`);
    return;
  }
  await db.execute(`ALTER TABLE ${table} ADD COLUMN ${column} ${ddl}`);
  console.log(`   ✓ added ${table}.${column}`);
}

async function main() {
  console.log("→ upgrading missions: rendezvous columns");
  // Three nullable columns so old rows (created before this migration) stay
  // valid. Lat/lng are decimal degrees. rendezvous_at stores whatever the
  // <input type="datetime-local"> emitted (no tz) — kept as TEXT to mirror
  // how Turso already stores created_at strings.
  await addColumnIfMissing("missions", "location_lat", "REAL");
  await addColumnIfMissing("missions", "location_lng", "REAL");
  await addColumnIfMissing("missions", "rendezvous_at", "TEXT");
  console.log("Done.");
}

main().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});

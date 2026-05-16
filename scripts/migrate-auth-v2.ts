// Run once: bun run scripts/migrate-auth-v2.ts
// Idempotent — catches "duplicate column" errors so it's safe to re-run.
import "../src/core/env";
import { db } from "../src/core/db";

const additions = [
  "ALTER TABLE users ADD COLUMN phone TEXT",
  "ALTER TABLE users ADD COLUMN country TEXT",
];

for (const sql of additions) {
  try {
    await db.execute(sql);
    console.log("OK:", sql);
  } catch (err: any) {
    if (/duplicate column/i.test(err.message ?? "")) {
      console.log("skip (already exists):", sql);
    } else {
      throw err;
    }
  }
}

console.log("\nMigration v2 complete.");
process.exit(0);

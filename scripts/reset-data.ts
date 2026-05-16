// One-shot wipe of test data. Schema is preserved — only rows are deleted.
// Run: bun run scripts/reset-data.ts
import "../src/core/env";
import { db } from "../src/core/db";

const targets = ["sessions", "missions", "users"]; // order matters: FK from sessions -> users

console.log("Counting rows before delete:");
for (const t of targets) {
  const r = await db.execute(`SELECT COUNT(*) as n FROM ${t}`);
  console.log(`  ${t}: ${r.rows[0].n}`);
}

console.log("\nDeleting...");
for (const t of targets) {
  await db.execute(`DELETE FROM ${t}`);
  console.log(`  cleared ${t}`);
}

console.log("\nVerifying empty:");
for (const t of targets) {
  const r = await db.execute(`SELECT COUNT(*) as n FROM ${t}`);
  console.log(`  ${t}: ${r.rows[0].n}`);
}

console.log("\nDone.");
process.exit(0);

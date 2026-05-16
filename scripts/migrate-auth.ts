// Run once: bun run scripts/migrate-auth.ts
// Idempotent — safe to re-run.
import "../src/core/env";
import { db } from "../src/core/db";

const statements = [
  `CREATE TABLE IF NOT EXISTS users (
     id TEXT PRIMARY KEY,
     email TEXT NOT NULL UNIQUE,
     provider TEXT NOT NULL,
     provider_user_id TEXT NOT NULL,
     password_hash TEXT,
     name TEXT,
     picture_url TEXT,
     created_at TEXT DEFAULT CURRENT_TIMESTAMP,
     last_login_at TEXT
   )`,
  `CREATE UNIQUE INDEX IF NOT EXISTS idx_users_provider
     ON users(provider, provider_user_id)`,
  `CREATE TABLE IF NOT EXISTS sessions (
     id TEXT PRIMARY KEY,
     user_id TEXT NOT NULL,
     expires_at TEXT NOT NULL,
     created_at TEXT DEFAULT CURRENT_TIMESTAMP,
     FOREIGN KEY (user_id) REFERENCES users(id)
   )`,
  `CREATE INDEX IF NOT EXISTS idx_sessions_user ON sessions(user_id)`,
];

for (const sql of statements) {
  await db.execute(sql);
  console.log("OK:", sql.split("\n")[0].trim());
}

console.log("\nMigration complete.");
process.exit(0);

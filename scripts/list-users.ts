// Quick listing of existing users (passwords are hashed — only email/provider shown)
import "../src/core/env";
import { db } from "../src/core/db";

const r = await db.execute(
  "SELECT email, provider, name, created_at FROM users ORDER BY created_at DESC",
);
console.table(r.rows);
process.exit(0);

import { randomBytes, randomUUID } from "crypto";
import { db } from "../core/db";

export type User = {
  id: string;
  email: string;
  provider: "password" | "google";
  provider_user_id: string;
  name: string | null;
  picture_url: string | null;
  phone: string | null;
  country: string | null;
};

const SESSION_TTL_SEC = 60 * 60 * 24 * 30; // 30 days

function rowToUser(r: any): User {
  return {
    id: r.id,
    email: r.email,
    provider: r.provider,
    provider_user_id: r.provider_user_id,
    name: r.name,
    picture_url: r.picture_url,
    phone: r.phone ?? null,
    country: r.country ?? null,
  };
}

export class UserService {
  // ── Email/password ──────────────────────────────────────────────────────

  static async register(args: {
    email: string;
    password: string;
    name?: string;
    phone?: string;
    country?: string;
  }) {
    const existing = await db.execute({
      sql: "SELECT id FROM users WHERE email = ?",
      args: [args.email],
    });
    if (existing.rows.length > 0) {
      throw new Error("Email already registered.");
    }

    const id = randomUUID();
    const password_hash = await Bun.password.hash(args.password); // argon2id by default
    const now = new Date().toISOString();

    await db.execute({
      sql: `INSERT INTO users
              (id, email, provider, provider_user_id, password_hash, name, phone, country, last_login_at)
            VALUES (?, ?, 'password', ?, ?, ?, ?, ?, ?)`,
      args: [
        id,
        args.email,
        args.email,
        password_hash,
        args.name ?? null,
        args.phone ?? null,
        args.country ?? null,
        now,
      ],
    });

    return {
      id,
      email: args.email,
      provider: "password",
      provider_user_id: args.email,
      name: args.name ?? null,
      picture_url: null,
      phone: args.phone ?? null,
      country: args.country ?? null,
    } as User;
  }

  static async loginWithPassword(email: string, password: string): Promise<User | null> {
    const result = await db.execute({
      sql: "SELECT * FROM users WHERE email = ? AND provider = 'password'",
      args: [email],
    });
    const row = result.rows[0] as any;
    if (!row || !row.password_hash) return null;

    const ok = await Bun.password.verify(password, row.password_hash);
    if (!ok) return null;

    await db.execute({
      sql: "UPDATE users SET last_login_at = ? WHERE id = ?",
      args: [new Date().toISOString(), row.id],
    });
    return rowToUser(row);
  }

  // ── OAuth ───────────────────────────────────────────────────────────────

  static async upsertFromOAuth(args: {
    provider: "google";
    providerUserId: string;
    email: string;
    name?: string;
    pictureUrl?: string;
  }): Promise<User> {
    const now = new Date().toISOString();

    const existing = await db.execute({
      sql: "SELECT * FROM users WHERE provider = ? AND provider_user_id = ?",
      args: [args.provider, args.providerUserId],
    });

    if (existing.rows.length > 0) {
      const row = existing.rows[0] as any;
      await db.execute({
        sql: `UPDATE users SET email = ?, name = ?, picture_url = ?, last_login_at = ?
              WHERE id = ?`,
        args: [args.email, args.name ?? null, args.pictureUrl ?? null, now, row.id],
      });
      return rowToUser({ ...row, email: args.email, name: args.name, picture_url: args.pictureUrl });
    }

    const id = randomUUID();
    await db.execute({
      sql: `INSERT INTO users
              (id, email, provider, provider_user_id, name, picture_url, last_login_at)
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
      args: [id, args.email, args.provider, args.providerUserId, args.name ?? null, args.pictureUrl ?? null, now],
    });
    return {
      id, email: args.email, provider: args.provider,
      provider_user_id: args.providerUserId,
      name: args.name ?? null, picture_url: args.pictureUrl ?? null,
      phone: null, country: null,
    };
  }

  // ── Sessions (opaque tokens, not JWT) ───────────────────────────────────

  static async createSession(userId: string, ttlSec = SESSION_TTL_SEC) {
    const id = randomBytes(32).toString("hex");
    const expiresAt = new Date(Date.now() + ttlSec * 1000).toISOString();
    await db.execute({
      sql: "INSERT INTO sessions (id, user_id, expires_at) VALUES (?, ?, ?)",
      args: [id, userId, expiresAt],
    });
    return { id, expiresAt };
  }

  static async getSessionUser(token: string): Promise<User | null> {
    if (!token) return null;
    const result = await db.execute({
      sql: `SELECT u.* FROM sessions s
            JOIN users u ON u.id = s.user_id
            WHERE s.id = ? AND s.expires_at > ?`,
      args: [token, new Date().toISOString()],
    });
    const row = result.rows[0] as any;
    return row ? rowToUser(row) : null;
  }

  static async revokeSession(token: string) {
    if (!token) return;
    await db.execute({ sql: "DELETE FROM sessions WHERE id = ?", args: [token] });
  }

  static async gcExpired() {
    await db.execute({
      sql: "DELETE FROM sessions WHERE expires_at <= ?",
      args: [new Date().toISOString()],
    });
  }
}

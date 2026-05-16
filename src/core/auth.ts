import Elysia, { redirect } from "elysia";
import { jwt } from "@elysiajs/jwt";
import { env } from "./env";
import { UserService, type User } from "../services/UserService";

// Named plugin so Elysia deduplicates when used in multiple scopes.
export const jwtPlugin = new Elysia({ name: "jwt-plugin" }).use(
  jwt({ name: "jwt", secret: env.JWT_SECRET }),
);

// ── User context (per-request) ──────────────────────────────────────────────
// Resolves `user` from the `session` cookie on every request.
//
// IMPORTANT: this uses `derive` (per-request), NOT `store` (server-global).
// `store.user = ...` would leak across all requests for all clients — we hit
// that bug once and it logged everyone in as whoever logged in last.
export const userContext = new Elysia({ name: "user-context" }).derive(
  { as: "scoped" },
  async ({ cookie }): Promise<{ user: User | null }> => {
    const token = cookie.session?.value;
    if (!token) return { user: null };
    const user = await UserService.getSessionUser(token);
    return { user };
  },
);

// ── Admin (single password, JWT in `auth` cookie) ───────────────────────────
export const requireAdmin = async ({ jwt, cookie }: any) => {
  const token = cookie.auth?.value;
  if (!token) return redirect("/login");
  const payload = await jwt.verify(token);
  if (!payload || payload.sub !== "admin") return redirect("/login");
};

// ── End-user guards (require userContext to be applied first) ───────────────
// Page guard: redirects to /auth/login on miss.
export const requireUser = ({ user }: any) => {
  if (!user) return redirect("/auth/login");
};

// API guard: returns 401 JSON instead of redirecting (better for HTMX/fetch).
export const requireUserApi = ({ user, set }: any) => {
  if (!user) {
    set.status = 401;
    return { error: "Authentication required." };
  }
};

export type { User };

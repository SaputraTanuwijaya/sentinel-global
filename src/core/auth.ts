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
// Both miss-paths route to the unified /auth/login (email='admin' lane). The
// legacy /login + /api/login flow is being retired — see src/views/Login.tsx
// and the GET/POST /login routes in src/index.tsx (slated for removal in P2).
export const requireAdmin = async ({ jwt, cookie }: any) => {
  const token = cookie.auth?.value;
  if (!token) return redirect("/auth/login");
  const payload = await jwt.verify(token);
  if (!payload || payload.sub !== "admin") return redirect("/auth/login");
};

// ── End-user guards (require userContext to be applied first) ───────────────
// Page guard: redirects to /auth/login on miss.
export const requireUser = ({ user }: any) => {
  if (!user) return redirect("/auth/login");
};

// API guard for protected endpoints called from the wizard.
//
// - HTMX requests: respond with HX-Redirect so HTMX issues a full-window
//   navigation to /auth/login. We thread a `next` query param so login can
//   bounce the user back to the step they were on. Mission state survives
//   the round-trip via localStorage (see layout.tsx).
// - Plain fetch: return a 401 JSON body — for any non-HTMX caller, the
//   browser can decide what to do.
export const requireUserApi = ({ user, set, request }: any) => {
  if (user) return;
  const isHtmx = request?.headers?.get?.("HX-Request") === "true";
  if (isHtmx) {
    const referer = request.headers.get("Referer") || "";
    // Pull the path from Referer (origin-stripped) so we can resume on the
    // exact wizard step. Falls back to /step/6 (Checkout) because that's
    // the only protected entry point today.
    let next = "/step/6";
    try {
      const url = new URL(referer);
      if (url.pathname.startsWith("/step/")) next = url.pathname;
    } catch {
      /* no referer / malformed — keep default */
    }
    set.headers["HX-Redirect"] =
      `/auth/login?next=${encodeURIComponent(next)}`;
    return "";
  }
  set.status = 401;
  return { error: "Authentication required." };
};

export type { User };

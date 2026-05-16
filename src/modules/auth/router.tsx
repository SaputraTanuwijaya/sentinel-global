import { timingSafeEqual } from "crypto";
import { Elysia, redirect, t } from "elysia";
import { Html } from "@elysiajs/html";
import { generateState, generateCodeVerifier, OAuth2RequestError } from "arctic";
import { google } from "../../core/oauth";
import { UserService } from "../../services/UserService";
import { env } from "../../core/env";
import { jwtPlugin } from "../../core/auth";
import { UserLoginPage } from "../../views/auth/UserLogin";
import { RegisterPage } from "../../views/auth/Register";

const SESSION_DEFAULT_TTL = 60 * 60 * 24 * 30;       // 30 days
const SESSION_REMEMBER_TTL = 60 * 60 * 24 * 365;     // 1 year ("remember me")
const ADMIN_DEFAULT_TTL = 60 * 60 * 12;              // 12 hours
const ADMIN_REMEMBER_TTL = 60 * 60 * 24 * 365;       // 1 year ("remember me")
const STATE_MAX_AGE = 60 * 5;                        // 5 minutes (PKCE state)

const baseCookieFlags = {
  httpOnly: true,
  sameSite: "lax" as const,
  path: "/",
  secure: env.NODE_ENV === "production",
};

const stateCookieFlags = { ...baseCookieFlags, maxAge: STATE_MAX_AGE };

// HTML checkboxes submit "on" when checked, nothing when unchecked.
const isChecked = (v: unknown) => v === "on" || v === "true" || v === true;

// Constant-time admin password compare (timing-attack safe).
function adminPasswordMatches(input: string): boolean {
  const a = Buffer.from(input);
  const b = Buffer.from(env.ADMIN_PASSWORD);
  if (a.length !== b.length) {
    // Still do a comparison so timing doesn't reveal length.
    timingSafeEqual(Buffer.alloc(1), Buffer.alloc(1));
    return false;
  }
  return timingSafeEqual(a, b);
}

export const authRouter = new Elysia({ prefix: "/auth" })
  .use(jwtPlugin) // makes `jwt` available for the unified login admin path

  // ── Email/password (or admin via email='admin') ──────────────────────────
  .get("/login", () => <UserLoginPage />)
  .get("/register", () => <RegisterPage />)

  .post(
    "/register",
    async ({ body, cookie, set }) => {
      const email = body.email.trim().toLowerCase();
      const password = body.password;
      const name = body.name?.trim() || undefined;
      const phone = body.phone?.trim() || undefined;
      const country = body.country?.trim() || undefined;

      if (email === "admin") {
        set.status = 400;
        return (
          <RegisterPage
            error="That email is reserved."
            values={{ email: "", name, phone, country }}
          />
        );
      }

      if (password.length < 8) {
        set.status = 400;
        return (
          <RegisterPage
            error="Password must be at least 8 characters."
            values={{ email, name, phone, country }}
          />
        );
      }

      try {
        const user = await UserService.register({ email, password, name, phone, country });
        const remember = isChecked(body.remember);
        const ttl = remember ? SESSION_REMEMBER_TTL : SESSION_DEFAULT_TTL;
        const session = await UserService.createSession(user.id, ttl);
        cookie.session.set({ value: session.id, ...baseCookieFlags, maxAge: ttl });
        return redirect("/");
      } catch (err: any) {
        set.status = 400;
        return (
          <RegisterPage
            error={err.message ?? "Registration failed."}
            values={{ email, name, phone, country }}
          />
        );
      }
    },
    {
      body: t.Object({
        email: t.String({ format: "email" }),
        password: t.String({ minLength: 8 }),
        name: t.Optional(t.String()),
        phone: t.Optional(t.String()),
        country: t.Optional(t.String()),
        remember: t.Optional(t.String()),
      }),
    },
  )

  .post(
    "/login",
    async ({ body, jwt, cookie, set }) => {
      const email = body.email.trim().toLowerCase();
      const remember = isChecked(body.remember);

      // Same generic error for admin and user paths to avoid revealing whether
      // a given email exists — the only public signal is "good or bad".
      const fail = () => {
        set.status = 401;
        return (
          <UserLoginPage error="Invalid email or password." values={{ email }} />
        );
      };

      // ── Admin path (special email "admin" + ADMIN_PASSWORD) ────────────
      if (email === "admin") {
        if (!adminPasswordMatches(body.password)) return fail();

        const ttl = remember ? ADMIN_REMEMBER_TTL : ADMIN_DEFAULT_TTL;
        const exp = Math.floor(Date.now() / 1000) + ttl;
        const token = await jwt.sign({ sub: "admin", exp });
        cookie.auth.set({ value: token, ...baseCookieFlags, maxAge: ttl });
        return redirect("/admin");
      }

      // ── Regular user path ──────────────────────────────────────────────
      const user = await UserService.loginWithPassword(email, body.password);
      if (!user) return fail();

      const ttl = remember ? SESSION_REMEMBER_TTL : SESSION_DEFAULT_TTL;
      const session = await UserService.createSession(user.id, ttl);
      cookie.session.set({ value: session.id, ...baseCookieFlags, maxAge: ttl });
      return redirect("/");
    },
    {
      body: t.Object({
        email: t.String(),
        password: t.String(),
        remember: t.Optional(t.String()),
      }),
    },
  )

  .post("/logout", async ({ cookie }) => {
    const token = cookie.session?.value;
    if (token) await UserService.revokeSession(token);
    cookie.session.remove();
    // Also clear admin cookie so logout clears both possible sessions.
    cookie.auth?.remove();
    return redirect("/");
  })

  // ── Google OAuth ──────────────────────────────────────────────────────────
  .get("/google", ({ cookie }) => {
    const state = generateState();
    const codeVerifier = generateCodeVerifier();
    const url = google.createAuthorizationURL(state, codeVerifier, [
      "openid",
      "profile",
      "email",
    ]);

    cookie.oauth_state.set({ value: state, ...stateCookieFlags });
    cookie.oauth_verifier.set({ value: codeVerifier, ...stateCookieFlags });

    return redirect(url.toString());
  })

  .get("/google/callback", async ({ query, cookie, set }) => {
    const code = query.code;
    const returnedState = query.state;
    const storedState = cookie.oauth_state?.value;
    const codeVerifier = cookie.oauth_verifier?.value;

    if (!code || !returnedState || !storedState || !codeVerifier || returnedState !== storedState) {
      set.status = 400;
      return "Invalid OAuth state. Please try signing in again.";
    }

    cookie.oauth_state.remove();
    cookie.oauth_verifier.remove();

    try {
      const tokens = await google.validateAuthorizationCode(code, codeVerifier);

      const userinfoRes = await fetch(
        "https://www.googleapis.com/oauth2/v2/userinfo",
        { headers: { Authorization: `Bearer ${tokens.accessToken()}` } },
      );
      if (!userinfoRes.ok) {
        set.status = 502;
        return "Failed to fetch Google profile.";
      }
      const profile = (await userinfoRes.json()) as {
        id: string;
        email: string;
        name?: string;
        picture?: string;
        verified_email?: boolean;
      };

      const user = await UserService.upsertFromOAuth({
        provider: "google",
        providerUserId: profile.id,
        email: profile.email,
        name: profile.name,
        pictureUrl: profile.picture,
      });

      // Google sign-ins default to "remember" — most OAuth flows keep you
      // logged in across browser restarts.
      const session = await UserService.createSession(user.id, SESSION_REMEMBER_TTL);
      cookie.session.set({
        value: session.id,
        ...baseCookieFlags,
        maxAge: SESSION_REMEMBER_TTL,
      });
      return redirect("/");
    } catch (err: any) {
      console.error(
        "/// GOOGLE OAUTH FAILED ///",
        err instanceof OAuth2RequestError ? err.code : err.message ?? err,
      );
      set.status = 500;
      return "Google sign-in failed. Please try again.";
    }
  });

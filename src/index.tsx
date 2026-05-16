import "./core/env"; // boot-time validation — throws on missing vars
import { timingSafeEqual } from "crypto";
import { Elysia, redirect, t } from "elysia";
import { html, Html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { Layout } from "./views/layout";
import { AdminDashboard } from "./views/Admin";
import { LoginPage } from "./views/Login";
import { db } from "./core/db";
import { env } from "./core/env";
import { jwtPlugin, requireAdmin, userContext } from "./core/auth";
import { orderRouter } from "./modules/order/router.tsx";
import { authRouter } from "./modules/auth/router.tsx";

const app = new Elysia()
  .use(html())
  .use(staticPlugin({ assets: "src/public", prefix: "/public" }))
  .use(jwtPlugin)
  .use(userContext)
  .use(authRouter)
  .use(orderRouter)

  // ── Public ────────────────────────────────────────────────────────────────

  .get("/", ({ user }) => {
    return (
      <Layout>
        <div
          class="flex flex-col items-center justify-center h-full w-full pointer-events-auto"
          hx-trigger="load"
          hx-on:load="document.body.dispatchEvent(new CustomEvent('sentinel-bg-change', { detail: { theme: 'black' } }))"
        >
          <div class="glass-panel p-8 rounded-lg max-w-2xl text-center pointer-events-auto">
            <div class="mb-8 flex justify-center">
              <img
                src="/public/assets/images/logo.png"
                alt="Sentinel Global Logo"
                class="w-[20vw] h-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              />
            </div>

            <h1 class="text-4xl font-bold tracking-widest uppercase mb-4 text-white">
              Sentinel Global
            </h1>
            <p class="text-gray-400 mb-8">
              Secure Logistics & Bodyguard Simulation
            </p>

            {user ? (
              <div class="flex flex-col items-center gap-4">
                <p class="text-xs text-sentinel-accent tracking-widest uppercase">
                  Welcome, {user.name ?? user.email}
                </p>
                <button
                  class="px-6 py-3 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors pointer-events-auto cursor-pointer"
                  hx-get="/step/1"
                  hx-target="#ui-layer"
                  hx-swap="innerHTML"
                >
                  Initiate Deployment
                </button>
                {/* hx-boost="false" — without this, HTMX hijacks the POST,
                    swaps the redirect's HTML into #ui-layer, and the browser
                    never actually navigates. Native form submit is what we
                    want here so the Set-Cookie header takes effect. */}
                <form
                  method="POST"
                  action="/auth/logout"
                  hx-boost="false"
                  class="text-xs text-gray-500 hover:text-white tracking-widest uppercase"
                >
                  <button type="submit" class="cursor-pointer">
                    Logout
                  </button>
                </form>
              </div>
            ) : (
              <div class="flex flex-col items-center gap-3">
                <div class="flex gap-3">
                  <a
                    href="/auth/login"
                    class="px-6 py-3 bg-white text-black font-bold uppercase tracking-wider hover:bg-sentinel-accent transition-colors pointer-events-auto cursor-pointer"
                  >
                    Sign In
                  </a>
                  <a
                    href="/auth/register"
                    class="px-6 py-3 bg-zinc-900 border border-white/20 text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors pointer-events-auto cursor-pointer"
                  >
                    Register
                  </a>
                </div>
                <button
                  class="text-xs text-gray-400 hover:text-white tracking-widest uppercase mt-3 cursor-pointer pointer-events-auto"
                  hx-get="/step/1"
                  hx-target="#ui-layer"
                  hx-swap="innerHTML"
                  title="Browse the wizard without an account. Checkout requires login."
                >
                  Continue as Guest →
                </button>
              </div>
            )}
          </div>
        </div>
      </Layout>
    );
  })

  // ── Admin auth (separate flow from end-user auth) ─────────────────────────

  .get("/login", ({ cookie }) => {
    if (cookie.auth?.value) return redirect("/admin");
    return <LoginPage />;
  })

  .post(
    "/api/login",
    async ({ jwt, cookie, body, set }) => {
      if (!cookie.auth) {
        set.status = 500;
        return "Authentication cookie is not configured.";
      }

      const pwdBuf = Buffer.from(body.password);
      const expectedBuf = Buffer.from(env.ADMIN_PASSWORD);

      // Always run a fixed-length comparison to prevent timing attacks
      const safeLen = Math.max(pwdBuf.length, expectedBuf.length);
      const a = Buffer.alloc(safeLen);
      const b = Buffer.alloc(safeLen);
      pwdBuf.copy(a);
      expectedBuf.copy(b);
      const match =
        pwdBuf.length === expectedBuf.length && timingSafeEqual(a, b);

      if (!match) {
        set.status = 401;
        return <LoginPage error="Invalid access key." />;
      }

      const token = await jwt.sign({ sub: "admin" });
      cookie.auth.set({
        value: token,
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 12,
        secure: env.NODE_ENV === "production",
      });

      return redirect("/admin");
    },
    { body: t.Object({ password: t.String() }) },
  )

  .post("/api/logout", ({ cookie }) => {
    cookie.auth?.remove();
    return redirect("/login");
  })

  // ── Admin (guarded) ───────────────────────────────────────────────────────

  .get(
    "/admin",
    async () => {
      const result = await db.execute(
        "SELECT * FROM missions ORDER BY created_at DESC",
      );
      const missions = result.rows;
      return (
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <title>Sentinel Global | Overwatch</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <script>
              {`tailwind.config = { theme: { extend: { colors: { 'sentinel-accent': '#d4af37' } } } }`}
            </script>
          </head>
          <body class="bg-black overflow-x-hidden">
            <AdminDashboard missions={missions} />
          </body>
        </html>
      );
    },
    { beforeHandle: requireAdmin },
  )

  .listen(3000);

console.log(
  `Sentinel Global is running at ${app.server?.hostname}:${app.server?.port}`,
);

# Sentinel Global

A cinematic, full-stack simulation of an executive-protection ordering platform. Users build a mission — principals, security tier, attire, motorcade layout, rendezvous point — and watch a persistent Three.js scene react in real time as they go. Operators administer the catalog (vehicles, dress codes, pricing matrix, formations) through a separate admin suite.

Built as a portfolio piece to explore how far a **modular Bun + Elysia monolith** can be pushed with **server-rendered JSX**, **HTMX swaps**, and a **persistent 3D shell** that never reloads.

---

## Highlights

- **Persistent 3D shell** — Three.js canvas mounts once at boot. Every wizard step is an HTMX swap into `#ui-layer`; the scene reacts via custom events instead of remount.
- **Modular monolith** — Each capability (auth, order, admin) is its own Elysia router under `src/modules/`, mounted by `src/index.tsx`. Services live in `src/services/` and own all DB access.
- **Two-tier auth** — Single-admin JWT cookie + multi-user opaque sessions in Turso. Google OAuth via PKCE. Admin and end-user share one login UI with branching on `email === "admin"`.
- **CMS-style admin** — Six capabilities live and editable: missions, dress codes, vehicles, formations, pricing, and a top-down 2D slot editor for motorcade layouts.
- **Catalog manifest** — `/api/catalog/manifest.json` is the single source of truth shared between server and client. Admin edits invalidate an in-process cache; the wizard re-reads on next request with cache-busted asset URLs.
- **Money in integer minor units** — End-to-end cents arithmetic, dollars only at UI boundaries. No floating-point drift in checkout totals.

---

## Tech Stack

| Layer       | Choice |
|-------------|--------|
| Runtime     | [Bun](https://bun.sh) |
| Server      | [ElysiaJS](https://elysiajs.com) with JSX SSR via `@elysiajs/html` |
| Frontend    | [HTMX](https://htmx.org) for interactivity, [Tailwind CSS v4](https://tailwindcss.com) for styling |
| 3D Engine   | [Three.js](https://threejs.org) with DRACO-compressed GLBs |
| Database    | [Turso](https://turso.tech) (libSQL) via `@libsql/client` |
| Auth        | `@elysiajs/jwt` for admin · `arctic` for Google OAuth · `Bun.password` (argon2id) for passwords |
| Maps        | [Leaflet](https://leafletjs.com) with OpenStreetMap geocoding |

---

## Quick Start

### 1. Prerequisites

- [Bun](https://bun.sh/docs/installation) `>= 1.1`
- A [Turso](https://turso.tech) database (the free tier is plenty for development)
- A [Google OAuth client](https://console.cloud.google.com/apis/credentials) (only if you want to test social sign-in)

### 2. Install dependencies

```bash
bun install
```

### 3. Configure environment

Create a `.env` file in the project root:

```env
# Turso (libSQL)
TURSO_DATABASE_URL=libsql://your-db-name.turso.io
TURSO_AUTH_TOKEN=eyJhbGciOi...

# Auth secrets
JWT_SECRET=<32+ random chars; used to sign admin JWTs>
ADMIN_PASSWORD=<the admin login password>

# Google OAuth — required even if unused; the boot validator throws on missing keys
GOOGLE_CLIENT_ID=<from Google Cloud Console>
GOOGLE_CLIENT_SECRET=<from Google Cloud Console>

# Optional
OAUTH_REDIRECT_URL=http://localhost:3000/auth/google/callback
NODE_ENV=development
```

`src/core/env.ts` validates these on boot and throws a clear error if any are missing.

**Google OAuth setup**: in the Google Cloud Console, set *Authorized JavaScript origins* to `http://localhost:3000` and *Authorized redirect URIs* to `http://localhost:3000/auth/google/callback` (different fields, different formats).

### 4. Run migrations

Order matters — auth tables first, then admin catalog, then the additive column migrations:

```bash
bun run scripts/migrate-auth.ts                    # creates users + sessions
bun run scripts/migrate-auth-v2.ts                 # adds phone + country
bun run scripts/migrate-admin.ts                   # 6 catalog tables + seeds
bun run scripts/migrate-mission-rendezvous.ts      # adds rendezvous columns to missions
bun run scripts/migrate-pricing-vehicle-unify.ts   # moves vehicle pricing onto vehicles.price_cents
```

All migrations are idempotent — safe to re-run.

### 5. Start the dev environment

You need **three** watchers running concurrently (in separate terminals):

```bash
bun run css                # Tailwind, writes src/public/styles.css
bun run build:client       # Wizard bundle, writes src/public/js/index.js
bun run dev                # Elysia server on http://localhost:3000
```

When working on the admin slot editor, add a fourth:

```bash
bun run build:admin-client # Admin bundle, writes src/public/js/admin.js
```

> **Windows tip**: `bun.exe` doesn't always die with `Ctrl-C` from a bash shell. If `bun run dev` starts logging port-in-use errors, run `taskkill /F /IM bun.exe` and try again.

### 6. Visit

- `http://localhost:3000` — wizard entry, "Continue as Guest" works without an account
- `http://localhost:3000/auth/login` — sign in (admin = email `admin`, password from `.env`; users register on the same form)
- `http://localhost:3000/admin` — admin dashboard (requires admin login)

---

## Architecture

### Persistent shell + HTMX swaps

`src/views/layout.tsx` renders an outer HTML shell containing a fixed `<div id="canvas-container">` (the Three.js mount) and a relative `<main id="ui-layer">`. Every wizard step is rendered as a fragment and swapped into `#ui-layer` via HTMX — the 3D scene never unmounts.

Wizard steps communicate with the 3D engine through `window.CustomEvent`s and a single `window.Sentinel` singleton (`src/client/SceneManager.ts`). State lives on `window.MissionState`, persisted to `sessionStorage` so an auth round-trip mid-wizard doesn't lose the user's selections — but a tab close starts fresh.

### Modular monolith

```
src/index.tsx           Mounts plugins + routers, defines / and listens on :3000
src/modules/
  ├─ auth/router.tsx    /auth/* — login, register, logout, Google OAuth
  ├─ order/router.tsx   /step/* + /api/checkout + /api/catalog/manifest.json
  └─ admin/router.tsx   /admin/* — everything CMS
```

Each router is an `Elysia` instance imported and mounted via `.use()`. No router talks to the database directly — DB access is exclusively in `src/services/`.

### Services own the database

```
src/services/
  ├─ MissionService.ts    Pricing math + missions table
  ├─ UserService.ts       Users + sessions (argon2id passwords)
  ├─ DresscodeService.ts  Catalog CRUD with cache invalidation
  ├─ VehicleService.ts    Catalog CRUD; per-vehicle pricing lives here
  ├─ FormationService.ts  Formations + slots; per-tier default selection
  └─ PricingService.ts    Base + tier rules (vehicle prices are in VehicleService)
```

Every read goes through `CatalogCache.get(key, loader)` (`src/core/cache.ts`); every write calls `service.update(...)` then `CatalogCache.invalidate(key)`. The cache is an in-process Map — fine for single-replica deployments.

### Catalog manifest

`GET /api/catalog/manifest.json` returns one JSON document with pricing rules, dress codes, vehicles, and active formations per tier. The wizard layout fetches it on boot and exposes:

- `window.__PRICING__` — flat key → cents map (`base.per_principal_hour`, `tier.Sentinel`, etc.)
- `window.__DRESSCODES__` — id → `{label, description, video_path, poster_path}`
- `window.__VEHICLES__` — id → `{label, model_path, thumbnail_path, scale, price_cents, specs, …}`
- `window.__FORMATIONS__` — tier name → `{id, label, canvas_*, slots[]}`

Every asset URL is stamped with `?v={updated_at}` so re-uploads bust both the browser cache and `SceneManager.modelCache` without renaming files on disk.

---

## Project Structure

```
sentinel-global/
├─ src/
│  ├─ index.tsx                       Server entry, mounts routers
│  ├─ input.css                       Tailwind source
│  ├─ core/
│  │  ├─ env.ts                       Boot-time env validation
│  │  ├─ db.ts                        Turso client
│  │  ├─ auth.ts                      JWT plugin, userContext (derive!), guards
│  │  ├─ oauth.ts                     arctic Google client
│  │  ├─ cache.ts                     CatalogCache (in-process Map)
│  │  └─ uploads.ts                   Multipart write helpers
│  ├─ services/                       All DB access goes through here
│  │  ├─ MissionService.ts
│  │  ├─ UserService.ts
│  │  ├─ DresscodeService.ts
│  │  ├─ VehicleService.ts
│  │  ├─ FormationService.ts
│  │  └─ PricingService.ts
│  ├─ modules/
│  │  ├─ order/
│  │  │  ├─ router.tsx                /step/*, /api/checkout, manifest
│  │  │  ├─ models/Mission.ts         Type definitions
│  │  │  └─ views/                    Wizard step UIs (1 → 6)
│  │  ├─ auth/router.tsx              /auth/* including OAuth
│  │  └─ admin/router.tsx             /admin/* (all six capabilities)
│  ├─ views/
│  │  ├─ layout.tsx                   Persistent shell + boot script
│  │  ├─ Admin.tsx                    Dashboard / mission table
│  │  ├─ admin/                       Admin views (one per capability)
│  │  └─ auth/                        UserLogin, Register, AuthLayout, GoogleButton
│  ├─ client/
│  │  ├─ SceneManager.ts              Three.js singleton, exposed as window.Sentinel
│  │  ├─ index.ts                     Wizard bundle entry
│  │  └─ admin/
│  │     ├─ index.ts                  Admin bundle entry
│  │     └─ SlotEditor.ts             Drag/keyboard/popover/sidebar for /admin/formations/:id
│  └─ public/                         Build output + static assets (gitignored except assets)
├─ scripts/                           Idempotent migrations + smoke utilities
└─ package.json
```

---

## Features

### Wizard (`/step/1` … `/step/6`)

1. **Principal Count** — pick how many VIPs are on the trip (1–5). 3D phalanx updates live.
2. **Security Tier** — Vanguard / Sentinel / Praetorian. Card prices are pulled from the live admin pricing matrix.
3. **Dress Code** — video carousel; selection drives the 3D background.
4. **Motorcade** — top-down deployment grid. Click a holographic slot to open the garage drawer; pick a vehicle filtered by the slot's allowed roles.
5. **Rendezvous** — interactive Leaflet map. Search, click, "locate me", or paste a Google Maps URL.
6. **Checkout** — mission summary, duration slider (6–72h), payment form (simulated). Server re-validates the entire `MissionState` shape before persisting.

A floating financial ledger overlay in the top-right tracks the running total live as the user navigates.

### Admin (`/admin`)

Sidebar navigation between six capabilities, all gated by `requireAdmin`:

| Section     | Path                       | What you can do |
|-------------|----------------------------|-----------------|
| Dashboard   | `/admin`                   | List of all missions with inline status changes |
| Missions    | `/admin/missions/:id`      | Detail view including rendezvous coords + time |
| Dresscodes  | `/admin/dresscodes`        | CRUD with video + auto-generated poster upload |
| Vehicles    | `/admin/vehicles`          | CRUD with GLB upload, manual thumbnail, per-row rotation, multi-role tags, free-form specs, per-vehicle pricing |
| Pricing     | `/admin/pricing`           | Inline-edit base + tier rules. Vehicle prices are read-only here with edit links into `/admin/vehicles/:id` |
| Formations  | `/admin/formations[/:id]`  | Top-down 2D slot editor — drag, click empty space to add, `Delete` to remove, `R` to rotate. Mark one formation per tier as the active default |

### Authentication

Two independent flows that share one login form:

- **Admin** — single password from `.env`. Branches in the unified login handler when `email === "admin"`. JWT in an `auth` cookie (12h default, 1y if "remember me"). No registration path.
- **End user** — email + password (argon2id via `Bun.password.hash`) or Google OAuth (PKCE). Opaque session token (64 hex chars) backed by a `sessions` row in Turso. Revocable — logout deletes the row.

Guest checkout is supported: a guest can browse the entire wizard. Hitting `POST /api/checkout` bounces them to `/auth/login` via `HX-Redirect`, then back to the same step with state intact (sessionStorage spans the round-trip).

See `.claude/auth.md` for the deep reference.

---

## Conventions

- **Money in integer minor units in storage.** Dollars at the UI boundary, conversion via `Math.round(n * 100)` at the route. No floats stored.
- **Soft archive everywhere.** Dresscodes, vehicles, missions, formations — `status = 'archived'`, never `DELETE`. Mission history references survive admin archival because slug ids + values are denormalized at write time.
- **JSX uses `class=`, not `className=`.** The renderer is `@elysiajs/html`, not React.
- **Per-request user resolution via `derive`, never `store`.** Hard-won lesson — `store` is server-global and leaks across requests.
- **Cache-bust uploaded media URLs.** Files are keyed by slug → re-upload overwrites in place → same URL would serve stale bytes. Manifest stamps `?v={updated_at}` on every asset path.
- **HTMX submits bypass HTML5 `pattern`/`required`.** Validate slugs server-side BEFORE filesystem writes, or you get orphan files on a 400.
- **htmx v2 defaults skip 4xx swaps.** Both `Layout` and `AdminLayout` override `htmx.config.responseHandling` to swap `[45]..` so server-rendered error forms reach the DOM.

---

## Docker

Multi-stage build: `oven/bun:1` for the toolchain (Tailwind CLI + `bun build` bundler), `oven/bun:1-slim` for the runner. The runtime stage runs as the non-root `bun` user and ships with dev deps pruned. Final image is **~360MB** (≈67MB of that is seed assets in `src/public/assets/` — videos, GLBs, posters).

### Build & run

```bash
# Build (first run pulls base images, ~2-3 min; subsequent rebuilds use layer cache)
docker build -t sentinel-global .

# Run foreground (Ctrl-C to stop)
docker run --rm -p 3000:3000 --env-file .env sentinel-global

# Run detached
docker run -d --name sentinel -p 3000:3000 --env-file .env sentinel-global
docker logs -f sentinel        # tail
docker stop sentinel && docker rm sentinel

# Run a migration against the live DB from inside the image
docker run --rm --env-file .env sentinel-global bun run scripts/migrate-admin.ts
```

Then visit `http://localhost:3000`. The container reads the same six required env vars as local dev — boot will fail fast with a named-variable error if any are missing.

### What the Dockerfile does

1. **Builder** installs all deps (incl. dev) → runs `bun run build` (Tailwind minify + two `bun build --minify` bundles) → re-runs `bun install --production` to drop ~150MB of dev deps before they cross to the runtime stage.
2. **Runner** copies `node_modules`, `src/`, `package.json`, and `tsconfig.json` only. The tsconfig is non-obvious but essential — Bun reads it at runtime for the JSX factory (`Html.createElement`); without it, the server crashes on boot with `Cannot find module 'react/jsx-runtime'`.
3. `.dockerignore` excludes secrets (`.env*`), local config (`.claude/`, `docs/`), and the three built artifacts (`src/public/js/index.js`, `src/public/js/admin.js`, `src/public/styles.css`) so the image always reflects a fresh build, not a stale dev copy.

### Known limitations

- **Admin uploads land in the container's writable layer.** Anything uploaded via `/admin/vehicles` or `/admin/dresscodes` is gone on `docker rm` or redeploy. For real persistence: mount a volume at `/app/src/public/assets/` (Fly.io has `fly volumes`), or migrate uploads to object storage (R2 / S3).
- **Single-replica by default.** No `HEALTHCHECK` directive. A crash → container exit → relies on the orchestrator's restart policy.

---

## Deployment

The image runs anywhere a Docker container does. Bun + Elysia is **not Vercel-native** — the persistent in-process cache and the active WebGL context on the client side don't fit Vercel's serverless model. Recommended target is **Fly.io**: free hobby tier, runs the existing Dockerfile unmodified, and `fly secrets` handles env vars cleanly.

### Fly.io path

```bash
fly launch                      # answers prompts, creates fly.toml; uses the local Dockerfile
fly secrets set \
  TURSO_DATABASE_URL=libsql://your-db.turso.io \
  TURSO_AUTH_TOKEN=... \
  JWT_SECRET=... \
  ADMIN_PASSWORD=... \
  GOOGLE_CLIENT_ID=... \
  GOOGLE_CLIENT_SECRET=... \
  OAUTH_REDIRECT_URL=https://your-app.fly.dev/auth/google/callback
fly deploy
```

Two follow-ups before going live:

1. **Update the Google OAuth client** in Google Cloud Console — add `https://your-app.fly.dev` to *Authorized JavaScript origins* and `https://your-app.fly.dev/auth/google/callback` to *Authorized redirect URIs*.
2. **Run the migrations against the production Turso DB once.** From local:
   ```bash
   TURSO_DATABASE_URL=... TURSO_AUTH_TOKEN=... bun run scripts/migrate-admin.ts
   # ...and the other four migrations listed under Quick Start step 4
   ```

Railway, Render, and Koyeb all work the same way — point at the Dockerfile, set env vars, deploy.

---

## License

Personal portfolio project. All rights reserved.

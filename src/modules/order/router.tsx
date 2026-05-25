import { Elysia, t } from "elysia";
import { Html } from "@elysiajs/html";
import { PrincipalCount } from "./views/PrincipalCount";
import { GuardSelection } from "./views/GuardSelection";
import { DressCode } from "./views/DressCode";
import { Motorcade } from "./views/Motorcade";
import { Rendezvous } from "./views/Rendezvous";
import { Checkout } from "./views/Checkout";
import { CheckoutSuccess } from "./views/CheckoutSuccess";
import { MissionService } from "../../services/MissionService";
import { DresscodeService } from "../../services/DresscodeService";
import { PricingService } from "../../services/PricingService";
import {
  VEHICLE_CATEGORIES,
  VehicleService,
} from "../../services/VehicleService";
import {
  FORMATION_TIERS,
  FormationService,
} from "../../services/FormationService";
import { requireUserApi, userContext } from "../../core/auth";
import type { MissionState } from "./models/Mission";

// Server-side shape check. /api/checkout used to JSON.parse(missionState) and
// hand it straight to processDeployment; a tampered payload (unknown role,
// negative count, junk tier) would silently price to $0 because the rules map
// has no entry. Pricing math = wrong total persisted to the missions table.
// Bounds are deliberately loose — this rejects obvious abuse, not enforces UX.
const MAX_PRINCIPALS = 50;
const MAX_HOURS = 168; // one week
const MAX_MOTORCADE_SLOTS = 32;
const MAX_VEHICLES_PER_SLOT = 3;
const VEHICLE_CATS = VEHICLE_CATEGORIES as readonly string[];
const TIERS = FORMATION_TIERS as readonly string[];

function validateMissionState(raw: unknown): MissionState {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    throw new Error("missionState must be an object.");
  }
  const s = raw as Record<string, unknown>;

  const principalCount = Number(s.principalCount);
  if (!Number.isInteger(principalCount) || principalCount < 1 || principalCount > MAX_PRINCIPALS) {
    throw new Error("principalCount out of range.");
  }
  const tierName = String(s.tierName ?? "");
  if (!TIERS.includes(tierName)) {
    throw new Error(`tierName must be one of: ${TIERS.join(", ")}.`);
  }
  const hours = Number(s.hours);
  if (!Number.isInteger(hours) || hours < 1 || hours > MAX_HOURS) {
    throw new Error("hours out of range.");
  }
  const dressCode = s.dressCode == null ? undefined : String(s.dressCode);
  if (dressCode !== undefined && (dressCode.length === 0 || dressCode.length > 64)) {
    throw new Error("dressCode must be 1-64 chars.");
  }

  const motorcadeRaw = s.motorcade;
  const motorcade: Record<string, { id: string; role: string; amount: number }> = {};
  if (motorcadeRaw != null) {
    if (typeof motorcadeRaw !== "object" || Array.isArray(motorcadeRaw)) {
      throw new Error("motorcade must be an object.");
    }
    const entries = Object.entries(motorcadeRaw as Record<string, unknown>);
    if (entries.length > MAX_MOTORCADE_SLOTS) {
      throw new Error(`motorcade has too many slots (>${MAX_MOTORCADE_SLOTS}).`);
    }
    for (const [slotKey, v] of entries) {
      if (!v || typeof v !== "object") {
        throw new Error(`motorcade[${slotKey}] must be an object.`);
      }
      const entry = v as Record<string, unknown>;
      const id = String(entry.id ?? "");
      const role = String(entry.role ?? "");
      const amount = Number(entry.amount);
      if (id.length === 0 || id.length > 64) {
        throw new Error(`motorcade[${slotKey}].id invalid.`);
      }
      if (id !== "none" && !VEHICLE_CATS.includes(role)) {
        throw new Error(`motorcade[${slotKey}].role must be one of: ${VEHICLE_CATS.join(", ")}.`);
      }
      if (!Number.isInteger(amount) || amount < 0 || amount > MAX_VEHICLES_PER_SLOT) {
        throw new Error(`motorcade[${slotKey}].amount out of range.`);
      }
      motorcade[slotKey] = { id, role, amount };
    }
  }

  // location + time are accepted but not yet persisted (see processDeployment).
  // Validate cheaply so the checkout endpoint doesn't OK obviously-broken
  // values, but keep the column work in a separate change.
  let location: { lat: number; lng: number } | undefined;
  if (s.location != null) {
    if (typeof s.location !== "object" || Array.isArray(s.location)) {
      throw new Error("location must be {lat, lng}.");
    }
    const loc = s.location as Record<string, unknown>;
    const lat = Number(loc.lat);
    const lng = Number(loc.lng);
    if (!Number.isFinite(lat) || lat < -90 || lat > 90) throw new Error("location.lat invalid.");
    if (!Number.isFinite(lng) || lng < -180 || lng > 180) throw new Error("location.lng invalid.");
    location = { lat, lng };
  }
  let time: string | undefined;
  if (s.time != null) {
    time = String(s.time);
    if (time.length > 32) throw new Error("time string too long.");
  }

  return {
    principalCount,
    tierName,
    hours,
    dressCode,
    motorcade,
    location,
    time,
  };
}

// Wizard steps stay open to guests (browse-and-build).
// Checkout is gated — see requireUserApi.
export const orderRouter = new Elysia()
  .use(userContext) // adds per-request `user` from session cookie
  .get("/step/1", () => <PrincipalCount />)
  .get("/step/2", () => <GuardSelection />)
  // ── Public read-only catalog manifest ─────────────────────────────────────
  // Consumed by the wizard's ledger + checkout summary so client-side pricing
  // tracks server-side edits. Cents-as-integer to match server math.
  .get("/api/catalog/manifest.json", async ({ set }) => {
    const [rules, dresscodes, vehicles, formationDefaults] = await Promise.all([
      PricingService.getAll(),
      DresscodeService.listActive(),
      VehicleService.listActive(),
      FormationService.activeDefaultsByTier(),
    ]);
    set.headers["cache-control"] = "no-store";

    // Re-upload via the admin form OVERWRITES the file in place (path is
    // derived from the slug, not the original filename — predictable and
    // orphan-free). That means the browser and `SceneManager.modelCache`
    // would happily serve the previous bytes for the same URL. Stamp each
    // path with the row's `updated_at` so every edit produces a fresh URL
    // and busts both caches without altering the on-disk filename.
    const bust = (path: string | null, stamp: string | null): string | null => {
      if (!path) return path;
      if (!stamp) return path;
      const sep = path.includes("?") ? "&" : "?";
      return `${path}${sep}v=${encodeURIComponent(stamp)}`;
    };

    return {
      pricing: Object.fromEntries(rules.map((r) => [r.key, r.value_cents])),
      dresscodes: dresscodes.map((d) => ({
        id: d.id,
        label: d.label,
        description: d.description,
        // Wizard SceneManager.changeBackground reads video_path from
        // window.__DRESSCODES__ (set by Layout boot) so admin-created
        // dresscodes render their 3D backdrop; the hardcoded VIDEO_MAP
        // remains only as a fallback for the seeded slugs. Same cache-bust
        // convention as vehicles: re-uploads overwrite by slug, so stamping
        // ?v={updated_at} produces a fresh URL per edit.
        video_path: bust(d.video_path, d.updated_at),
        poster_path: bust(d.poster_path, d.updated_at),
      })),
      // Formations: keyed by tier so SceneManager can do
      // `defaults[tier]` directly. Tiers with no admin-chosen default are
      // absent from the map; SceneManager falls back to its built-in
      // TIER_CONFIG in that case. Slots carry x/z/role so the wizard can
      // render holographic markers + filter the garage drawer.
      formations: {
        defaults: Object.fromEntries(
          Array.from(formationDefaults.entries()).map(([tier, f]) => [
            tier,
            {
              id: f.id,
              label: f.label,
              canvas_width: f.canvas_width,
              canvas_depth: f.canvas_depth,
              slots: f.slots.map((s) => ({
                id: s.id,
                label: s.label,
                x: s.x,
                z: s.z,
                rotation_deg: s.rotation_deg,
                // Primary role drives the holographic marker colour;
                // allowed_categories drives garage-drawer vehicle filtering.
                role: s.allowed_categories[0] ?? "LEAD",
                allowed_categories: s.allowed_categories,
                order_index: s.order_index,
              })),
            },
          ]),
        ),
      },
      vehicles: vehicles.map((v) => ({
        id: v.id,
        label: v.label,
        // Multi-role membership for slot-picker filtering. `category` is
        // also surfaced as a convenience for any caller that only wants
        // the primary role.
        category: v.category,
        categories: v.categories,
        description: v.description,
        model_path: bust(v.model_path, v.updated_at),
        thumbnail_path: bust(v.thumbnail_path, v.updated_at),
        scale: v.scale,
        // Replaces the F150/Electra special-case in SceneManager — every
        // vehicle now carries its own correction. 0 is the no-op default.
        model_rotation_y_deg: v.model_rotation_y_deg,
        price_cents: v.price_cents,
        // Admin-defined key/value technical specs. Wizard renders the
        // panel dynamically based on whatever keys are present.
        specs: v.specs,
      })),
    };
  })

  .get("/step/3", async () => {
    const active = await DresscodeService.listActive();
    const options = active.map((d) => ({
      id: d.id,
      title: d.label,
      desc: d.description ?? "",
    }));
    return <DressCode dresscodes={options} />;
  })
  .get("/step/4", () => <Motorcade />)
  .get("/step/5", () => <Rendezvous />)
  .get("/step/6", () => <Checkout />)
  .post(
    "/api/checkout",
    async ({ body, user }) => {
      try {
        // Non-null asserted — requireUserApi beforeHandle guarantees this.
        let parsed: unknown;
        try {
          parsed = JSON.parse(body.missionState);
        } catch {
          throw new Error("missionState is not valid JSON.");
        }
        const state = validateMissionState(parsed);
        const missionId = await MissionService.processDeployment(state, user!.email);
        return <CheckoutSuccess missionId={missionId} />;
      } catch (error: any) {
        console.error("/// CHECKOUT FAILED ///", error.message || error);
        return (
          <div class="flex items-center justify-center h-full w-full bg-red-900 text-white pointer-events-auto z-[100]">
            <h1 class="text-2xl font-mono">DATABASE ERROR. CHECK TERMINAL.</h1>
          </div>
        );
      }
    },
    {
      beforeHandle: requireUserApi,
      body: t.Object({
        cardname: t.String(),
        cardnumber: t.String(),
        expiry: t.String(),
        cvc: t.String(),
        missionState: t.String(),
      }),
    },
  );

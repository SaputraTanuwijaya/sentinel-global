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
import { VehicleService } from "../../services/VehicleService";
import { requireUserApi, userContext } from "../../core/auth";
import type { MissionState } from "./models/Mission";

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
    const [rules, dresscodes, vehicles] = await Promise.all([
      PricingService.getAll(),
      DresscodeService.listActive(),
      VehicleService.listActive(),
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
      })),
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
        const state: MissionState = JSON.parse(body.missionState);
        const missionId = await MissionService.processDeployment(state, user!.email);
        return <CheckoutSuccess missionId={missionId} />;
      } catch (error: any) {
        console.error("/// TURSO INSERTION FAILED ///", error.message || error);
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

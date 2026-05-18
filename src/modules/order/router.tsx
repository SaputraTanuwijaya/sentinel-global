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
import { requireUserApi, userContext } from "../../core/auth";
import type { MissionState } from "./models/Mission";

// Wizard steps stay open to guests (browse-and-build).
// Checkout is gated — see requireUserApi.
export const orderRouter = new Elysia()
  .use(userContext) // adds per-request `user` from session cookie
  .get("/step/1", () => <PrincipalCount />)
  .get("/step/2", () => <GuardSelection />)
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

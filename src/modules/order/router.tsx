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
import type { MissionState } from "./models/Mission";

export const orderRouter = new Elysia()
  .get("/step/1", () => <PrincipalCount />)
  .get("/step/2", () => <GuardSelection />)
  .get("/step/3", () => <DressCode />)
  .get("/step/4", () => <Motorcade />)
  .get("/step/5", () => <Rendezvous />)
  .get("/step/6", () => <Checkout />)
  .post(
    "/api/checkout",
    async ({ body }) => {
      try {
        const state: MissionState = JSON.parse(body.missionState);
        const missionId = await MissionService.processDeployment(state);
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
      body: t.Object({
        cardname: t.String(),
        cardnumber: t.String(),
        expiry: t.String(),
        cvc: t.String(),
        missionState: t.String(),
      }),
    },
  );

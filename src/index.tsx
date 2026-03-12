import { Elysia } from "elysia";
import { html, Html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { Layout } from "./views/layout";

import { PrincipalCount } from "./modules/order/views/PrincipalCount";
import { GuardSelection } from "./modules/order/views/GuardSelection";
import { DressCode } from "./modules/order/views/DressCode";
import { Motorcade } from "./modules/order/views/Motorcade";
import { Rendezvous } from "./modules/order/views/Rendezvous";
import { Checkout } from "./modules/order/views/Checkout";

const app = new Elysia()
  .use(html())
  .use(staticPlugin({ assets: "src/public", prefix: "/public" }))

  .get("/", () => (
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
          <button
            class="px-6 py-3 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors pointer-events-auto cursor-pointer"
            hx-get="/step/1"
            hx-target="#ui-layer"
            hx-swap="innerHTML"
          >
            Initialize Guest Mode
          </button>
        </div>
      </div>
    </Layout>
  ))

  .get("/step/1", () => <PrincipalCount />)
  .get("/step/2", () => <GuardSelection />)
  .get("/step/3", () => <DressCode />)
  .get("/step/4", () => <Motorcade />)
  .get("/step/5", () => <Rendezvous />)
  .get("/step/6", () => <Checkout />)
  .post("/api/checkout", ({ body }) => {
    console.log("Deployment Confirmed:", body);
    return (
      <div class="flex flex-col items-center justify-center h-full w-full pointer-events-auto bg-black/90 text-center animate-fade-in">
        <div class="w-24 h-24 rounded-full border-2 border-sentinel-accent flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(255,215,0,0.2)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-12 h-12 text-sentinel-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 class="text-4xl text-white font-bold mb-4 font-mono tracking-[0.3em] uppercase">
          Deployment Authorized
        </h1>
        <p class="text-gray-400 mb-12 font-mono uppercase tracking-widest text-sm px-12">
          Tactical units are en-route to rendezvous coordinates. Deployment Window Locked.
        </p>
        <button
          class="px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all cursor-pointer pointer-events-auto"
          onclick="window.location.href='/'"
        >
          Return to HQ
        </button>
      </div>
    );
  })
  .listen(3000);

console.log(
  `Sentinel Global is running at ${app.server?.hostname}:${app.server?.port}`,
);

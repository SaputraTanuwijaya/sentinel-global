import { Elysia } from "elysia";
import { html, Html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { Layout } from "./views/layout";

import { PrincipalCount } from "./modules/order/views/PrincipalCount";
import { GuardSelection } from "./modules/order/views/GuardSelection";
import { DressCode } from "./modules/order/views/DressCode";

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

  // --- STEP 4: PLACEHOLDER ---
  .get("/step/4", () => (
    <div class="flex flex-col items-center justify-center h-full w-full pointer-events-auto bg-black/90 text-center animate-fade-in">
      <h1 class="text-4xl text-white font-bold mb-4 font-mono tracking-widest animate-pulse">
        SYSTEM INITIALIZING
      </h1>
      <p class="text-sentinel-hud mb-8 font-mono">
        Loading Motorcade Configuration...
      </p>

      <div class="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
        <div class="h-full bg-sentinel-hud w-1/2 animate-[width_2s_ease-in-out_infinite]"></div>
      </div>
    </div>
  ))
  .listen(3000);

console.log(
  `Sentinel Global is running at ${app.server?.hostname}:${app.server?.port}`,
);

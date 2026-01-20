import { Elysia } from "elysia";
import { html, Html } from "@elysiajs/html"; 
import { staticPlugin } from "@elysiajs/static";
import { Layout } from "./views/layout";

const app = new Elysia()
  .use(html())
  .use(staticPlugin({ assets: "src/public", prefix: "/public" }))

  .get("/", () => (
    <Layout>
      <div class="flex flex-col items-center justify-center h-full">
        <div class="glass-panel p-8 rounded-lg max-w-2xl text-center">
          <h1 class="text-4xl font-bold tracking-widest uppercase mb-4 text-white">
            Sentinel Global
          </h1>
          <p class="text-gray-400 mb-8">
            Secure Logistics & Bodyguard Simulation
          </p>
          <button
            class="px-6 py-3 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors"
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

  .get("/step/1", () => (
    <div class="flex flex-col items-center justify-center h-full">
      <h2 class="text-2xl text-sentinel-hud font-mono">
        STEP 1: GUARD TIER SELECTION
      </h2>
      <p class="mt-4 text-sm text-gray-500">
        The 3D Background should still be visible.
      </p>
      <button
        class="mt-8 px-4 py-2 border border-white/20 text-white/50 hover:text-white transition-colors"
        hx-get="/"
        hx-target="#ui-layer"
      >
        [ BACK ]
      </button>
    </div>
  ))

  .listen(3000);

console.log(
  `🦊 Sentinel Global is running at ${app.server?.hostname}:${app.server?.port}`,
);

import { Elysia } from "elysia";
import { html, Html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { Layout } from "./views/layout";

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

  .get("/step/1", () => (
    <div class="flex flex-col items-center justify-center h-full w-full pointer-events-auto">
      <h2 class="text-3xl text-sentinel-hud font-mono tracking-[0.2em] mb-4">
        STEP 1: GUARD TIER SELECTION
      </h2>
      <p class="text-gray-400 text-lg mb-8">
        (Placeholder: Select your security detail level)
      </p>
      <button
        class="px-8 py-3 bg-sentinel-hud text-black font-bold uppercase pointer-events-auto cursor-pointer hover:bg-green-400 shadow-[0_0_20px_rgba(0,255,0,0.4)] transition-all rounded-sm"
        hx-get="/step/2"
        hx-target="#ui-layer"
      >
        PROCEED TO OUTFITTING
      </button>
    </div>
  ))

  .get("/step/2", () => (
    <div class="relative w-full h-full pointer-events-auto overflow-hidden">
      <div class="absolute inset-0 flex pointer-events-none z-10">
        <div class="w-[30%] h-full bg-black border-r border-white/10"></div>{" "}
        <div class="flex-1 h-full"></div>{" "}
        <div class="w-[30%] h-full bg-black border-l border-white/10"></div>{" "}
      </div>

      {/* Header */}
      <div class="absolute top-[8vh] w-full text-center z-30">
        <h2 class="text-4xl text-white font-bold tracking-widest uppercase drop-shadow-md">
          Select Dress Code
        </h2>
        <div class="h-1 w-24 bg-white mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
      </div>

      {/* Carousel Controls */}
      <div class="absolute inset-0 flex items-center justify-center gap-[45vw] z-40 pointer-events-none">
        {/* Left Arrow */}
        <button
          class="pointer-events-auto p-4 rounded-full border-2 border-white/30 hover:bg-white hover:text-black hover:scale-110 transition-all text-white backdrop-blur-sm"
          onclick="cycleDressCode(-1)"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          class="pointer-events-auto p-4 rounded-full border-2 border-white/30 hover:bg-white hover:text-black hover:scale-110 transition-all text-white backdrop-blur-sm"
          onclick="cycleDressCode(1)"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M9 19l7-7-7-7" />
          </svg>
        </button>
      </div>

      {/* Info Card */}
      <div class="absolute bottom-[10vh] w-full flex justify-center z-40 pointer-events-none">
        <div
          class="glass-panel pointer-events-auto backdrop-blur-xl bg-black/60 border border-white/20 
                      rounded-[2rem] w-[25vw] h-[35vh] flex flex-col p-8 shadow-2xl"
        >
          <h3
            id="dress-title"
            class="text-2xl font-bold uppercase tracking-widest mb-4 text-white text-center border-b border-white/10 pb-4"
          >
            Business Formal
          </h3>

          <div class="flex-1 overflow-y-auto pr-2 mb-6 custom-scrollbar text-center">
            <p id="dress-desc" class="text-sm text-gray-300 leading-relaxed">
              Standard corporate attire. Minimal visibility. Armor concealed
              beneath tailored suits. Ideal for board meetings and urban
              environments where discretion is paramount.
            </p>
          </div>

          <button
            class="w-full py-3 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-sentinel-hud hover:scale-105 transition-all shadow-lg"
            hx-get="/step/3"
            hx-target="#ui-layer"
          >
            Confirm Selection
          </button>
        </div>
      </div>

      {/* Client Script */}
      <script>
        {`
           (function() {
              const options = [
                  { 
                    id: 'business_formal', 
                    title: 'Business Formal', 
                    desc: 'Standard corporate attire. Minimal visibility. Armor concealed beneath tailored suits. Ideal for board meetings and urban environments where discretion is paramount.' 
                  },
                  { 
                    id: 'casual_formal', 
                    title: 'Casual Formal', 
                    desc: 'Relaxed professional wear. Blazers without ties. Allows for quicker movement and concealed carry of larger sidearms. Suitable for tech conferences or semi-private events.' 
                  },
                  { 
                    id: 'tactical_casual', 
                    title: 'Tactical Casual', 
                    desc: 'Low-profile tactical gear blended with civilian clothing. Plate carriers visible but understated. Good for high-risk public areas where a show of force is necessary but not overwhelming.' 
                  },
                  { 
                    id: 'full_tactical', 
                    title: 'Full Tactical', 
                    desc: 'Heavy exterior armor, visible weaponry, and helmet systems. Maximum deterrence and protection. Not suitable for covert operations. Use only in high-threat zones.' 
                  }
              ];

              let currentIndex = 0;

              setTimeout(() => {
                 document.body.dispatchEvent(new CustomEvent('sentinel-bg-change', { detail: { theme: options[0].id } }));
              }, 100);

              window.cycleDressCode = (direction) => {
                  currentIndex += direction;
                  if (currentIndex < 0) currentIndex = options.length - 1;
                  if (currentIndex >= options.length) currentIndex = 0;

                  const current = options[currentIndex];

                  document.getElementById('dress-title').innerText = current.title;
                  document.getElementById('dress-desc').innerText = current.desc;

                  // Trigger Video Change (SceneManager now forces replay)
                  document.body.dispatchEvent(new CustomEvent('sentinel-bg-change', { detail: { theme: current.id } }));
              };
           })();
        `}
      </script>

      <style>
        {`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.3); border-radius: 10px; }
      `}
      </style>
    </div>
  ))

  .listen(3000);

console.log(
  `Sentinel Global is running at ${app.server?.hostname}:${app.server?.port}`,
);

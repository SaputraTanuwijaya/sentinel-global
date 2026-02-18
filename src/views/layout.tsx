import { Html } from "@elysiajs/html";

export const Layout = ({ children }: { children: any }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sentinel Global | Secure Transport</title>
        <script src="/public/js/htmx.min.js"></script>
        <link href="/public/styles.css" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
        <style>
          {`
            body { margin: 0; overflow: hidden; background-color: #0a0a0a; color: white; }
            #canvas-container { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 0; }
            #ui-layer { position: relative; z-index: 10; pointer-events: none; height: 100vh; width: 100vw; }  
            #ui-layer > * { pointer-events: auto; }
          `}
        </style>
      </head>
      <body class="bg-black text-white font-sans antialiased">
        <div id="canvas-container"></div>

        {/* COST HUD (Hidden by default, shows up when needed) */}
        <div
          id="cost-hud"
          class="fixed top-8 right-8 z-50 pointer-events-none transition-opacity duration-500 opacity-0"
        >
          <div class="bg-black/80 border border-white/20 backdrop-blur-md rounded-lg p-6 w-64 shadow-2xl flex flex-col gap-1">
            <span class="text-xs text-gray-400 uppercase tracking-widest">
              Estimated Total
            </span>
            <div class="flex items-baseline gap-1">
              <span class="text-lg text-green-500 font-bold">$</span>
              <span
                id="hud-price"
                class="text-3xl text-white font-mono font-bold tracking-tight"
              >
                0
              </span>
            </div>
            <div class="h-px w-full bg-white/20 my-2"></div>
            <div class="flex justify-between text-xs text-gray-400">
              <span>Principals:</span>
              <span id="hud-count" class="text-white">
                1
              </span>
            </div>
            <div class="flex justify-between text-xs text-gray-400">
              <span>Tier:</span>
              <span id="hud-tier" class="text-white">
                --
              </span>
            </div>
          </div>
        </div>

        <main id="ui-layer" hx-boost="true">
          {children}
        </main>

        <script src="/public/js/index.js"></script>

        {/* STATE MANAGER SCRIPT */}
        <script>
          {`
           window.MissionState = {
              count: 1,
              basePrice: 0,
              tierName: 'Vanguard' 
           };

           document.body.addEventListener('sentinel-cost-update', (e) => {
               const { count, price, tier } = e.detail;
               const state = window.MissionState;
               
               if(count !== undefined) state.count = count;
               if(price !== undefined) state.basePrice = price;
               if(tier !== undefined) state.tierName = tier;

               const total = state.basePrice * state.count;

               const hudPrice = document.getElementById('hud-price');
               const hudCount = document.getElementById('hud-count');
               const hudTier = document.getElementById('hud-tier');
               const hud = document.getElementById('cost-hud');

               if(hudPrice) hudPrice.innerText = total.toLocaleString();
               if(hudCount) hudCount.innerText = state.count;
               if(hudTier) hudTier.innerText = state.tierName;
               
               if(hud && total > 0) hud.classList.remove('opacity-0');
           });
        `}
        </script>
      </body>
    </html>
  );
};

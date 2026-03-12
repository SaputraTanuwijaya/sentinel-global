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
          `}
        </style>
      </head>
      <body class="bg-black text-white font-sans antialiased">
        <div id="canvas-container"></div>

        {/* MISSION LEDGER OVERLAY */}
        <div
          id="mission-ledger-container"
          class="fixed top-8 right-8 z-[100] flex flex-col items-end gap-3 transition-all duration-500 opacity-0 translate-x-10 pointer-events-none"
        >
          {/* Toggle Icon with Notification Pulse */}
          <div class="relative">
            <button
              onclick="window.toggleLedger()"
              class="p-3.5 bg-black/80 border border-white/20 backdrop-blur-xl rounded-full text-white hover:bg-white hover:text-black transition-all shadow-2xl pointer-events-auto group active:scale-95 relative z-10"
              title="View Mission Estimate"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </button>
            {/* Notification Pulse Ring */}
            <span class="absolute inset-0 rounded-full bg-white/20 animate-ping pointer-events-none"></span>
            <span class="absolute -top-1 -right-1 w-3 h-3 bg-sentinel-accent rounded-full border-2 border-black z-20"></span>
          </div>

          {/* Ledger Receipt - Smaller width (w-72) */}
          <div
            id="mission-ledger"
            class="w-72 bg-black/90 border border-white/10 backdrop-blur-2xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col transform origin-top-right transition-all duration-300 scale-95 opacity-0 hidden pointer-events-auto"
          >
            <div class="p-5 border-b border-white/5 bg-white/5">
              <h3 class="text-white font-bold uppercase tracking-[0.2em] text-[10px] flex items-center gap-2">
                <span class="text-white/40">///</span> Financial Ledger
              </h3>
            </div>

            <div
              id="ledger-content"
              class="p-5 flex flex-col gap-5 font-mono text-[10px] uppercase tracking-wider"
            >
              {/* Dynamic Content Injected Here */}
            </div>

            <div class="p-5 bg-white/5 border-t border-white/10 mt-auto">
              <div class="flex justify-between items-baseline mb-1">
                <span class="text-gray-500 text-[9px] uppercase tracking-tighter">Hourly Rate:</span>
                <span id="ledger-hourly-total" class="text-white font-bold text-base">
                  $0.00
                </span>
              </div>
              <div class="flex justify-between items-center text-gray-500 text-[8px] mb-3 italic tracking-tight">
                <span>Deployment Multiplier:</span>
                <span>x6 HRS MIN</span>
              </div>
              <div class="h-px w-full bg-white/10 mb-3"></div>
              <div class="flex justify-between items-baseline">
                <span class="text-white font-bold text-[10px]">EST. TOTAL</span>
                <span id="ledger-grand-total" class="text-sentinel-accent font-black text-xl">
                  $0.00
                </span>
              </div>
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
           (function() {
               window.MissionState = {
                  principalCount: 1,
                  tierName: 'Vanguard',
                  motorcade: {},
                  hours: 6
               };

               const PRICING = {
                  PRINCIPAL: 80,
                  TIERS: {
                    'Vanguard': 0,
                    'Sentinel': 150,
                    'Praetorian': 400
                  },
                  MOTORCADE: {
                    'PRINCIPAL': 100,
                    'SWEEPER': 30,
                    'LEAD': 70,
                    'CAT': 150,
                    'ECM': 200,
                    'REAR': 70
                  }
               };

               window.toggleLedger = () => {
                  const ledger = document.getElementById('mission-ledger');
                  if (!ledger) return;
                  
                  if (ledger.classList.contains('hidden')) {
                    ledger.classList.remove('hidden');
                    setTimeout(() => {
                        ledger.classList.remove('scale-95', 'opacity-0');
                        ledger.classList.add('scale-100', 'opacity-100');
                    }, 10);
                  } else {
                    ledger.classList.add('scale-95', 'opacity-0');
                    ledger.classList.remove('scale-100', 'opacity-100');
                    setTimeout(() => ledger.classList.add('hidden'), 300);
                  }
               };

               window.updateLedger = () => {
                  const state = window.MissionState;
                  const content = document.getElementById('ledger-content');
                  const hourlyEl = document.getElementById('ledger-hourly-total');
                  const grandEl = document.getElementById('ledger-grand-total');
                  const container = document.getElementById('mission-ledger-container');

                  if (!content || !state) return;

                  // Show container if we have any state updates
                  container.classList.remove('opacity-0', 'translate-x-10', 'pointer-events-none');
                  container.classList.add('opacity-100', 'translate-x-0');

                  let hourlyTotal = 0;
                  let html = '';

                  // === Detail (Principals)
                  const principalCost = state.principalCount * PRICING.PRINCIPAL;
                  hourlyTotal += principalCost;
                  html += \`
                    <div class="flex flex-col gap-2">
                        <div class="text-white/30 text-[9px] border-b border-white/5 pb-1">=== Detail</div>
                        <div class="flex justify-between text-white">
                            <span>\${state.principalCount} Principals</span>
                            <span>$\${principalCost}/HR</span>
                        </div>
                    </div>
                  \`;

                  // === Tier (Only show if actually selected)
                  if (state.tierSelected) {
                    const tierCost = PRICING.TIERS[state.tierName] || 0;
                    hourlyTotal += tierCost;
                    html += \`
                        <div class="flex flex-col gap-2">
                            <div class="text-white/30 text-[9px] border-b border-white/5 pb-1">=== Tier</div>
                            <div class="flex justify-between text-white">
                                <span>\${state.tierName} Tier</span>
                                <span>+\$\${tierCost}/HR</span>
                            </div>
                        </div>
                    \`;
                  }

                  // === Motorcade
                  let motorcadeHtml = '';
                  let motorcadeCost = 0;
                  
                  // Group vehicles by role
                  const roleCounts = {};
                  if (state.motorcade) {
                      Object.values(state.motorcade).forEach(v => {
                        if (v.id !== 'none') {
                            roleCounts[v.role] = (roleCounts[v.role] || 0) + v.amount;
                        }
                      });
                  }

                  Object.entries(roleCounts).forEach(([role, count]) => {
                    const unitPrice = PRICING.MOTORCADE[role] || 0;
                    const lineCost = count * unitPrice;
                    motorcadeCost += lineCost;
                    motorcadeHtml += \`
                        <div class="flex justify-between text-white">
                            <span>\${count} \${role.replace('_', ' ')}</span>
                            <span>$\${lineCost}/HR</span>
                        </div>
                    \`;
                  });

                  if (motorcadeCost > 0) {
                    hourlyTotal += motorcadeCost;
                    html += \`
                        <div class="flex flex-col gap-2">
                            <div class="text-white/30 text-[9px] border-b border-white/5 pb-1">=== Motorcade</div>
                            \${motorcadeHtml}
                        </div>
                    \`;
                  }

                  content.innerHTML = html;
                  hourlyEl.innerText = \`$\${hourlyTotal.toLocaleString()} USD / HR\`;
                  grandEl.innerText = \`$\${(hourlyTotal * state.hours).toLocaleString()} USD\`;
               };

               document.body.addEventListener('mission-state-updated', () => {
                  window.updateLedger();
               });
           })();
        `}
        </script>
      </body>
    </html>
  );
};

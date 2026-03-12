import { Html } from "@elysiajs/html";

export const Checkout = () => {
  return (
    <div class="flex flex-col items-center h-full w-full pointer-events-auto bg-black/90 backdrop-blur-sm animate-fade-in overflow-y-auto py-12 px-12 custom-scrollbar">
      {/* Header Row */}
      <div class="w-full flex items-center justify-between mb-12 z-10 shrink-0">
        {/* Back Button Integrated */}
        <button
          class="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-all backdrop-blur-md group flex items-center gap-2 px-5 pointer-events-auto cursor-pointer"
          hx-get="/step/5"
          hx-target="#ui-layer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 group-hover:-translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span class="text-[10px] font-bold uppercase tracking-[0.2em]">
            Back to Rendezvous
          </span>
        </button>

        <div class="absolute left-1/2 -translate-x-1/2 text-center">
          <h2 class="text-4xl text-white font-bold tracking-[0.2em] mb-4 drop-shadow-2xl font-mono uppercase">
            Mission Deployment
          </h2>
          <div class="h-1 w-24 bg-white mx-auto rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
        </div>

        <div class="w-24"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl w-full z-10 pb-20">
        {/* LEFT COLUMN: Summary & Duration */}
        <div class="flex flex-col gap-8">
          <div class="glass-panel p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-6">
            <h3 class="text-white font-bold uppercase tracking-widest text-sm border-b border-white/10 pb-4 flex items-center gap-2">
              <span class="text-white/40">///</span> Mission Summary
            </h3>

            <div
              id="checkout-summary-content"
              class="flex flex-col gap-4 font-mono text-xs text-gray-300"
            >
              {/* Dynamic Summary */}
            </div>

            <div class="h-px w-full bg-white/10 my-2"></div>

            {/* Duration Slider */}
            <div class="flex flex-col gap-4">
              <div class="flex justify-between items-center">
                <label class="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                  Deployment Duration
                </label>
                <span
                  id="duration-display"
                  class="text-white font-black text-xl font-mono"
                >
                  6 HRS
                </span>
              </div>
              <input
                id="duration-slider"
                type="range"
                min="6"
                max="72"
                step="1"
                value="6"
                class="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-white"
                oninput="window.updateDuration(this.value)"
              />
              <div class="flex justify-between text-[9px] text-gray-600 uppercase font-bold">
                <span>Min: 6H</span>
                <span>Max: 72H</span>
              </div>
            </div>
          </div>

          <div class="glass-panel p-8 rounded-2xl bg-white/5 border border-white/10 mt-auto">
            <div class="flex justify-between items-end mb-2">
              <span class="text-gray-500 text-[10px] uppercase tracking-widest">
                Calculated Hourly Rate:
              </span>
              <span
                id="checkout-hourly-rate"
                class="text-white font-bold text-xl font-mono"
              >
                $0.00
              </span>
            </div>
            <div class="h-px w-full bg-white/10 my-4"></div>
            <div class="flex justify-between items-baseline">
              <span class="text-white font-bold tracking-widest text-xs">
                GRAND TOTAL
              </span>
              <span
                id="checkout-grand-total"
                class="text-sentinel-accent font-black text-4xl font-mono"
              >
                $0.00
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Payment Mockup */}
        <div class="glass-panel p-8 rounded-2xl bg-black/40 border border-white/10 flex flex-col gap-8">
          <div class="flex flex-col gap-2">
            <h3 class="text-white font-bold uppercase tracking-widest text-sm flex items-center gap-2">
              <span class="text-white/40">///</span> Secure Terminal
            </h3>
            <p class="text-[10px] text-gray-500 uppercase tracking-wider">
              Encrypted Point-to-Point Transaction
            </p>
          </div>

          <form
            id="checkout-form"
            class="flex flex-col gap-6"
            hx-post="/api/checkout"
            hx-trigger="submit"
            hx-swap="none"
            onsubmit="window.handleDeployment(event)"
          >
            <div class="flex flex-col gap-2">
              <label class="text-[9px] text-gray-400 uppercase tracking-widest font-bold">
                Cardholder Name
              </label>
              <input
                type="text"
                name="cardname"
                placeholder="OPERATOR NAME"
                class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-white/10 focus:outline-none focus:border-sentinel-accent transition-all font-mono text-sm"
                required
              />
            </div>

            <div class="flex flex-col gap-2">
              <label class="text-[9px] text-gray-400 uppercase tracking-widest font-bold">
                Encrypted Card Number
              </label>
              <div class="relative">
                <input
                  type="text"
                  name="cardnumber"
                  placeholder="XXXX XXXX XXXX XXXX"
                  maxlength="19"
                  class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-white/10 focus:outline-none focus:border-sentinel-accent transition-all font-mono text-sm"
                  required
                />
                <div class="absolute right-4 top-1/2 -translate-y-1/2 opacity-20">
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
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-6">
              <div class="flex flex-col gap-2">
                <label class="text-[9px] text-gray-400 uppercase tracking-widest font-bold">
                  Expiry Date
                </label>
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM / YY"
                  maxlength="5"
                  class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-white/10 focus:outline-none focus:border-sentinel-accent transition-all font-mono text-sm text-center"
                  required
                />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-[9px] text-gray-400 uppercase tracking-widest font-bold">
                  Security Code
                </label>
                <input
                  type="password"
                  name="cvc"
                  placeholder="***"
                  maxlength="3"
                  class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-white/10 focus:outline-none focus:border-sentinel-accent transition-all font-mono text-sm text-center tracking-[0.5em]"
                  required
                />
              </div>
            </div>

            <div class="mt-4 p-4 bg-white/5 border border-white/5 rounded-lg flex items-start gap-4">
              <div class="w-1 h-12 bg-sentinel-accent/40 rounded-full"></div>
              <p class="text-[9px] text-gray-500 uppercase leading-relaxed tracking-wider italic">
                By confirming deployment, you authorize Sentinel Global to
                reserve tactical units for the specified window. Deployment
                cancelation after T-Minus 2 hours incurs a 50% extraction
                penalty.
              </p>
            </div>

            <button
              type="submit"
              class="w-full py-6 bg-white text-black font-black uppercase tracking-[0.3em] hover:bg-sentinel-accent transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.1)] active:scale-[0.98] mt-4 flex items-center justify-center gap-4 group"
            >
              Confirm Deployment
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <script>
        {`
          (function() {
            if (!window.MissionState) window.MissionState = { hours: 6 };
            
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

            window.updateDuration = (val) => {
              window.MissionState.hours = parseInt(val);
              document.getElementById('duration-display').innerText = val + " HRS";
              window.updateCheckoutTotals();
              // Also update the ledger if it's open or updated
              document.body.dispatchEvent(new CustomEvent('mission-state-updated'));
            };

            window.updateCheckoutTotals = () => {
              const state = window.MissionState;
              const summaryEl = document.getElementById('checkout-summary-content');
              const hourlyEl = document.getElementById('checkout-hourly-rate');
              const grandEl = document.getElementById('checkout-grand-total');

              if (!summaryEl || !state) return;

              let hourlyTotal = 0;
              let html = '';

              // Principal
              const pCost = state.principalCount * PRICING.PRINCIPAL;
              hourlyTotal += pCost;
              html += \`
                <div class="flex justify-between items-center">
                  <span class="text-gray-500 uppercase tracking-tighter">Principals (x\${state.principalCount})</span>
                  <span class="text-white">$\${pCost.toLocaleString()}</span>
                </div>
              \`;

              // Tier
              const tCost = PRICING.TIERS[state.tierName] || 0;
              hourlyTotal += tCost;
              html += \`
                <div class="flex justify-between items-center">
                  <span class="text-gray-500 uppercase tracking-tighter">Security Tier (\${state.tierName})</span>
                  <span class="text-white">+$\${tCost.toLocaleString()}</span>
                </div>
              \`;

              // Motorcade
              let mCost = 0;
              if (state.motorcade) {
                Object.values(state.motorcade).forEach(v => {
                  if (v.id !== 'none') {
                    const unitPrice = PRICING.MOTORCADE[v.role] || 0;
                    mCost += (v.amount * unitPrice);
                  }
                });
              }
              
              if (mCost > 0) {
                hourlyTotal += mCost;
                html += \`
                  <div class="flex justify-between items-center">
                    <span class="text-gray-500 uppercase tracking-tighter">Motorcade Assets</span>
                    <span class="text-white">+$\${mCost.toLocaleString()}</span>
                  </div>
                \`;
              }

              summaryEl.innerHTML = html;
              hourlyEl.innerText = \`$\${hourlyTotal.toLocaleString()} USD / HR\`;
              grandEl.innerText = \`$\${(hourlyTotal * state.hours).toLocaleString()} USD\`;
            };

            window.handleDeployment = (e) => {
              // Add MissionState to form data before HTMX sends it
              const form = e.target;
              const stateInput = document.createElement('input');
              stateInput.type = 'hidden';
              stateInput.name = 'missionState';
              stateInput.value = JSON.stringify(window.MissionState);
              form.appendChild(stateInput);
            };

            // Force cleanup of 3D background if we came from Map
            if (window.Sentinel) {
                window.Sentinel.changeBackground('black');
            }

            // Initial render
            window.updateCheckoutTotals();
          })();
        `}
      </script>

      <style>
        {`
          #duration-slider::-webkit-slider-thumb {
            appearance: none;
            width: 20px;
            height: 20px;
            background: white;
            border-radius: 50%;
            box-shadow: 0 0 15px rgba(255,255,255,0.5);
            transition: transform 0.2s;
          }
          #duration-slider::-webkit-slider-thumb:hover {
            transform: scale(1.2);
          }
          .custom-scrollbar::-webkit-scrollbar { width: 4px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
        `}
      </style>
    </div>
  );
};

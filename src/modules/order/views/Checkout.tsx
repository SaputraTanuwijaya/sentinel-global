import { Html } from "@elysiajs/html";

export const Checkout = () => {
  return (
    <div class="flex flex-col items-center h-full w-full pointer-events-auto bg-black/90 backdrop-blur-sm animate-fade-in overflow-y-auto py-12 px-12 custom-scrollbar">
      {/* Header Row */}
      <div class="w-full flex items-center justify-between mb-12 z-10 shrink-0">
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
        {/* LEFT COLUMN */}
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

        {/* RIGHT COLUMN */}
        <div class="glass-panel p-8 rounded-2xl bg-black/40 border border-white/10 flex flex-col gap-8">
          <div class="flex flex-col gap-2">
            <h3 class="text-white font-bold uppercase tracking-widest text-sm flex items-center gap-2">
              <span class="text-white/40">///</span> Secure Terminal
            </h3>
            <p class="text-[10px] text-gray-500 uppercase tracking-wider">
              Secure Point-to-Point Transaction
            </p>
          </div>

          <form
            id="checkout-form"
            class="flex flex-col gap-6"
            hx-post="/api/checkout"
            hx-trigger="submit"
            hx-swap="innerHTML"
            hx-target="#ui-layer"
            onsubmit="window.handleDeployment(event)"
          >
            {/* Cardholder Name */}
            <div class="flex flex-col gap-2">
              <label class="text-[9px] text-gray-400 uppercase tracking-widest font-bold flex justify-between">
                Cardholder Name
                <span id="name-error" class="text-red-500 hidden">
                  REQUIRED
                </span>
              </label>
              <input
                type="text"
                name="cardname"
                id="cardname"
                placeholder="OPERATOR NAME"
                class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-white/10 focus:outline-none focus:border-sentinel-accent transition-all font-mono text-sm"
                required
                oninput="this.value=this.value.toUpperCase(); document.getElementById('name-error').classList.add('hidden');"
              />
            </div>

            {/* Card Number — 4 inputs, auto-advance via oninput, retreat via cardNav keydown */}
            <div class="flex flex-col gap-2">
              <label class="text-[9px] text-gray-400 uppercase tracking-widest font-bold flex justify-between">
                Card Number
                <span id="card-error" class="text-red-500 hidden">
                  INCOMPLETE
                </span>
              </label>
              <div class="flex items-center gap-2">
                <input
                  type="tel"
                  name="cn1"
                  id="cn1"
                  maxlength="4"
                  placeholder="XXXX"
                  class="w-full bg-white/5 border border-white/10 rounded-lg px-2 py-4 text-white placeholder-white/10 focus:outline-none focus:border-sentinel-accent transition-all font-mono text-sm text-center tracking-widest"
                  oninput="this.value=this.value.replace(/\D/g,''); document.getElementById('card-error').classList.add('hidden'); if(this.value.length===4) document.getElementById('cn2').focus();"
                />
                <span class="text-white/20 font-mono text-xs">—</span>
                <input
                  type="tel"
                  name="cn2"
                  id="cn2"
                  maxlength="4"
                  placeholder="XXXX"
                  class="w-full bg-white/5 border border-white/10 rounded-lg px-2 py-4 text-white placeholder-white/10 focus:outline-none focus:border-sentinel-accent transition-all font-mono text-sm text-center tracking-widest"
                  oninput="this.value=this.value.replace(/\D/g,''); if(this.value.length===4) document.getElementById('cn3').focus();"
                  onkeydown="if(event.key==='Backspace'&&this.value==='') document.getElementById('cn1').focus();"
                />
                <span class="text-white/20 font-mono text-xs">—</span>
                <input
                  type="tel"
                  name="cn3"
                  id="cn3"
                  maxlength="4"
                  placeholder="XXXX"
                  class="w-full bg-white/5 border border-white/10 rounded-lg px-2 py-4 text-white placeholder-white/10 focus:outline-none focus:border-sentinel-accent transition-all font-mono text-sm text-center tracking-widest"
                  oninput="this.value=this.value.replace(/\D/g,''); if(this.value.length===4) document.getElementById('cn4').focus();"
                  onkeydown="if(event.key==='Backspace'&&this.value==='') document.getElementById('cn2').focus();"
                />
                <span class="text-white/20 font-mono text-xs">—</span>
                <input
                  type="tel"
                  name="cn4"
                  id="cn4"
                  maxlength="4"
                  placeholder="XXXX"
                  class="w-full bg-white/5 border border-white/10 rounded-lg px-2 py-4 text-white placeholder-white/10 focus:outline-none focus:border-sentinel-accent transition-all font-mono text-sm text-center tracking-widest"
                  oninput="this.value=this.value.replace(/\D/g,''); if(this.value.length===4) document.getElementById('expiry-mm').focus();"
                  onkeydown="if(event.key==='Backspace'&&this.value==='') document.getElementById('cn3').focus();"
                />
              </div>
            </div>

            <div class="grid grid-cols-2 gap-6">
              {/* Expiry — two inputs, proven working */}
              <div class="flex flex-col gap-2">
                <label class="text-[9px] text-gray-400 uppercase tracking-widest font-bold flex justify-between">
                  Expiry Date
                  <span id="expiry-error" class="text-red-500 hidden">
                    INVALID
                  </span>
                </label>
                <div class="flex items-center gap-2">
                  <input
                    type="tel"
                    name="expiry-mm"
                    id="expiry-mm"
                    placeholder="MM"
                    maxlength="2"
                    class="w-full bg-white/5 border border-white/10 rounded-lg px-2 py-4 text-white placeholder-white/10 focus:outline-none focus:border-sentinel-accent transition-all font-mono text-sm text-center"
                    oninput="
                      this.value=this.value.replace(/\D/g,'');
                      document.getElementById('expiry-error').classList.add('hidden');
                      if(this.value.length===2){
                        const mm=parseInt(this.value);
                        if(mm<1||mm>12){
                          document.getElementById('expiry-error').innerText='INVALID MM';
                          document.getElementById('expiry-error').classList.remove('hidden');
                          this.value='';
                        } else {
                          document.getElementById('expiry-yy').focus();
                        }
                      }
                    "
                    onkeydown="if(event.key==='Backspace'&&this.value==='') document.getElementById('cn4').focus();"
                  />
                  <span class="text-white/30 font-mono">/</span>
                  <input
                    type="tel"
                    name="expiry-yy"
                    id="expiry-yy"
                    placeholder="YY"
                    maxlength="2"
                    class="w-full bg-white/5 border border-white/10 rounded-lg px-2 py-4 text-white placeholder-white/10 focus:outline-none focus:border-sentinel-accent transition-all font-mono text-sm text-center"
                    oninput="this.value=this.value.replace(/\D/g,''); if(this.value.length===2) document.getElementById('cvc').focus();"
                    onkeydown="if(event.key==='Backspace'&&this.value==='') document.getElementById('expiry-mm').focus();"
                  />
                </div>
              </div>

              {/* CVC with visibility toggle */}
              <div class="flex flex-col gap-2">
                <label class="text-[9px] text-gray-400 uppercase tracking-widest font-bold flex justify-between">
                  Security Code
                  <span id="cvc-error" class="text-red-500 hidden">
                    3 DIGITS
                  </span>
                </label>
                <div class="relative">
                  <input
                    type="password"
                    name="cvc"
                    id="cvc"
                    placeholder="***"
                    maxlength="3"
                    class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 pr-12 text-white placeholder-white/10 focus:outline-none focus:border-sentinel-accent transition-all font-mono text-sm text-center tracking-[0.5em]"
                    required
                    oninput="this.value=this.value.replace(/\D/g,''); document.getElementById('cvc-error').classList.toggle('hidden', this.value.length===3);"
                    onkeydown="if(event.key==='Backspace'&&this.value==='') document.getElementById('expiry-yy').focus();"
                  />
                  <button
                    type="button"
                    onclick="window.toggleCvc()"
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors cursor-pointer"
                    title="Toggle visibility"
                  >
                    <svg
                      id="icon-eye-open"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    <svg
                      id="icon-eye-closed"
                      class="hidden"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  </button>
                </div>
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
              TIERS: { 'Vanguard': 0, 'Sentinel': 150, 'Praetorian': 400 },
              MOTORCADE: { 'PRINCIPAL': 100, 'SWEEPER': 30, 'LEAD': 70, 'CAT': 150, 'ECM': 200, 'REAR': 70 }
            };

            window.toggleCvc = () => {
              const cvc = document.getElementById('cvc');
              const eyeOpen = document.getElementById('icon-eye-open');
              const eyeClosed = document.getElementById('icon-eye-closed');
              const revealing = cvc.type === 'password';
              cvc.type = revealing ? 'text' : 'password';
              eyeOpen.classList.toggle('hidden', revealing);
              eyeClosed.classList.toggle('hidden', !revealing);
            };

            window.updateDuration = (val) => {
              window.MissionState.hours = parseInt(val);
              document.getElementById('duration-display').innerText = val + ' HRS';
              window.updateCheckoutTotals();
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

              const pCost = (state.principalCount || 0) * PRICING.PRINCIPAL;
              hourlyTotal += pCost;
              html += \`
                <div class="flex justify-between items-center">
                  <span class="text-gray-500 uppercase tracking-tighter">Principals (x\${state.principalCount || 0})</span>
                  <span class="text-white">$\${pCost.toLocaleString()}</span>
                </div>
              \`;

              const tCost = PRICING.TIERS[state.tierName] || 0;
              hourlyTotal += tCost;
              html += \`
                <div class="flex justify-between items-center">
                  <span class="text-gray-500 uppercase tracking-tighter">Security Tier (\${state.tierName || 'None'})</span>
                  <span class="text-white">+$\${tCost.toLocaleString()}</span>
                </div>
              \`;

              let mCost = 0;
              if (state.motorcade) {
                Object.values(state.motorcade).forEach((v) => {
                  if (v.id !== 'none') {
                    const unitPrice = PRICING.MOTORCADE[v.role] || 0;
                    mCost += v.amount * unitPrice;
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
              grandEl.innerText = \`$\${(hourlyTotal * (state.hours || 6)).toLocaleString()} USD\`;
            };

            window.handleDeployment = (e) => {
              const form = e.target;

              const name = document.getElementById('cardname').value.trim();
              const cn1  = document.getElementById('cn1').value;
              const cn2  = document.getElementById('cn2').value;
              const cn3  = document.getElementById('cn3').value;
              const cn4  = document.getElementById('cn4').value;
              const mm   = document.getElementById('expiry-mm').value;
              const yy   = document.getElementById('expiry-yy').value;
              const cvc  = document.getElementById('cvc').value;

              const cardNumber = cn1 + cn2 + cn3 + cn4;
              let valid = true;

              if (!name) { document.getElementById('name-error').classList.remove('hidden'); valid = false; }
              if (cardNumber.length !== 16) { document.getElementById('card-error').classList.remove('hidden'); valid = false; }
              if (mm.length !== 2 || yy.length !== 2) { document.getElementById('expiry-error').classList.remove('hidden'); valid = false; }
              if (cvc.length !== 3) { document.getElementById('cvc-error').classList.remove('hidden'); valid = false; }

              if (!valid) {
                e.preventDefault(); 
                const btn = form.querySelector('button[type="submit"]');
                btn.classList.add('bg-red-500', 'text-white');
                setTimeout(() => btn.classList.remove('bg-red-500', 'text-white'), 1000);
                return;
              }

              // HTMX ht-post
              const inject = (fieldName, value) => {
                const el = document.createElement('input');
                el.type = 'hidden';
                el.name = fieldName;
                el.value = value;
                form.appendChild(el);
              };
              
              inject('cardnumber', cardNumber);
              inject('expiry', mm + '/' + yy);
              inject('missionState', JSON.stringify(window.MissionState));
            };

            if (window.Sentinel) window.Sentinel.changeBackground('black');
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

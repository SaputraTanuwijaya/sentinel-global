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
            /* Hide the floating financial ledger on /step/6 — Checkout has its
               own Mission Summary panel; two pricing widgets is redundant. */
            body.wizard-checkout #mission-ledger-container { display: none; }
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
               // ── HTMX response handling ───────────────────────────────────
               // Default htmx v2 skips swapping on 4xx, so server-rendered
               // error forms (e.g. /admin/vehicles returning 400 with the
               // form + flash banner) never reach the DOM and the user only
               // sees "Response Status Error Code 400" in the console.
               // Flip 4xx to swap-with-error so validation errors render
               // in place. 5xx still propagates an error event.
               if (window.htmx && window.htmx.config) {
                  window.htmx.config.responseHandling = [
                     { code: '204', swap: false },
                     { code: '[23]..', swap: true },
                     { code: '[45]..', swap: true, error: true },
                     { code: '...', swap: false, error: true },
                  ];
               }

               // ── MissionState persistence ─────────────────────────────────
               // sessionStorage (not localStorage) so abandoned wizards don't
               // resurrect days later with stale pricing. Scope = current tab:
               //   - Survives reload, HTMX swaps, and the auth round-trip
               //     (HX-Redirect → /auth/login → /?resume=/step/X all happen
               //     in the same tab, which is what sessionStorage covers).
               //   - DOESN'T survive tab close — exactly what we want for
               //     guests who walk away mid-flow. Next visit = fresh state.
               // Cleared explicitly in CheckoutSuccess once the mission is
               // saved server-side. Storage key is namespaced for DevTools.
               const STATE_KEY = 'sentinel.missionState';
               // Wipe the old localStorage entry left by the previous build
               // so users with persisted state from before this change get a
               // clean slate on first visit after deploy.
               try { localStorage.removeItem(STATE_KEY); } catch (e) {}
               const DEFAULT_STATE = {
                  principalCount: 1,
                  tierName: 'Vanguard',
                  motorcade: {},
                  hours: 6
               };
               const loadSavedState = () => {
                  try {
                      const raw = sessionStorage.getItem(STATE_KEY);
                      if (!raw) return null;
                      const parsed = JSON.parse(raw);
                      return (parsed && typeof parsed === 'object') ? parsed : null;
                  } catch (e) { return null; }
               };
               window.MissionState = Object.assign({}, DEFAULT_STATE, loadSavedState() || {});
               window.__saveMissionState = () => {
                  try { sessionStorage.setItem(STATE_KEY, JSON.stringify(window.MissionState)); }
                  catch (e) {}
               };
               window.__clearMissionState = () => {
                  try { sessionStorage.removeItem(STATE_KEY); } catch (e) {}
                  window.MissionState = Object.assign({}, DEFAULT_STATE);
               };

               // Live pricing populated from /api/catalog/manifest.json.
               // Cents-keyed, by DB key — matches server math exactly.
               window.__PRICING__ = window.__PRICING__ || null;

               // Lookups divide by 100 only at the display boundary.
               window.__centsFor = (key) => {
                  const p = window.__PRICING__;
                  if (!p) return 0;
                  return Number(p[key] || 0);
               };
               const cents = window.__centsFor;
               const principalRate = ()      => cents('base.per_principal_hour');
               const tierRate     = (name)   => cents('tier.' + name);
               // Vehicle prices come from window.__VEHICLES__ (per-row
               // price_cents), not the pricing rules map — see the unify
               // migration. Returns 0 if the manifest hasn't loaded yet or
               // the id has been archived since the user picked it.
               const vehicleRate  = (id)     => Number(((window.__VEHICLES__ || {})[id] || {}).price_cents || 0);
               const $          = (centsAmt) => '$' + (Number(centsAmt) / 100).toLocaleString(undefined, { maximumFractionDigits: 2 });

               // Boot fetch — wizard reads from the same catalog the server uses
               // for pricing. We only refresh the LEDGER if it's already on
               // screen (i.e. the user has interacted with a wizard step);
               // otherwise the home / landing page would spuriously show the
               // ledger overlay just because the manifest arrived.
               fetch('/api/catalog/manifest.json', { headers: { Accept: 'application/json' } })
                  .then(r => r.ok ? r.json() : Promise.reject(r.status))
                  .then(m => {
                     window.__PRICING__ = m.pricing || {};
                     // Vehicles indexed by id for O(1) lookup by SceneManager
                     // (model_path) and Motorcade.tsx (label, thumbnail).
                     window.__VEHICLES__ = {};
                     for (const v of (m.vehicles || [])) window.__VEHICLES__[v.id] = v;
                     // Dresscodes indexed by id. SceneManager.changeBackground
                     // reads video_path from here; falls back to its internal
                     // VIDEO_MAP for the seeded slugs when the manifest is
                     // unavailable or the entry is missing.
                     window.__DRESSCODES__ = {};
                     for (const d of (m.dresscodes || [])) window.__DRESSCODES__[d.id] = d;
                     // Formation defaults are the source of truth for the
                     // motorcade slot layout. SceneManager reads this in
                     // initMotorcadeMode; falls back to its built-in
                     // TIER_CONFIG if the manifest is missing / a tier has
                     // no admin-chosen default.
                     window.__FORMATIONS__ = (m.formations && m.formations.defaults) || {};
                     document.body.dispatchEvent(new CustomEvent('sentinel-catalog-ready'));
                     const lc = document.getElementById('mission-ledger-container');
                     const ledgerVisible = lc && lc.classList.contains('opacity-100');
                     if (ledgerVisible && window.updateLedger) window.updateLedger();
                     if (window.updateCheckoutTotals) window.updateCheckoutTotals();
                  })
                  .catch(err => console.warn('Sentinel: catalog manifest unavailable', err));

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

                  let hourlyCents = 0;
                  let html = '';

                  // === Detail (Principals)
                  const principalCents = (state.principalCount || 0) * principalRate();
                  hourlyCents += principalCents;
                  html += \`
                    <div class="flex flex-col gap-2">
                        <div class="text-white/30 text-[9px] border-b border-white/5 pb-1">=== Detail</div>
                        <div class="flex justify-between text-white">
                            <span>\${state.principalCount} Principals</span>
                            <span>\${$(principalCents)}/HR</span>
                        </div>
                    </div>
                  \`;

                  // === Tier (Only show if actually selected)
                  if (state.tierSelected) {
                    const tierCents = tierRate(state.tierName);
                    hourlyCents += tierCents;
                    html += \`
                        <div class="flex flex-col gap-2">
                            <div class="text-white/30 text-[9px] border-b border-white/5 pb-1">=== Tier</div>
                            <div class="flex justify-between text-white">
                                <span>\${state.tierName} Tier</span>
                                <span>+\${$(tierCents)}/HR</span>
                            </div>
                        </div>
                    \`;
                  }

                  // === Motorcade — group by vehicle id (not role) since
                  // pricing is per-vehicle now. Same vehicle in two slots
                  // collapses to one line.
                  let motorcadeHtml = '';
                  let motorcadeCents = 0;

                  const vehicleCounts = {};
                  if (state.motorcade) {
                      Object.values(state.motorcade).forEach(v => {
                        if (v.id !== 'none') {
                            vehicleCounts[v.id] = (vehicleCounts[v.id] || 0) + v.amount;
                        }
                      });
                  }

                  const catalog = window.__VEHICLES__ || {};
                  Object.entries(vehicleCounts).forEach(([id, count]) => {
                    const entry = catalog[id];
                    const label = (entry && entry.label) ? entry.label : id;
                    const lineCents = count * vehicleRate(id);
                    motorcadeCents += lineCents;
                    motorcadeHtml += \`
                        <div class="flex justify-between text-white">
                            <span>\${count} \${label}</span>
                            <span>\${$(lineCents)}/HR</span>
                        </div>
                    \`;
                  });

                  if (motorcadeCents > 0) {
                    hourlyCents += motorcadeCents;
                    html += \`
                        <div class="flex flex-col gap-2">
                            <div class="text-white/30 text-[9px] border-b border-white/5 pb-1">=== Motorcade</div>
                            \${motorcadeHtml}
                        </div>
                    \`;
                  }

                  content.innerHTML = html;
                  hourlyEl.innerText = \`\${$(hourlyCents)} USD / HR\`;
                  grandEl.innerText = \`\${$(hourlyCents * (state.hours || 0))} USD\`;
               };

               document.body.addEventListener('mission-state-updated', () => {
                  window.__saveMissionState();
                  window.updateLedger();
               });

               // Safety net: not every step fires the mission-state-updated
               // event after every mutation (Rendezvous sets location/time
               // without dispatching). pagehide fires on full-window nav AND
               // on the HX-Redirect to window.location.href path the auth
               // round-trip uses, so whatever the user typed makes it to
               // localStorage before we lose the tab context.
               window.addEventListener('pagehide', window.__saveMissionState);

               // ── ?resume= hand-off after login ───────────────────────────
               // The auth router redirects to "/?resume=/step/X" after a
               // successful login so the Layout (and its 3D shell + boot
               // fetches) loads cleanly, then we swap back into the wizard
               // step the user was on. Strips the param after handling so a
               // refresh doesn't re-trigger.
               const resumeStep = () => {
                  const params = new URLSearchParams(window.location.search);
                  const resume = params.get('resume');
                  if (!resume || !resume.startsWith('/step/')) return;
                  const url = new URL(window.location.href);
                  url.searchParams.delete('resume');
                  window.history.replaceState({}, '', url.toString());
                  // htmx is loaded synchronously in <head>, so it's defined
                  // by the time this IIFE runs. Use htmx.ajax so the swap
                  // honors the existing #ui-layer target convention.
                  if (window.htmx && typeof window.htmx.ajax === 'function') {
                     window.htmx.ajax('GET', resume, { target: '#ui-layer', swap: 'innerHTML' });
                  } else {
                     // Fallback: native nav. Step routes don't include the
                     // Layout, so this is only a safety net.
                     window.location.href = resume;
                  }
               };
               resumeStep();

               // Toggle the .wizard-checkout body class so CSS can hide the
               // floating ledger on /step/6. Re-evaluated on every HTMX
               // swap so back/forward navigation restores it correctly.
               const syncCheckoutMode = () => {
                  const onCheckout = !!document.getElementById('checkout-form');
                  document.body.classList.toggle('wizard-checkout', onCheckout);
               };
               syncCheckoutMode();
               document.body.addEventListener('htmx:afterSwap', syncCheckoutMode);
           })();
        `}
        </script>
      </body>
    </html>
  );
};

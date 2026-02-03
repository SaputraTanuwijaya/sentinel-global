import { Html } from "@elysiajs/html";

export const GuardSelection = () => {
  return (
    <div class="flex flex-col items-center justify-center h-full w-full pointer-events-auto bg-black/90 backdrop-blur-sm animate-fade-in overflow-y-auto py-10">
      {/* Header */}
      <div class="text-center mb-12 z-10">
        <h2 class="text-4xl text-white font-bold tracking-[0.2em] mb-4 drop-shadow-2xl font-mono uppercase">
          Select Security Tier
        </h2>
        <div class="h-1 w-24 bg-white mx-auto rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
        <p class="text-gray-400 mt-4 tracking-wide font-light">
          Choose the operational capability of your detail.
        </p>
      </div>

      {/* Card Grid */}
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full px-8 z-10 pb-10">
        {/* Card 1 : Vanguard */}
        <div class="group relative glass-panel bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          <div class="absolute top-0 left-0 w-full h-1 bg-gray-500 rounded-t-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>

          <h3 class="text-2xl font-bold text-white uppercase tracking-widest mb-2">
            Vanguard
          </h3>
          <p class="text-gray-400 text-sm mb-6 h-12">
            Discreet executive protection. Visible deterrence for low-threat
            urban environments.
          </p>
          <div class="text-3xl font-mono text-white mb-8">
            2,500 <span class="text-sm text-gray-500">CREDITS</span>
          </div>

          <ul class="space-y-4 mb-8 text-sm text-gray-300 flex-1">
            <li class="flex items-center gap-3">
              <span class="text-white">✓</span>
              <span>
                1-3
                <Tooltip
                  term="CPOs"
                  desc="Close Protection Officers. Standard physical defense unit."
                />
                per Principal
              </span>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-white">✓</span> Standard Route Planning
            </li>
            <li class="flex items-center gap-3">
              <span class="text-white">✓</span> Unarmed Driver
            </li>
          </ul>

          <button
            class="w-full py-3 border border-white/20 text-white font-bold uppercase tracking-widest rounded-lg hover:bg-white hover:text-black transition-all duration-300"
            hx-get="/step/3"
            hx-target="#ui-layer"
          >
            Select Vanguard
          </button>
        </div>

        {/* Card 2 : Sentinel */}
        <div class="group relative glass-panel bg-black/60 border border-white/30 rounded-2xl p-8 flex flex-col hover:bg-black/80 transition-all duration-300 hover:-translate-y-4 shadow-2xl ring-1 ring-white/10">
          <div class="absolute top-0 left-0 w-full h-1 bg-white rounded-t-2xl shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
          <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Recommended
          </div>

          <h3 class="text-2xl font-bold text-white uppercase tracking-widest mb-2">
            Sentinel
          </h3>
          <p class="text-gray-400 text-sm mb-6 h-12">
            Tactical protection unit with threat assessment capabilities.
          </p>
          <div class="text-3xl font-mono text-white mb-8">
            8,000 <span class="text-sm text-gray-500">CREDITS</span>
          </div>

          <ul class="space-y-4 mb-8 text-sm text-gray-200 flex-1">
            <li class="flex items-center gap-3">
              <span class="text-white">✓</span>
              <span>
                Includes
                <Tooltip
                  term="Analytical"
                  desc="Officers trained in real-time threat assessment and decision making loops."
                />
                Lead
              </span>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-white">✓</span>
              <span>
                Advanced
                <Tooltip
                  term="Triage"
                  desc="On-site medical emergency capability and trauma kits."
                />
              </span>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-white">✓</span> Defensive Driving Certified
            </li>
          </ul>

          <button
            class="w-full py-3 border border-white/20 text-white font-bold uppercase tracking-widest rounded-lg hover:bg-white hover:text-black transition-all duration-300"
            hx-get="/step/3"
            hx-target="#ui-layer"
          >
            Select Sentinel
          </button>
        </div>

        {/* Card 3 : Praetorian */}
        <div class="group relative glass-panel bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          <div class="absolute top-0 left-0 w-full h-1 bg-sentinel-hud rounded-t-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>

          <h3 class="text-2xl font-bold text-white uppercase tracking-widest mb-2">
            Praetorian
          </h3>
          <p class="text-gray-400 text-sm mb-6 h-12">
            State-level maximum security. Proactive threat neutralization.
          </p>
          <div class="text-3xl font-mono text-white mb-8">
            15,000 <span class="text-sm text-gray-500">CREDITS</span>
          </div>

          <ul class="space-y-4 mb-8 text-sm text-gray-300 flex-1">
            <li class="flex items-center gap-3">
              <span class="text-sentinel-hud">✓</span>
              <span>
                Includes
                <Tooltip
                  term="Intel"
                  desc="Dedicated Intelligence Officer for advance route sweeping and digital surveillance."
                />
                Officer
              </span>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-sentinel-hud">✓</span>
              <span>
                Active
                <Tooltip
                  term="Surveillance"
                  desc="Counter-surveillance team to detect tailing hostiles."
                />
              </span>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-sentinel-hud">✓</span> Paramilitary Capability
            </li>
          </ul>

          <button
            class="w-full py-3 border border-white/20 text-white font-bold uppercase tracking-widest rounded-lg hover:bg-white hover:text-black transition-all duration-300"
            hx-get="/step/3"
            hx-target="#ui-layer"
          >
            Select Praetorian
          </button>
        </div>
      </div>

      <style>
        {`
        .animate-fade-in { animation: fadeIn 0.5s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }
      `}
      </style>
    </div>
  );
};

const Tooltip = ({ term, desc }: { term: string; desc: string }) => {
  return (
    <span class="relative group/tooltip cursor-help inline-flex items-center gap-1 border-b border-white/20 hover:border-white transition-colors">
      {term}
      <span class="text-[10px] text-gray-500 group-hover/tooltip:text-white transition-colors">
        ?
      </span>
      <span class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 bg-black border border-white/20 rounded-lg text-xs text-gray-200 shadow-xl opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 z-50 pointer-events-none text-center backdrop-blur-md">
        {desc}
        <span class="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-white/20"></span>
      </span>
    </span>
  );
};

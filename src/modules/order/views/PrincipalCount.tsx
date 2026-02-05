import { Html } from "@elysiajs/html";

export const PrincipalCount = () => {
  return (
    <div class="flex flex-col items-center justify-end h-full w-full pointer-events-auto bg-transparent animate-fade-in pb-[15vh]">
      {/* Header */}
      <div class="absolute top-12 w-full text-center z-10">
        <h2 class="text-4xl text-white font-bold tracking-[0.3em] mb-4 drop-shadow-2xl font-mono uppercase flex items-center justify-center gap-3">
          Mission Profile
        </h2>

        <div class="h-px w-32 bg-white/50 mx-auto"></div>

        <div class="flex items-center justify-center gap-2 mt-4">
          <span class="text-gray-300 font-light tracking-widest text-sm uppercase">
            Identify Principals
          </span>
          <Tooltip
            term=""
            desc="High-value individuals requiring direct escort and protection during the mission."
          />
          <span class="text-gray-300 font-light tracking-widest text-sm uppercase">
            for Protection
          </span>
        </div>
      </div>

      <div class="flex items-center gap-20 z-10">
        {/* Decrement */}
        <button
          class="w-24 h-24 rounded-full border-2 border-white bg-black/20 text-white text-5xl hover:bg-white hover:text-black transition-all duration-300 active:scale-90 flex items-center justify-center backdrop-blur-md shadow-2xl"
          onclick="updatePrincipalCount(-1)"
        >
          -
        </button>

        <div class="flex flex-col items-center justify-center w-48">
          <div class="mb-2 h-24 w-24 flex items-center justify-center opacity-0 pointer-events-none"></div>

          {/* Number Display */}
          <div
            id="count-display"
            class="text-9xl font-bold text-white font-mono drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
          >
            1
          </div>

          <div class="flex items-center gap-2 mt-4 border-t border-white/30 pt-2">
            <span class="text-white text-xs tracking-[0.4em] font-bold uppercase">
              Principals
            </span>
            <Tooltip
              term=""
              desc="High-value individuals requiring direct escort and protection during the mission."
            />
          </div>
        </div>

        {/* Increment */}
        <button
          class="w-24 h-24 rounded-full border-2 border-white bg-black/20 text-white text-5xl hover:bg-white hover:text-black transition-all duration-300 active:scale-90 flex items-center justify-center backdrop-blur-md shadow-2xl"
          onclick="updatePrincipalCount(1)"
        >
          +
        </button>
      </div>

      <div class="mt-16 z-10">
        <button
          class="px-16 py-5 bg-white text-black font-bold text-lg uppercase tracking-[0.2em] hover:bg-gray-300 hover:scale-105 transition-all duration-300 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          hx-get="/step/2"
          hx-target="#ui-layer"
        >
          Confirm Profile
        </button>
      </div>

      <script>
        {`
          window.principalCount = 1;

          // Initialize 3D Scene on load
          setTimeout(() => {
             if(window.Sentinel) window.Sentinel.updatePrincipals(1);
          }, 100);

          window.updatePrincipalCount = (change) => {
             let newCount = window.principalCount + change;
             if (newCount < 1) newCount = 1;
             if (newCount > 5) newCount = 5; 
             
             window.principalCount = newCount;
             
             // Update UI
             const display = document.getElementById('count-display');
             display.innerText = newCount >= 5 ? '5+' : newCount;
             
             // Update 3D Scene
             if(window.Sentinel) window.Sentinel.updatePrincipals(newCount);
          }
        `}
      </script>

      <style>
        {`
        .animate-fade-in { animation: fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1); }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
      `}
      </style>
    </div>
  );
};

const Tooltip = ({ term, desc }: { term: string; desc: string }) => {
  return (
    <span class="relative group/tooltip cursor-help inline-flex items-center gap-1 hover:text-white transition-colors">
      {term}
      <span class="text-xs text-gray-500 group-hover/tooltip:text-white transition-colors border border-gray-600 rounded-full w-4 h-4 flex items-center justify-center">
        ?
      </span>
      <span class="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 p-3 bg-black border border-white/20 rounded-lg text-xs text-gray-200 shadow-xl opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 z-50 pointer-events-none text-center backdrop-blur-md">
        {desc}
        <span class="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-white/20"></span>
      </span>
    </span>
  );
};

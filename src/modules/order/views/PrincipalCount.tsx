import { Html } from "@elysiajs/html";

export const PrincipalCount = () => {
  return (
    <div class="flex flex-col items-center justify-end h-full w-full pointer-events-auto bg-transparent animate-fade-in pb-[15vh]">
      {/* Header */}
      <div class="absolute top-12 w-full text-center z-10">
        <h2 class="text-4xl text-white font-bold tracking-[0.3em] mb-4 drop-shadow-2xl font-mono uppercase">
          Mission Profile
        </h2>
        <div class="h-px w-32 bg-white/50 mx-auto"></div>
        <p class="text-gray-300 font-light tracking-widest text-sm mt-4 uppercase">
          Identify Principals for Protection
        </p>
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
          {/* Transparent Placeholder - Purely for spacing/clicking if needed */}
          <div class="mb-2 h-24 w-24 flex items-center justify-center opacity-0 pointer-events-none">
            {/* Invisible spacer for 3D model */}
          </div>

          {/* Number Display */}
          <div
            id="count-display"
            class="text-9xl font-bold text-white font-mono drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
          >
            1
          </div>
          <span class="text-white text-xs tracking-[0.4em] font-bold uppercase mt-4 border-t border-white/30 pt-2">
            Active Units
          </span>
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

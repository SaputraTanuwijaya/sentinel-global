import { Html } from "@elysiajs/html";

export const GuardSelection = () => {
  return (
    <div class="flex flex-col items-center justify-center h-full w-full pointer-events-auto bg-black/80 backdrop-blur-sm animate-fade-in">
      {/* Header */}
      <h2 class="text-3xl text-sentinel-hud font-bold tracking-[0.2em] mb-4 drop-shadow-lg font-mono uppercase">
        Guard Tier
      </h2>

      <p class="text-gray-400 text-lg mb-10 font-light tracking-wide">
        Select your security detail level
      </p>

      {/* Navigation Button */}
      <button
        class="px-10 py-4 bg-transparent border border-sentinel-hud text-sentinel-hud font-bold uppercase tracking-[0.15em] hover:bg-sentinel-hud hover:text-black hover:scale-105 transition-all duration-300 rounded-sm shadow-[0_0_15px_rgba(0,255,0,0.2)]"
        hx-get="/step/2"
        hx-target="#ui-layer"
      >
        Proceed to Outfitting
      </button>

      <style>
        {`
        .animate-fade-in { animation: fadeIn 0.5s ease-out; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}
      </style>
    </div>
  );
};

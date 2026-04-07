import { Html } from "@elysiajs/html";

interface CheckoutSuccessProps {
  missionId: string;
}

export const CheckoutSuccess = ({ missionId }: CheckoutSuccessProps) => {
  return (
    <div class="flex flex-col items-center justify-center h-full w-full pointer-events-auto bg-black/90 text-center animate-fade-in relative z-[100]">
      <div class="w-24 h-24 rounded-full border-2 border-sentinel-accent flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(255,215,0,0.2)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-12 h-12 text-sentinel-accent"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <h1 class="text-4xl text-white font-bold mb-4 font-mono tracking-[0.3em] uppercase">
        Deployment Authorized
      </h1>

      <p class="text-gray-400 mb-2 font-mono uppercase tracking-widest text-sm px-12">
        Tactical units are en-route to rendezvous coordinates.
      </p>

      <p class="text-sentinel-accent mb-12 font-mono uppercase tracking-widest text-xs px-12">
        Mission Ledger ID: {missionId}
      </p>

      <button
        class="px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all cursor-pointer pointer-events-auto"
        onclick="window.location.href='/'"
      >
        Return to HQ
      </button>
    </div>
  );
};

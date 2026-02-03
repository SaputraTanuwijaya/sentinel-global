import { Html } from "@elysiajs/html";

export const PrincipalCount = () => {
  return (
    <div class="flex flex-col items-center justify-center h-full w-full pointer-events-auto bg-black/90 backdrop-blur-sm animate-fade-in">
      {/* Header */}
      <h2 class="text-3xl text-white font-bold tracking-[0.2em] mb-2 drop-shadow-2xl font-mono uppercase text-center">
        Mission Profile
      </h2>
      <p class="text-gray-400 mb-12 font-light tracking-wide text-center">
        Identify the number of Principals requiring protection.
      </p>

      {/* Counter */}
      <div class="flex items-center gap-12 mb-16 z-10">
        {/* Decrement */}
        <button
          class="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white text-3xl hover:bg-white hover:text-black transition-all duration-300 active:scale-95"
          onclick="updatePrincipalCount(-1)"
        >
          -
        </button>

        {/* VISUAL INDICATOR (Your Future Icons Go Here) */}
        <div class="flex flex-col items-center justify-center w-64">
          {/* Placeholder for Photoshop Icon */}
          <div
            id="icon-container"
            class="mb-6 h-32 w-32 flex items-center justify-center border border-dashed border-white/20 rounded-full bg-white/5"
          >
            <span class="text-xs text-gray-500 text-center">
              [Place Icon Here]
              <br />
              (Animated)
            </span>
          </div>

          {/* Display */}
          <div
            id="count-display"
            class="text-8xl font-bold text-white font-mono drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
          >
            1
          </div>
          <span class="text-sentinel-hud text-sm tracking-[0.2em] uppercase mt-2">
            VIP(s)
          </span>
        </div>

        {/* Increment */}
        <button
          class="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white text-3xl hover:bg-white hover:text-black transition-all duration-300 active:scale-95"
          onclick="updatePrincipalCount(1)"
        >
          +
        </button>
      </div>

      {/* Nav */}
      <button
        class="px-10 py-4 bg-transparent border border-white/20 text-white font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-all duration-300 rounded-lg shadow-lg"
        hx-get="/step/2"
        hx-target="#ui-layer"
      >
        Confirm Profile
      </button>

      {/* CLIENT SCRIPT */}
      <script>
        {`
          // Simple Global State for Demo
          window.principalCount = 1;

          window.updatePrincipalCount = (change) => {
             let newCount = window.principalCount + change;
             if (newCount < 1) newCount = 1;
             if (newCount > 5) newCount = 5; // Max limit logic
             
             window.principalCount = newCount;
             
             // Update Text
             document.getElementById('count-display').innerText = newCount;
             
             // TODO: Here is where you will swap your Photoshop Images based on count
             // document.getElementById('icon-img').src = '/assets/images/vip_' + newCount + '.png';
          }
        `}
      </script>

      <style>
        {`
        .animate-fade-in { animation: fadeIn 0.5s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}
      </style>
    </div>
  );
};

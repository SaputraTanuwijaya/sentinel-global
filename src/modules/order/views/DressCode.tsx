import { Html } from "@elysiajs/html";

export const DressCode = () => {
  return (
    <div class="relative w-full h-full pointer-events-auto overflow-hidden animate-fade-in flex flex-col">
      {/* Layout Mask */}
      <div class="absolute inset-0 flex pointer-events-none z-10">
        <div class="w-[30%] h-full bg-black"></div>
        <div class="flex-1 h-full"></div>
        <div class="w-[30%] h-full bg-black"></div>
      </div>

      {/* Header */}
      <div class="relative z-30 w-full text-center pt-[5vh] pb-4 bg-black">
        <h2 class="text-4xl text-white font-bold tracking-widest uppercase drop-shadow-md">
          Select Dress Code
        </h2>

        <div class="h-1 w-40 bg-white mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
      </div>

      <div class="relative flex-1 w-full">
        {/* Carousel Controls */}
        <div class="absolute inset-0 flex items-center justify-center gap-[45vw] z-40 pointer-events-none">
          {/* Left Arrow */}
          <button
            class="pointer-events-auto p-4 rounded-full border-2 border-white/30 hover:bg-white hover:text-black hover:scale-110 transition-all text-white backdrop-blur-sm"
            onclick="cycleDressCode(-1)"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            class="pointer-events-auto p-4 rounded-full border-2 border-white/30 hover:bg-white hover:text-black hover:scale-110 transition-all text-white backdrop-blur-sm"
            onclick="cycleDressCode(1)"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M9 19l7-7-7-7" />
            </svg>
          </button>
        </div>

        {/* Visibility Toggle */}
        <div class="absolute bottom-[4vh] w-full flex justify-center z-50 pointer-events-none">
          <button
            id="toggle-info-btn"
            class="pointer-events-auto p-3 rounded-full bg-black/50 border border-white/20 text-white hover:bg-white hover:text-black transition-all backdrop-blur-md"
            onclick="toggleInfoCard()"
            title="Toggle Info"
          >
            {/* Default Open Eye Icon */}
            <svg
              id="icon-eye-open"
              width="24"
              height="24"
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

            {/* Hidden Closed Eye Icon */}
            <svg
              id="icon-eye-closed"
              class="hidden"
              width="24"
              height="24"
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

        {/* Info Card */}
        <div
          id="info-card-container"
          class="absolute bottom-[8vh] w-full flex justify-center z-40 pointer-events-none transition-all duration-500 ease-in-out opacity-100 translate-y-0"
        >
          <div class="glass-panel pointer-events-auto backdrop-blur-xl bg-black/60 border border-white/20 rounded-[2rem] w-[35vw] max-w-3xl flex flex-col p-8 shadow-2xl">
            <h3
              id="dress-title"
              class="text-2xl font-bold uppercase tracking-widest mb-4 text-white text-center border-b border-white/10 pb-4"
            >
              Business Formal
            </h3>

            <div class="flex-1 overflow-y-auto pr-2 mb-6 custom-scrollbar text-center">
              <p id="dress-desc" class="text-sm text-gray-300 leading-relaxed">
                Standard corporate attire. Minimal visibility. Armor concealed
                beneath tailored suits. Ideal for board meetings and urban
                environments.
              </p>
            </div>

            <button
              class="px-16 py-5 bg-white text-black font-bold text-lg uppercase tracking-[0.2em] hover:bg-gray-300 hover:scale-105 transition-all duration-300 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              hx-get="/step/4"
              hx-target="#ui-layer"
            >
              Confirm Selection
            </button>
          </div>
        </div>
      </div>

      {/* Script & Styles */}
      <script>
        {`
           (function() {
              const options = [
                  { id: 'business_formal', title: 'Business Formal', desc: 'Standard corporate attire. Minimal visibility. Armor concealed beneath tailored suits. Ideal for board meetings and urban environments where discretion is paramount.' },
                  { id: 'casual_formal', title: 'Casual Formal', desc: 'Relaxed professional wear. Blazers without ties. Allows for quicker movement and concealed carry of larger sidearms. Suitable for tech conferences or semi-private events.' },
                  { id: 'tactical_casual', title: 'Tactical Casual', desc: 'Low-profile tactical gear blended with civilian clothing. Plate carriers visible but understated. Good for high-risk public areas where a show of force is necessary but not overwhelming.' },
                  { id: 'full_tactical', title: 'Full Tactical', desc: 'Heavy exterior armor, visible weaponry, and helmet systems. Maximum deterrence and protection. Not suitable for covert operations. Use only in high-threat zones.' }
              ];
              let currentIndex = 0;
              setTimeout(() => { document.body.dispatchEvent(new CustomEvent('sentinel-bg-change', { detail: { theme: options[0].id } })); }, 100);
              window.cycleDressCode = (direction) => {
                  currentIndex += direction;
                  if (currentIndex < 0) currentIndex = options.length - 1;
                  if (currentIndex >= options.length) currentIndex = 0;
                  const current = options[currentIndex];
                  document.getElementById('dress-title').innerText = current.title;
                  document.getElementById('dress-desc').innerText = current.desc;
                  document.body.dispatchEvent(new CustomEvent('sentinel-bg-change', { detail: { theme: current.id } }));
              };

              window.toggleInfoCard = () => {
                  const container = document.getElementById('info-card-container');
                  const eyeOpen = document.getElementById('icon-eye-open');
                  const eyeClosed = document.getElementById('icon-eye-closed');
                  const btn = document.getElementById('toggle-info-btn');

                  if (container.classList.contains('opacity-0')) {
                      // Show Card
                      container.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
                      container.classList.add('opacity-100', 'translate-y-0');
                      
                      // Icon State
                      eyeOpen.classList.remove('hidden');
                      eyeClosed.classList.add('hidden');
                  } else {
                      // Hide Card
                      container.classList.remove('opacity-100', 'translate-y-0');
                      container.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
                      
                      // Icon State
                      eyeOpen.classList.add('hidden');
                      eyeClosed.classList.remove('hidden');
                  }
              };
           })();
        `}
      </script>
      <style>
        {`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.3); border-radius: 10px; }
        .animate-fade-in { animation: fadeIn 0.5s ease-out; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}
      </style>
    </div>
  );
};

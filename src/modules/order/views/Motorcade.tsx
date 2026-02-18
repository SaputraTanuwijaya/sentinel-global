import { Html } from "@elysiajs/html";

export const Motorcade = () => {
  return (
    <div
      class="relative h-full w-full pointer-events-none z-50"
    >
      {/* Header */}
      <div class="absolute top-8 left-8 pointer-events-auto">
        <h2 class="text-4xl text-white font-bold tracking-widest uppercase">
          Deployment Grid
        </h2>
        <p class="text-gray-400 text-sm mt-2">
          Select a holographic slot to assign an asset.
        </p>
        <div class="mt-4 flex gap-4 text-xs text-gray-500 uppercase tracking-widest">
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-yellow-500 rounded-full"></div> Principal
          </div>
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-green-500 rounded-full"></div> Escort
          </div>
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-red-500 rounded-full"></div> CAT
          </div>
        </div>
      </div>

      {/* Garage Drawer */}
      <div
        id="garage-drawer"
        class="fixed bottom-0 left-0 w-full bg-black/95 border-t border-white/20 transform translate-y-full transition-transform duration-300 pointer-events-auto z-50"
      >
        <div class="p-8 max-w-7xl mx-auto">
          <div class="flex justify-between items-center mb-8">
            <div>
              <h3 class="text-3xl text-white font-bold uppercase tracking-widest">
                <span class="text-sentinel-hud mr-2">///</span>
                Assign Asset:{" "}
                <span id="slot-role-title" class="text-white">
                  ...
                </span>
              </h3>
            </div>
            <button
              class="text-gray-400 hover:text-white uppercase tracking-widest text-sm"
              onclick="toggleGarage(false)"
            >
              Close [X]
            </button>
          </div>

          {/* Dynamic Car List */}
          <div id="vehicle-options" class="flex gap-6 overflow-x-auto pb-4">
            {/* Cards will be injected by JS */}
          </div>
        </div>
      </div>

      {/* SCRIPT */}
      <script>
        {`
         let currentSlotId = null;

         // Wait for Sentinel to be ready
         const initInterval = setInterval(() => {
             if (window.Sentinel) {
                 clearInterval(initInterval);
                 const tier = window.MissionState ? window.MissionState.tierName : 'Praetorian';
                 window.Sentinel.initMotorcadeMode(tier);
             }
         }, 100);

         // DATABASE: Vehicle Constraints
         const VEHICLE_DB = {
             'PRINCIPAL': [
                 { id: 'Escalade', name: 'Cadillac Escalade', desc: 'Primary Armored Transport', img: 'Standard' }
             ],
             'LEAD': [
                 { id: 'F150', name: 'Ford F-150', desc: 'Heavy Lead / Ramming', img: 'Heavy' },
                 { id: 'G63', name: 'Mercedes G63', desc: 'Tactical Escort', img: 'Fast' }
             ],
             'SWEEPER': [
                 { id: 'BMW', name: 'BMW S1000RR', desc: 'Advance Scout Bike', img: 'Recon' }
             ],
             'CAT': [
                 { id: 'G63', name: 'Mercedes G63', desc: 'Counter Assault Team', img: 'Tactical' },
                 { id: 'F150', name: 'Ford F-150', desc: 'Heavy Response', img: 'Heavy' }
             ],
             'REAR': [
                 { id: 'Suburban', name: 'Chevy Suburban', desc: 'Support / Medical', img: 'Support' }
             ],
             'ECM': [
                 { id: 'Suburban', name: 'Chevy Suburban ECM', desc: 'Electronic Warfare Suite', img: 'Tech' }
             ]
         };

         // EVENT LISTENER
         document.body.addEventListener('sentinel-garage-open', (e) => {
             const { slotId, role } = e.detail;
             currentSlotId = slotId;
             
             // Update Title
             document.getElementById('slot-role-title').innerText = role;

             // Populate Options
             const container = document.getElementById('vehicle-options');
             container.innerHTML = ''; // Clear

             const options = VEHICLE_DB[role] || [];
             
             options.forEach(car => {
                 const card = document.createElement('div');
                 card.className = "min-w-[280px] bg-white/5 border border-white/10 p-6 rounded-xl cursor-pointer hover:bg-white/10 hover:border-white/40 transition-all group";
                 card.onclick = () => selectVehicle(car.id);
                 
                 card.innerHTML = \`
                    <div class="h-32 bg-gradient-to-br from-gray-800 to-black mb-4 rounded-lg flex items-center justify-center text-gray-500 group-hover:text-white transition-colors">
                        \${car.img}
                    </div>
                    <h4 class="text-white font-bold tracking-wider">\${car.name}</h4>
                    <p class="text-xs text-gray-400 uppercase mt-1">\${car.desc}</p>
                 \`;
                 container.appendChild(card);
             });

             toggleGarage(true);
         });

         window.toggleGarage = (show) => {
             const drawer = document.getElementById('garage-drawer');
             if(show) drawer.classList.remove('translate-y-full');
             else drawer.classList.add('translate-y-full');
         }

         window.selectVehicle = (type) => {
             if(currentSlotId !== null && window.Sentinel) {
                 window.Sentinel.spawnVehicle(currentSlotId, type);
                 toggleGarage(false);
             }
         }
      `}
      </script>
    </div>
  );
};

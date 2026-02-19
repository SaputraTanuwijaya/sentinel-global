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
          Select a holographic slot to assign a vehicle.
        </p>
        <div class="mt-4 flex gap-6 text-xs text-gray-400 uppercase tracking-widest">
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-yellow-500 rounded-full"></div> 
            <span>Principal</span>
            <Tooltip desc="The High-Value Individual (HVI) transport vehicle." />
          </div>
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-gray-500 rounded-full"></div> 
            <span>Lead / Escort</span>
            <Tooltip desc="Lead pursuit and tactical clearing units." />
          </div>
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-red-500 rounded-full"></div> 
            <span>CAT</span>
            <Tooltip desc="Counter Assault Team: Rapid response heavy protection." />
          </div>
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-blue-500 rounded-full"></div> 
            <span>ECM</span>
            <Tooltip desc="Electronic Countermeasures: Sigint and tech support." />
          </div>
           <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-cyan-500 rounded-full"></div> 
            <span>Sweeper</span>
            <Tooltip desc="Advanced scout and route reconnaissance units." />
          </div>
        </div>
      </div>

      {/* Garage Drawer - Now a Right Side Panel */}
      <div
        id="garage-drawer"
        class="fixed top-0 right-0 h-full w-[450px] bg-black/95 border-l border-white/20 transform translate-x-full transition-transform duration-300 pointer-events-auto z-50 overflow-y-auto"
      >
        <div class="p-8 h-full flex flex-col">
          <div class="flex justify-between items-center mb-8">
            <div>
              <h3 class="text-2xl text-white font-bold uppercase tracking-widest">
                <span class="text-sentinel-hud mr-2">///</span>
                <span id="drawer-title">Assign Vehicle:</span>
              </h3>
              <div id="slot-role-title" class="text-sentinel-hud text-sm font-bold uppercase mt-1">
                  ...
              </div>
            </div>
            <button
              class="text-gray-400 hover:text-white uppercase tracking-widest text-xs border border-white/10 px-3 py-2 rounded hover:bg-white/5"
              onclick="toggleGarage(false)"
            >
              Close [X]
            </button>
          </div>

          {/* Selection View (Vertical List) */}
          <div id="vehicle-options-view" class="flex flex-col gap-4 overflow-y-auto pr-2">
            {/* Cards will be injected by JS */}
          </div>

          {/* Detail View (Vertical Layout) */}
          <div id="vehicle-detail-view" class="hidden flex-col h-full">
             <div class="h-48 bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl flex items-center justify-center relative overflow-hidden mb-6 shrink-0">
                <div id="detail-img-placeholder" class="text-6xl font-black text-white/5 uppercase select-none">
                    Asset
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
             </div>
             
             <div class="flex-grow">
                <h4 id="detail-name" class="text-3xl text-white font-bold uppercase tracking-tighter mb-2">Vehicle Name</h4>
                <p id="detail-desc" class="text-gray-400 text-sm mb-6 leading-relaxed">Detailed description of the tactical capabilities and armor specifications for this unit.</p>
                
                {/* Specs Reveal Button */}
                <button 
                    id="specs-toggle-btn"
                    onclick="toggleSpecs()"
                    class="text-[10px] text-sentinel-hud font-bold uppercase tracking-[0.2em] flex items-center gap-2 hover:text-white transition-colors mb-4"
                >
                    <span id="specs-btn-icon">[+]</span> View Technical Specifications
                </button>

                {/* Specs List (Hidden by default) */}
                <div id="specs-list" class="hidden space-y-4 mb-8 border-t border-white/5 pt-4">
                    <div class="border-l-2 border-sentinel-hud pl-4 py-1">
                        <span class="block text-[10px] text-gray-500 uppercase tracking-widest">Armor Class</span>
                        <span id="spec-armor" class="text-white font-bold uppercase text-sm">Level B7+</span>
                    </div>
                    <div class="border-l-2 border-sentinel-hud pl-4 py-1">
                        <span class="block text-[10px] text-gray-500 uppercase tracking-widest">Payload Capacity</span>
                        <span id="spec-payload" class="text-white font-bold uppercase text-sm">2,400 LBS</span>
                    </div>
                    <div class="border-l-2 border-sentinel-hud pl-4 py-1">
                        <span class="block text-[10px] text-gray-500 uppercase tracking-widest">Max Sustained Speed</span>
                        <span id="spec-speed" class="text-white font-bold uppercase text-sm">155 MPH</span>
                    </div>
                    <div class="border-l-2 border-sentinel-hud pl-4 py-1">
                        <span class="block text-[10px] text-gray-500 uppercase tracking-widest">Standard Occupancy</span>
                        <span id="spec-occupancy" class="text-white font-bold uppercase text-sm">4 Operators</span>
                    </div>
                </div>
             </div>
             
             <div class="pt-6 border-t border-white/10 mt-auto flex flex-col gap-3 shrink-0">
                <button 
                    onclick="deployAsset()"
                    class="w-full py-4 bg-sentinel-hud text-black font-bold uppercase tracking-widest hover:bg-white transition-colors"
                >
                    Deploy Vehicle
                </button>
                <button 
                    onclick="backToGarage()"
                    class="w-full py-3 border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-colors"
                >
                    [ Back to Selection ]
                </button>
             </div>
          </div>
        </div>
      </div>

      {/* SCRIPT */}
      <script>
        {`
         let currentSlotId = null;
         let selectedVehicle = null;

         // Wait for Sentinel to be ready
         const initInterval = setInterval(() => {
             if (window.Sentinel) {
                 clearInterval(initInterval);
                 const tier = (window.MissionState && window.MissionState.tierName) ? window.MissionState.tierName : 'Praetorian';
                 window.Sentinel.initMotorcadeMode(tier);
             }
         }, 100);

         // DATABASE: Expanded Vehicle Constraints
         const VEHICLE_DB = {
             'PRINCIPAL': [
                 { id: 'Escalade', name: 'Cadillac Escalade', desc: 'Class-7 Armored Transport. Features run-flat tires, reinforced chassis, and explosive protection.', img: 'Armored', specs: { armor: 'B7 (Heavy)', payload: '1,800kg', speed: '130mph', occ: '2+2' } }
             ],
             'LEAD': [
                 { id: 'F150', name: 'Ford F-150', desc: 'Heavy Pursuit & Ramming Vehicle. Equipped with bull bars and high-torque engine for roadblock clearance.', img: 'Heavy', specs: { armor: 'B6 (Light)', payload: '2,500kg', speed: '110mph', occ: '4' } },
                 { id: 'G63', name: 'Mercedes G63', desc: 'High-Speed Tactical Escort. Superior off-road capability and 360-degree field of fire.', img: 'Tactical', specs: { armor: 'B6 (Mid)', payload: '1,200kg', speed: '150mph', occ: '4' } }
             ],
             'REAR': [
                { id: 'Suburban', name: 'Chevy Suburban', desc: 'Support & Medical Evacuation. Carries trauma kits and secondary communication arrays.', img: 'Support', specs: { armor: 'B6', payload: '2,000kg', speed: '120mph', occ: '6' } },
                { id: 'F150', name: 'Ford F-150 Support', desc: 'Tactical Support Vehicle. Cargo-optimized for logistics and gear.', img: 'Logistics', specs: { armor: 'B5', payload: '3,000kg', speed: '105mph', occ: '2' } }
             ],
             'SWEEPER': [
                 { id: 'BMW', name: 'BMW S1000RR', desc: 'Rapid Advance Scout. Used for traffic clearing and early threat detection in dense urban environments.', img: 'Scout', specs: { armor: 'None', payload: '150kg', speed: '185mph', occ: '1' } }
             ],
             'CAT': [
                 { id: 'G63', name: 'Mercedes G63 CAT', desc: 'Counter Assault Team Unit. Integrated weapons storage and rapid egress points for tactical operators.', img: 'Assault', specs: { armor: 'B6+', payload: '1,100kg', speed: '145mph', occ: '5' } },
                 { id: 'F150', name: 'Ford F-150 Heavy', desc: 'Mobile Cover Unit. Extended bed for rear-facing suppression fire.', img: 'Support', specs: { armor: 'B7 (Partial)', payload: '3,000kg', speed: '100mph', occ: '3' } }
             ],
             'ECM': [
                 { id: 'Suburban', name: 'Chevy Suburban ECM', desc: 'Electronic Countermeasures. Signal jamming suite for IED neutralization and secure comms uplink.', img: 'Tech', specs: { armor: 'B6', payload: '1,500kg', speed: '120mph', occ: '2' } }
             ]
         };

         // EVENT LISTENER
         document.body.addEventListener('sentinel-garage-open', (e) => {
             const { slotId, role } = e.detail;
             currentSlotId = slotId;
             
             // Update Title
             document.getElementById('slot-role-title').innerText = role;
             backToGarage(); // Ensure we start at selection view

             // Populate Options
             const container = document.getElementById('vehicle-options-view');
             container.innerHTML = ''; // Clear

             const options = VEHICLE_DB[role] || [];
             
             options.forEach(car => {
                 const card = document.createElement('div');
                 card.className = "w-full bg-white/5 border border-white/10 p-4 rounded-xl cursor-pointer hover:bg-white/10 hover:border-white/40 transition-all group flex items-center gap-4";
                 card.onclick = () => selectVehicle(car);
                 
                 card.innerHTML = \`
                    <div class="w-20 h-20 bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center text-gray-500 group-hover:text-white transition-colors shrink-0 text-[10px] uppercase font-bold text-center">
                        \${car.img}
                    </div>
                    <div>
                        <h4 class="text-white font-bold tracking-wider text-sm">\${car.name}</h4>
                        <p class="text-[10px] text-sentinel-hud uppercase mt-1">Select Vehicle</p>
                    </div>
                 \`;
                 container.appendChild(card);
             });

             toggleGarage(true);
         });

         window.toggleGarage = (show) => {
             const drawer = document.getElementById('garage-drawer');
             if(show) drawer.classList.remove('translate-x-full');
             else {
                drawer.classList.add('translate-y-full');
                if(window.Sentinel) window.Sentinel.resetMotorcadeCamera();
             }
         }

         window.selectVehicle = (car) => {
             selectedVehicle = car;
             
             // Switch Views
             document.getElementById('vehicle-options-view').classList.add('hidden');
             document.getElementById('vehicle-detail-view').classList.remove('hidden');
             document.getElementById('vehicle-detail-view').classList.add('flex');
             
             document.getElementById('drawer-title').innerText = "Vehicle Details:";
             document.getElementById('detail-name').innerText = car.name;
             document.getElementById('detail-desc').innerText = car.desc;
             document.getElementById('detail-img-placeholder').innerText = car.img;

             // Update Specs (Internal)
             document.getElementById('spec-armor').innerText = car.specs.armor;
             document.getElementById('spec-payload').innerText = car.specs.payload;
             document.getElementById('spec-speed').innerText = car.specs.speed;
             document.getElementById('spec-occupancy').innerText = car.specs.occ;

             // Reset Specs visibility
             document.getElementById('specs-list').classList.add('hidden');
             document.getElementById('specs-btn-icon').innerText = "[+]";
         }

         window.toggleSpecs = () => {
            const list = document.getElementById('specs-list');
            const icon = document.getElementById('specs-btn-icon');
            if(list.classList.contains('hidden')) {
                list.classList.remove('hidden');
                icon.innerText = "[-]";
            } else {
                list.classList.add('hidden');
                icon.innerText = "[+]";
            }
         }

         window.backToGarage = () => {
             document.getElementById('vehicle-options-view').classList.remove('hidden');
             document.getElementById('vehicle-detail-view').classList.add('hidden');
             document.getElementById('vehicle-detail-view').classList.remove('flex');
             document.getElementById('drawer-title').innerText = "Assign Vehicle:";
         }

         window.deployAsset = () => {
             if(currentSlotId !== null && selectedVehicle && window.Sentinel) {
                 window.Sentinel.spawnVehicle(currentSlotId, selectedVehicle.id);
                 toggleGarage(false);
             }
         }
      `}
      </script>
    </div>
  );
};

const Tooltip = ({ desc }: { desc: string }) => {
  return (
    <span class="relative group/tooltip cursor-help inline-flex items-center gap-1 hover:text-white transition-colors">
      <span class="text-[10px] text-gray-500 group-hover/tooltip:text-white transition-colors border border-gray-600 rounded-full w-3.5 h-3.5 flex items-center justify-center">
        ?
      </span>
      <span class="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 p-3 bg-black border border-white/20 rounded-lg text-[10px] text-gray-200 shadow-xl opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 z-50 pointer-events-none text-center backdrop-blur-md normal-case tracking-normal">
        {desc}
        <span class="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-white/20"></span>
      </span>
    </span>
  );
};

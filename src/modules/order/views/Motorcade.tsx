import { Html } from "@elysiajs/html";

export const Motorcade = () => {
  return (
    <div class="relative h-full w-full pointer-events-none z-50">
      {/* Header */}
      <div class="absolute top-10 left-10 pointer-events-auto flex flex-col gap-8 z-[70]">
        {/* Back Button Integrated */}
        <button
          class="w-fit p-3 rounded-full bg-black/50 border border-white/20 text-white hover:bg-white hover:text-black transition-all backdrop-blur-md group flex items-center gap-2 px-5 pointer-events-auto cursor-pointer"
          hx-get="/step/3"
          hx-target="#ui-layer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 group-hover:-translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span class="text-[10px] font-bold uppercase tracking-[0.2em]">
            Back
          </span>
        </button>

        <div>
          <h2 class="text-4xl text-white font-bold tracking-widest uppercase">
            Deployment Grid
          </h2>
          <p class="text-gray-400 text-sm mt-2">
            Select a holographic slot to assign a vehicle.
          </p>
        </div>

        {/* Camera Reset Button */}
        <button
          onclick="if(window.Sentinel) window.Sentinel.resetMotorcadeCamera()"
          class="w-fit px-4 py-2 bg-white/5 border border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white/10 hover:border-white/30 transition-all flex items-center gap-2 group cursor-pointer pointer-events-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3 h-3 text-sentinel-hud group-hover:rotate-180 transition-transform duration-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          Reset Camera View
        </button>

        <div class="mt-2 flex gap-6 text-xs text-gray-400 uppercase tracking-widest">
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-yellow-500 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
            <span>Principal</span>
            <Tooltip desc="The High-Value Individual (HVI) transport vehicle." />
          </div>
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-gray-500 rounded-full shadow-[0_0_10px_rgba(107,114,128,0.5)]"></div>
            <span>Lead / Escort</span>
            <Tooltip desc="Lead pursuit and tactical clearing units." />
          </div>
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
            <span>CAT</span>
            <Tooltip desc="Counter Assault Team: Rapid response heavy protection." />
          </div>
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
            <span>ECM</span>
            <Tooltip desc="Electronic Countermeasures: Sigint and tech support." />
          </div>
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
            <span>Sweeper</span>
            <Tooltip desc="Advanced scout and route reconnaissance units." />
          </div>
        </div>
      </div>

      {/* Garage Drawer - Right Side Panel */}
      <div
        id="garage-drawer"
        class="fixed top-0 right-0 h-full w-[450px] bg-black/95 border-l border-white/20 transform translate-x-full transition-transform duration-300 pointer-events-auto z-[80] overflow-y-auto will-change-transform"
      >
        <div class="p-8 h-full flex flex-col">
          <div class="flex justify-between items-center mb-8">
            <div>
              <h3 class="text-2xl text-white font-bold uppercase tracking-widest">
                <span class="text-white/40 mr-2">///</span>
                <span id="drawer-title">Assign Vehicle:</span>
              </h3>
              <div
                id="slot-role-title"
                class="text-white/60 text-sm font-bold uppercase mt-1"
              >
                ...
              </div>
            </div>
            <button
              class="text-gray-400 hover:text-white uppercase tracking-widest text-xs border border-white/10 px-3 py-2 rounded hover:bg-white/5 cursor-pointer pointer-events-auto"
              onclick="toggleGarage(false)"
            >
              Close [X]
            </button>
          </div>

          {/* Selection View (Vertical List) */}
          <div
            id="vehicle-options-view"
            class="flex flex-col gap-4 overflow-y-auto pr-2"
          >
            {/* Cards will be injected by JS */}
          </div>

          {/* Detail View (Vertical Layout) */}
          <div id="vehicle-detail-view" class="hidden flex-col h-full">
            <div class="h-48 bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl flex items-center justify-center relative overflow-hidden mb-6 shrink-0">
              <div
                id="detail-img-placeholder"
                class="text-6xl font-black text-white/5 uppercase select-none w-full h-full flex items-center justify-center"
              >
                Asset
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>

            <div class="flex-grow">
              <h4
                id="detail-name"
                class="text-3xl text-white font-bold uppercase tracking-tighter mb-2"
              >
                Vehicle Name
              </h4>
              <p
                id="detail-desc"
                class="text-gray-400 text-sm mb-6 leading-relaxed"
              >
                Detailed description of the tactical capabilities and armor
                specifications for this unit.
              </p>

              {/* Amount Selector (Shown for Sweeper and Principal) */}
              <div
                id="amount-selector-container"
                class="hidden mb-6 bg-white/5 border border-white/10 p-4 rounded-xl"
              >
                <span class="text-[10px] text-gray-500 uppercase tracking-widest block mb-2">
                  Unit Quantity
                </span>
                <div class="flex items-center gap-4">
                  <button
                    onclick="changeAmount(-1)"
                    class="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer pointer-events-auto"
                  >
                    -
                  </button>
                  <span
                    id="vehicle-amount"
                    class="text-2xl font-bold text-white w-8 text-center"
                  >
                    1
                  </span>
                  <button
                    onclick="changeAmount(1)"
                    class="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer pointer-events-auto"
                  >
                    +
                  </button>
                  <span
                    class="text-[10px] text-gray-400 italic ml-2"
                    id="formation-desc"
                  >
                    Single Unit
                  </span>
                </div>
              </div>

              {/* Specs Reveal Button */}
              <button
                id="specs-toggle-btn"
                onclick="toggleSpecs()"
                class="text-[10px] text-white font-bold uppercase tracking-[0.2em] flex items-center gap-2 hover:text-white transition-colors mb-4 cursor-pointer pointer-events-auto"
              >
                <span id="specs-btn-icon">[+]</span> View Technical
                Specifications
              </button>

              {/* Specs List (Hidden by default) */}
              <div
                id="specs-list"
                class="hidden space-y-4 mb-8 border-t border-white/5 pt-4"
              >
                <div class="grid grid-cols-2 gap-4">
                  <div class="border-l-2 border-white/30 pl-4 py-1">
                    <span class="block text-[10px] text-gray-500 uppercase tracking-widest">
                      Armor Class
                    </span>
                    <span
                      id="spec-armor"
                      class="text-white font-bold uppercase text-sm"
                    >
                      --
                    </span>
                  </div>
                  <div class="border-l-2 border-white/30 pl-4 py-1">
                    <span class="block text-[10px] text-gray-500 uppercase tracking-widest">
                      Protection Grade
                    </span>
                    <span
                      id="spec-protection"
                      class="text-white font-bold uppercase text-sm"
                    >
                      --
                    </span>
                  </div>
                  <div class="border-l-2 border-white/30 pl-4 py-1">
                    <span class="block text-[10px] text-gray-500 uppercase tracking-widest">
                      Horsepower
                    </span>
                    <span
                      id="spec-hp"
                      class="text-white font-bold uppercase text-sm"
                    >
                      --
                    </span>
                  </div>
                  <div class="border-l-2 border-white/30 pl-4 py-1">
                    <span class="block text-[10px] text-gray-500 uppercase tracking-widest">
                      Torque
                    </span>
                    <span
                      id="spec-torque"
                      class="text-white font-bold uppercase text-sm"
                    >
                      --
                    </span>
                  </div>
                  <div class="border-l-2 border-white/30 pl-4 py-1">
                    <span class="block text-[10px] text-gray-500 uppercase tracking-widest">
                      Max Speed
                    </span>
                    <span
                      id="spec-speed"
                      class="text-white font-bold uppercase text-sm"
                    >
                      --
                    </span>
                  </div>
                  <div class="border-l-2 border-white/30 pl-4 py-1">
                    <span class="block text-[10px] text-gray-500 uppercase tracking-widest">
                      Occupancy
                    </span>
                    <span
                      id="spec-occupancy"
                      class="text-white font-bold uppercase text-sm"
                    >
                      --
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="pt-6 border-t border-white/10 mt-auto flex flex-col gap-3 shrink-0">
              <button
                onclick="deployAsset()"
                class="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors cursor-pointer pointer-events-auto"
              >
                Deploy Vehicle
              </button>
              <button
                onclick="backToGarage()"
                class="w-full py-3 border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-colors cursor-pointer pointer-events-auto"
              >
                [ Back to Selection ]
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Persistent Proceed Button - Bottom Right */}
      <div
        id="proceed-btn-container"
        class="fixed bottom-12 right-12 pointer-events-none z-[40] opacity-0 translate-y-10 transition-all duration-700"
      >
        <button
          id="proceed-btn"
          class="px-10 py-5 bg-white text-black font-bold uppercase tracking-[0.3em] hover:bg-gray-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] flex items-center gap-6 group active:scale-[0.98] pointer-events-none cursor-pointer"
          hx-get="/step/5"
          hx-target="#ui-layer"
        >
          <span>Proceed to Rendezvous</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>

      {/* SCRIPT */}
      <script>
        {`
                       (function() {
                       let currentSlotId = null;
                       let currentRole = null;
                       let selectedVehicle = null;
                       let vehicleAmount = 1;
              
                       // Wait for Sentinel to be ready
                       const initInterval = setInterval(() => {
                           // Abort if Motorcade was swapped out by HTMX
                           if (!document.getElementById('garage-drawer')) { clearInterval(initInterval); return; }
                           if (window.Sentinel) {
                               clearInterval(initInterval);
                               const tier = (window.MissionState && window.MissionState.tierName) ? window.MissionState.tierName : 'Praetorian';
                               window.Sentinel.initMotorcadeMode(tier);
                           }
                       }, 100);
              
                       // DATABASE: Expanded Vehicle Constraints
                       const VEHICLE_DB = {
                           'PRINCIPAL': [
                               { id: 'Escalade', name: 'Cadillac Escalade', desc: 'Class-7 Armored Transport. Features run-flat tires, reinforced chassis, and explosive protection.', icon: '/public/assets/images/Escalade_Icon.jpeg', specs: { armor: 'B7 (Heavy)', protection: 'Explosive Resistant', hp: '420 HP', torque: '460 LB-FT', speed: '130 MPH', occ: '2+2' } },
                               { id: 'none', name: 'None', desc: 'No vehicle assigned to this slot.', icon: null, specs: { armor: '--', protection: '--', hp: '--', torque: '--', speed: '--', occ: '--' } }
                           ],
                           'LEAD': [
                               { id: 'F150', name: 'Ford F-150', desc: 'Heavy Pursuit & Ramming Vehicle. Equipped with bull bars and high-torque engine for roadblock clearance.', icon: '/public/assets/images/F150_Icon.jpeg', specs: { armor: 'B6 (Light)', protection: 'Ballistic (Level 3)', hp: '450 HP', torque: '510 LB-FT', speed: '110 MPH', occ: '4' } },
                               { id: 'none', name: 'None', desc: 'No vehicle assigned to this slot.', icon: null, specs: { armor: '--', protection: '--', hp: '--', torque: '--', speed: '--', occ: '--' } }
                           ],
                           'REAR': [
                              { id: 'Suburban', name: 'Chevy Suburban', desc: 'Support & Medical Evacuation. Carries trauma kits and secondary communication arrays.', icon: '/public/assets/images/Suburban_Icon.jpeg', specs: { armor: 'B6', protection: 'Ballistic (Level 4)', hp: '355 HP', torque: '383 LB-FT', speed: '120 MPH', occ: '6' } },
                              { id: 'F150', name: 'Ford F-150 Support', desc: 'Tactical Support Vehicle. Cargo-optimized for logistics and gear.', icon: '/public/assets/images/F150_Icon.jpeg', specs: { armor: 'B5', protection: 'Partial Ballistic', hp: '400 HP', torque: '500 LB-FT', speed: '105 MPH', occ: '2' } },
                              { id: 'none', name: 'None', desc: 'No vehicle assigned to this slot.', icon: null, specs: { armor: '--', protection: '--', hp: '--', torque: '--', speed: '--', occ: '--' } }
                           ],
                           'SWEEPER': [
                               { id: 'BMW', name: 'BMW S1000RR', desc: 'Rapid Advance Scout. Used for traffic clearing and early threat detection in dense urban environments.', icon: '/public/assets/images/S1000RR_Icon.jpeg', specs: { armor: 'None', protection: 'None', hp: '205 HP', torque: '83 LB-FT', speed: '185 MPH', occ: '1' } },
                               { id: 'Electra', name: 'Electra Glide Tactical', desc: 'Heavy Escort Cruiser. Optimized for motorcade stability, providing a high-visibility tactical presence.', icon: '/public/assets/images/ElectraGlide_Icon.jpeg', specs: { armor: 'None', protection: 'None', hp: '105 HP', torque: '122 LB-FT', speed: '115 MPH', occ: '1' } },
                               { id: 'none', name: 'None', desc: 'No vehicle assigned to this slot.', icon: null, specs: { armor: '--', protection: '--', hp: '--', torque: '--', speed: '--', occ: '--' } }
                           ],
                           'CAT': [
                               { id: 'G63', name: 'Mercedes G63 CAT', desc: 'Counter Assault Team Unit. Integrated weapons storage and rapid egress points for tactical operators.', icon: '/public/assets/images/G63AMG_Icon.jpeg', specs: { armor: 'B6+', protection: 'High Ballistic (Level 4+)', hp: '577 HP', torque: '627 LB-FT', speed: '145 MPH', occ: '5' } },
                               { id: 'none', name: 'None', desc: 'No vehicle assigned to this slot.', icon: null, specs: { armor: '--', protection: '--', hp: '--', torque: '--', speed: '--', occ: '--' } }
                           ],
                           'ECM': [
                               { id: 'Suburban', name: 'Chevy Suburban ECM', desc: 'Electronic Countermeasures. Signal jamming suite for IED neutralization and secure comms uplink.', icon: '/public/assets/images/Suburban_Icon.jpeg', specs: { armor: 'B6', protection: 'Ballistic', hp: '355 HP', torque: '383 LB-FT', speed: '120 MPH', occ: '2' } },
                               { id: 'none', name: 'None', desc: 'No vehicle assigned to this slot.', icon: null, specs: { armor: '--', protection: '--', hp: '--', torque: '--', speed: '--', occ: '--' } }
                           ]
                       };
              
                       // EVENT LISTENER — Remove previous handler to prevent duplicates on HTMX re-entry
                       if (window._garageOpenHandler) {
                           document.body.removeEventListener('sentinel-garage-open', window._garageOpenHandler);
                       }
                       window._garageOpenHandler = (e) => {
                           const { slotId, role } = e.detail;
                           currentSlotId = slotId;
                           currentRole = role;
                           vehicleAmount = 1; // Reset
                           
                           // Update Title
                           document.getElementById('slot-role-title').innerText = role;
                           backToGarage(); // Ensure we start at selection view
              
                           // Populate Options
                           const container = document.getElementById('vehicle-options-view');
                           container.innerHTML = ''; // Clear
              
                           const options = VEHICLE_DB[role] || [];
                           
                           options.forEach(car => {
                               const card = document.createElement('div');
                               card.className = "w-full bg-white/5 border border-white/10 p-4 rounded-xl cursor-pointer hover:bg-white/10 hover:border-white/40 transition-all group flex items-center gap-4 pointer-events-auto";
                               card.onclick = () => selectVehicle(car);
                               
                               const iconHtml = car.icon 
                                 ? \`<img src="\${car.icon}" class="w-20 h-20 object-contain rounded-lg border border-white/10 group-hover:border-white/30 transition-all pointer-events-none" />\`
                                 : \`<div class="w-20 h-20 bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center text-gray-500 group-hover:text-white transition-colors shrink-0 text-[10px] uppercase font-bold text-center pointer-events-none">Empty</div>\`;

                               card.innerHTML = \`
                                  \${iconHtml}
                                  <div class="pointer-events-none">
                                      <h4 class="text-white font-bold tracking-wider text-sm">\${car.name}</h4>
                                      <p class="text-[10px] text-white/40 uppercase mt-1">Select Vehicle</p>
                                  </div>
                               \`;
                               container.appendChild(card);
                           });
              
                           toggleGarage(true);
                       };
                       document.body.addEventListener('sentinel-garage-open', window._garageOpenHandler);
              
                       window.toggleGarage = (show) => {
                           const drawer = document.getElementById('garage-drawer');
                           const proceedBtn = document.getElementById('proceed-btn-container');
                           
                           if(show) {
                               drawer.classList.remove('translate-x-full');
                               // Hide proceed button when drawer is open to prevent accidental clicks
                               if(proceedBtn) proceedBtn.classList.add('invisible');
                           } else {
                              drawer.classList.add('translate-x-full');
                              if(window.Sentinel) window.Sentinel.resetMotorcadeCamera();
                              // Show proceed button when drawer is closed
                              if(proceedBtn) proceedBtn.classList.remove('invisible');
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
                           
                           const placeholder = document.getElementById('detail-img-placeholder');
                           if (car.icon) {
                               placeholder.innerHTML = \`<img src="\${car.icon}" class="w-full h-full object-contain" />\`;
                           } else {
                               placeholder.innerHTML = 'Empty';
                               placeholder.className = "text-6xl font-black text-white/5 uppercase select-none w-full h-full flex items-center justify-center";
                           }
              
                           // Handle Amount Selector Visibility
                           const amountContainer = document.getElementById('amount-selector-container');
                           if (car.id !== 'none' && (currentRole === 'SWEEPER' || currentRole === 'PRINCIPAL')) {
                               amountContainer.classList.remove('hidden');
                           } else {
                               amountContainer.classList.add('hidden');
                           }
                           updateAmountUI();
              
                           // Update Specs (Internal)
                           document.getElementById('spec-armor').innerText = car.specs.armor;
                           document.getElementById('spec-protection').innerText = car.specs.protection;
                           document.getElementById('spec-hp').innerText = car.specs.hp;
                           document.getElementById('spec-torque').innerText = car.specs.torque;
                           document.getElementById('spec-speed').innerText = car.specs.speed;
                           document.getElementById('spec-occupancy').innerText = car.specs.occ;
              
                           // Reset Specs visibility
                           document.getElementById('specs-list').classList.add('hidden');
                           document.getElementById('specs-btn-icon').innerText = "[+]";
                       }
         window.changeAmount = (delta) => {
             const newAmount = vehicleAmount + delta;
             if (newAmount >= 1 && newAmount <= 3) {
                 vehicleAmount = newAmount;
                 updateAmountUI();
             }
         }

         window.updateAmountUI = () => {
             const el = document.getElementById('vehicle-amount');
             const desc = document.getElementById('formation-desc');
             if (el) el.innerText = vehicleAmount;
             if (desc) {
                 if (vehicleAmount === 1) desc.innerText = "Single Unit";
                 else if (vehicleAmount === 2) desc.innerText = "Side-by-Side";
                 else if (vehicleAmount === 3) desc.innerText = "Triangular Formation";
             }
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

         const updateProceedButton = () => {
             const container = document.getElementById('proceed-btn-container');
             const btn = document.getElementById('proceed-btn');
             if (!container || !btn) return;

             // Only show if Principal is assigned (id is NOT 'none')
             const isPrincipalAssigned = window.MissionState && window.MissionState.principalAssigned;
             
             if (isPrincipalAssigned) {
                 container.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
                 container.classList.add('opacity-100', 'translate-y-0');
                 btn.classList.remove('pointer-events-none');
                 btn.classList.add('pointer-events-auto');
             } else {
                 container.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
                 container.classList.remove('opacity-100', 'translate-y-0');
                 btn.classList.remove('pointer-events-auto');
                 btn.classList.add('pointer-events-none');
             }
         }

         window.deployAsset = () => {
             if(currentSlotId !== null && selectedVehicle && window.Sentinel) {
                 window.Sentinel.spawnVehicle(currentSlotId, selectedVehicle.id, vehicleAmount);
                 
                 // Track Principal assignment in MissionState
                 if (currentRole === 'PRINCIPAL') {
                    if (!window.MissionState) window.MissionState = {};
                    window.MissionState.principalAssigned = (selectedVehicle.id !== 'none');
                    updateProceedButton();
                 }

                 toggleGarage(false);
             }
         }

         // Initial Check
         setTimeout(updateProceedButton, 500);
                       })();
      `}
      </script>
    </div>
  );
};

const Tooltip = ({ desc }: { desc: string }) => {
  return (
    <span class="relative group/tooltip cursor-help inline-flex items-center gap-1 hover:text-white transition-colors pointer-events-auto">
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

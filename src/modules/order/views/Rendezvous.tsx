import { Html } from "@elysiajs/html";

export const Rendezvous = () => {
  return (
    <div class="relative h-screen w-screen overflow-hidden pointer-events-none select-none">
      {/* Back Button */}
      <button
        class="absolute top-10 left-10 z-50 p-3 rounded-full bg-black/50 border border-white/20 text-white hover:bg-white hover:text-black transition-all backdrop-blur-md group flex items-center gap-2 px-5 pointer-events-auto"
        hx-get="/step/4"
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

      {/* Leaflet CSS */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      />
      {/* Leaflet JS */}
      <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

      {/* Map Container */}
      <div
        id="map"
        class="absolute inset-0 z-0 pointer-events-auto touch-none"
      ></div>

      {/* Tactical Overlay (Right Panel) */}
      <div class="absolute top-0 right-0 h-full w-[400px] bg-black/80 backdrop-blur-xl border-l border-white/20 p-8 flex flex-col gap-8 z-10 pointer-events-auto shadow-2xl select-text overflow-y-auto max-h-screen custom-scrollbar">
        <div class="flex flex-col gap-2 select-none">
          <h2 class="text-3xl text-white font-bold tracking-widest uppercase italic">
            Extraction Protocol
          </h2>
          <div class="h-0.5 w-full bg-gradient-to-r from-white/40 to-transparent"></div>
          <p class="text-[10px] text-gray-500 uppercase tracking-widest mt-1">
            Specify rendezvous coordinates and temporal window.
          </p>
        </div>

        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <label class="text-[10px] text-gray-400 uppercase tracking-widest font-bold flex justify-between select-none">
              Search Location
              <span class="text-white/20 font-normal">Optional</span>
            </label>
            <div class="relative group">
              <input
                id="location-search"
                type="text"
                placeholder="SEARCHING GLOBAL GRID..."
                class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-white/10 focus:outline-none focus:border-white/40 transition-all font-mono text-sm pr-12"
              />
              <div class="absolute right-4 top-1/2 -translate-y-1/2 opacity-20 group-focus-within:opacity-100 transition-opacity">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <button
            onclick="window.toggleImportModal(true)"
            class="w-full py-3 bg-white/5 border border-white/10 text-white/60 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white/10 hover:text-white transition-all flex items-center justify-center gap-2 group select-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-3 h-3 group-hover:scale-110 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
            Import Vector from Map Link
          </button>

          <div class="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col gap-4 relative overflow-hidden group">
            <div class="absolute top-0 right-0 p-2">
              <button
                onclick="window.locateMe()"
                title="Locate Me"
                class="p-2 hover:bg-white/10 rounded-full transition-colors group/locate pointer-events-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 text-white/40 group-hover/locate:text-white transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 2v2m0 16v2m10-10h-2M4 12H2"
                  />
                </svg>
              </button>
            </div>
            <label class="text-[10px] text-gray-400 uppercase tracking-widest font-bold select-none">
              Current Vector
            </label>
            <div
              id="coords-display"
              class="text-white font-mono text-xl tracking-tighter"
            >
              LAT: 00.0000 | LNG: 00.0000
            </div>
          </div>

          <div class="flex flex-col gap-2 pointer-events-auto">
            <label class="text-[10px] text-gray-400 uppercase tracking-widest font-bold select-none">
              Extraction Time (UTC)
            </label>
            <div
              class="relative cursor-pointer group/time"
              onclick="document.getElementById('extraction-time').showPicker()"
            >
              <input
                id="extraction-time"
                type="datetime-local"
                class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-white/40 transition-all [color-scheme:dark] font-mono pointer-events-auto relative z-20 cursor-pointer group-hover/time:bg-white/10"
                onchange="if(window.MissionState) window.MissionState.time = this.value"
              />
            </div>
          </div>
        </div>

        <div class="mt-auto pt-8 flex flex-col gap-4 select-none">
          <div class="bg-white/5 border border-white/10 p-4 rounded-lg flex items-start gap-4">
            <div class="w-1 h-12 bg-white/40 rounded-full"></div>
            <p class="text-[10px] text-gray-400 uppercase leading-relaxed tracking-wider">
              Note: Extraction units will be on high alert 15 minutes prior to
              rendezvous time. Maintain radio silence.
            </p>
          </div>

          <button
            class="w-full py-5 bg-white text-black font-bold uppercase tracking-[0.2em] hover:bg-gray-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-[0.98]"
            hx-get="/step/6"
            hx-target="#ui-layer"
          >
            Confirm Rendezvous
          </button>
        </div>
      </div>

      {/* Import Link Modal */}
      <div
        id="import-modal"
        class="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none opacity-0 transition-all duration-300 hidden"
      >
        <div
          class="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
          onclick="window.toggleImportModal(false)"
        ></div>
        <div class="relative w-[500px] bg-[#0d0d0d] border border-white/10 p-8 rounded-2xl shadow-2xl pointer-events-auto transform scale-95 transition-transform duration-300">
          <div class="flex justify-between items-start mb-6 select-none">
            <div>
              <h3 class="text-xl text-white font-bold uppercase tracking-widest">
                Import Tactical Vector
              </h3>
              <p class="text-[10px] text-gray-500 uppercase mt-1">
                Paste a Google Maps URL or direct coordinates.
              </p>
            </div>
            <button
              onclick="window.toggleImportModal(false)"
              class="text-gray-500 hover:text-white transition-colors"
            >
              [X]
            </button>
          </div>

          <div class="space-y-6">
            <div class="flex flex-col gap-2">
              <label class="text-[10px] text-gray-400 uppercase tracking-widest font-bold select-none">
                Source URL / Data
              </label>
              <textarea
                id="import-link-input"
                rows="3"
                placeholder="https://www.google.com/maps/..."
                class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/10 focus:outline-none focus:border-white/40 transition-all font-mono text-xs resize-none"
              ></textarea>
              <div
                id="import-error"
                class="hidden text-[10px] text-red-500 uppercase font-bold select-none"
              >
                Error: Unable to decrypt coordinates from provided link.
              </div>
              <div class="text-[9px] text-gray-600 uppercase leading-relaxed italic select-none">
                Note: Shortened links (maps.app.goo.gl) are encrypted. Please
                use the full URL from your browser address bar for direct
                extraction.
              </div>
            </div>

            <button
              onclick="window.processImportLink()"
              class="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors select-none"
            >
              Decrypt & Sync Vector
            </button>
          </div>
        </div>
      </div>

      {/* Map Initialization Script */}
      <script>
        {`
            (function() {
                let map;
                let marker;

                const updateLocation = (lat, lng, fly = false) => {
                    const latNum = parseFloat(lat);
                    const lngNum = parseFloat(lng);
                    
                    if (isNaN(latNum) || isNaN(lngNum)) return;

                    const customIcon = L.divIcon({
                        className: 'custom-div-icon',
                        html: "<div style='background-color: white; width: 12px; height: 12px; border: 2px solid black; border-radius: 50%; box-shadow: 0 0 10px white;'></div>",
                        iconSize: [12, 12],
                        iconAnchor: [6, 6]
                    });

                    if (marker) {
                        marker.setLatLng([latNum, lngNum]);
                    } else {
                        marker = L.marker([latNum, lngNum], { icon: customIcon }).addTo(map);
                    }

                    if (fly) {
                        map.flyTo([latNum, lngNum], 16, {
                            duration: 1.5
                        });
                    }

                    if (!window.MissionState) window.MissionState = {};
                    window.MissionState.location = { lat: latNum, lng: lngNum };

                    const display = document.getElementById('coords-display');
                    if (display) {
                        display.innerText = "LAT: " + latNum.toFixed(4) + " | LNG: " + lngNum.toFixed(4);
                    }
                };

                const initMap = () => {
                    if (typeof L === 'undefined') {
                        setTimeout(initMap, 100);
                        return;
                    }

                    map = L.map('map', {
                        center: [51.505, -0.09],
                        zoom: 13,
                        zoomControl: false,
                        attributionControl: false
                    });

                    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
                        maxZoom: 20
                    }).addTo(map);

                    map.on('click', (e) => {
                        updateLocation(e.latlng.lat, e.latlng.lng);
                    });

                    // Search Input (Pure Geocoding)
                    const searchInput = document.getElementById('location-search');
                    if (searchInput) {
                        searchInput.addEventListener('keydown', async (e) => {
                            if (e.key === 'Enter') {
                                const query = searchInput.value.trim();
                                if (!query) return;

                                searchInput.classList.add('border-white/40', 'bg-white/10');
                                try {
                                    const response = await fetch("https://nominatim.openstreetmap.org/search?format=json&q=" + encodeURIComponent(query));
                                    const data = await response.json();
                                    if (data && data.length > 0) {
                                        updateLocation(data[0].lat, data[0].lon, true);
                                        searchInput.classList.add('border-green-500/50');
                                    }
                                } catch (err) {
                                    console.error("Geocoding failed:", err);
                                } finally {
                                    setTimeout(() => {
                                        searchInput.classList.remove('border-white/40', 'bg-white/10', 'border-green-500/50');
                                    }, 1500);
                                }
                            }
                        });
                    }

                    // Import Modal Logic
                    window.toggleImportModal = (show) => {
                        const modal = document.getElementById('import-modal');
                        if (show) {
                            modal.classList.remove('hidden');
                            setTimeout(() => {
                                modal.classList.remove('opacity-0', 'pointer-events-none');
                                modal.classList.add('opacity-100', 'pointer-events-auto');
                            }, 10);
                            document.getElementById('import-link-input').focus();
                        } else {
                            modal.classList.add('opacity-0', 'pointer-events-none');
                            modal.classList.remove('opacity-100', 'pointer-events-auto');
                            setTimeout(() => modal.classList.add('hidden'), 300);
                        }
                    };

                    window.processImportLink = () => {
                        const input = document.getElementById('import-link-input');
                        const error = document.getElementById('import-error');
                        const link = input.value.trim();
                        
                        error.classList.add('hidden');

                        if (!link) return;

                        // 1. Try !3d / !4d (Place coordinates - Most accurate)
                        const bangMatch = link.match(/!3d(-?\\d+\\.\\d+)!4d(-?\\d+\\.\\d+)/);
                        if (bangMatch) {
                            updateLocation(bangMatch[1], bangMatch[2], true);
                            window.toggleImportModal(false);
                            input.value = '';
                            return;
                        }

                        // 2. Try @lat,lng (View coordinates)
                        const atMatch = link.match(/@(-?\\d+\\.\\d+),(-?\\d+\\.\\d+)/);
                        if (atMatch) {
                            updateLocation(atMatch[1], atMatch[2], true);
                            window.toggleImportModal(false);
                            input.value = '';
                            return;
                        }

                        // 3. Try raw lat,lng
                        const rawMatch = link.match(/^(-?\\d+\\.\\d+)\\s*,\\s*(-?\\d+\\.\\d+)$/);
                        if (rawMatch) {
                            updateLocation(rawMatch[1], rawMatch[2], true);
                            window.toggleImportModal(false);
                            input.value = '';
                            return;
                        }

                        // 4. Detect shortened URL warning
                        if (link.includes('maps.app.goo.gl')) {
                            error.innerText = "ERROR: ENCRYPTED SHORT-LINK DETECTED. PLEASE PROVIDE FULL BROWSER URL.";
                            error.classList.remove('hidden');
                            return;
                        }

                        error.innerText = "ERROR: NO COORDINATE SIGNATURE FOUND IN DATA.";
                        error.classList.remove('hidden');
                    };

                    // Locate Me Logic
                    window.locateMe = () => {
                        if (navigator.geolocation) {
                            navigator.geolocation.getCurrentPosition((position) => {
                                updateLocation(position.coords.latitude, position.coords.longitude, true);
                            }, (err) => {
                                console.error("Geolocation denied or failed:", err);
                                alert("Unable to access location. Please check your permissions.");
                            });
                        } else {
                            alert("Geolocation is not supported by your browser.");
                        }
                    };

                    document.body.dispatchEvent(new CustomEvent('sentinel-bg-change', { detail: { theme: 'black' } }));
                };

                initMap();
            })();
        `}
      </script>

      <style>
        {`
            .leaflet-container {
                background: #0a0a0a;
                cursor: crosshair !important;
            }
            .custom-div-icon {
                background: transparent;
                border: none;
            }
            input[type="datetime-local"]::-webkit-calendar-picker-indicator {
                filter: brightness(0) invert(1);
                cursor: pointer;
            }
            .leaflet-grab {
                cursor: crosshair !important;
            }
            .leaflet-dragging .leaflet-grab {
                cursor: move !important;
            }
            .custom-scrollbar::-webkit-scrollbar {
                width: 4px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
                background: rgba(255, 255, 255, 0.05);
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
                background: rgba(255, 255, 255, 0.2);
                border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: rgba(255, 255, 255, 0.4);
            }
        `}
      </style>
    </div>
  );
};

// Entry point for the admin-only client bundle. Built to
// src/public/js/admin.js and loaded only on /admin pages that need it
// (currently the vehicle form for GLB thumbnail rendering; Step 8 will
// add the formation slot editor here too).
//
// Build command (until package.json gets non-watch scripts in Phase 3):
//   bun build ./src/client/admin/index.ts --outfile ./src/public/js/admin.js

import { generateVehicleThumbnail } from "./VehicleThumbnail";

declare global {
  interface Window {
    SentinelAdmin?: {
      generateVehicleThumbnail: (file: File) => Promise<Blob>;
    };
  }
}

window.SentinelAdmin = {
  generateVehicleThumbnail,
};

console.log("Sentinel Admin: client bundle ready");

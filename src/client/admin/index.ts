// Entry point for the admin-only client bundle. Built to
// src/public/js/admin.js and loaded by admin pages that need interactivity.
//
// Currently loaded by:
//   • /admin/formations/:id  — SlotEditor (drag/keyboard/popover/sidebar)
//
// VehicleThumbnail is kept exported for future use (slot-editor preview, or
// re-enabling auto-thumb later); it self-attaches nothing.
//
// Build command (until package.json gets non-watch scripts in Phase 3):
//   bun build ./src/client/admin/index.ts --outfile ./src/public/js/admin.js

import { generateVehicleThumbnail } from "./VehicleThumbnail";
import { initSlotEditor } from "./SlotEditor";

declare global {
  interface Window {
    SentinelAdmin?: {
      generateVehicleThumbnail: (file: File) => Promise<Blob>;
      initSlotEditor: () => void;
    };
  }
}

window.SentinelAdmin = {
  generateVehicleThumbnail,
  initSlotEditor,
};

// SlotEditor self-inits via its own DOMContentLoaded listener — see
// SlotEditor.ts. Importing it here is enough to register that listener.

console.log("Sentinel Admin: client bundle ready");

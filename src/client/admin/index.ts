// Entry point for the admin-only client bundle. Built to
// src/public/js/admin.js and loaded by admin pages that need interactivity.
//
// Currently loaded by:
//   • /admin/formations/:id  — SlotEditor (drag/keyboard/popover/sidebar)
//
// SlotEditor self-inits via its own DOMContentLoaded listener — importing it
// here is enough to register that listener.
//
// Build command (until package.json gets non-watch scripts in Phase 3):
//   bun build ./src/client/admin/index.ts --outfile ./src/public/js/admin.js

import { initSlotEditor } from "./SlotEditor";

declare global {
  interface Window {
    SentinelAdmin?: {
      initSlotEditor: () => void;
    };
  }
}

window.SentinelAdmin = {
  initSlotEditor,
};

console.log("Sentinel Admin: client bundle ready");

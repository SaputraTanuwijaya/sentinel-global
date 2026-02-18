# Project: Sentinel Global

A secure transport visualization app using **Bun**, **ElysiaJS**, **HTMX**, and **Three.js**.

## Architecture

1.  **Backend:** `src/index.tsx` (Elysia) serves HTML fragments.
2.  **Frontend:** `src/views/layout.tsx` holds the persistent `window.MissionState` and `#canvas-container`.
3.  **3D Engine:** `src/client/SceneManager.ts` is a Singleton class attached to `window.Sentinel`. It manages the Three.js scene.
4.  **UI Views:** Located in `src/modules/order/views/`. They trigger 3D changes via `window.Sentinel.methodName()`.

## Current Bug: "The Motorcade Clash"

When navigating from **Step 3 (DressCode)** to **Step 4 (Motorcade)**:

1.  The Video Background from Step 3 persists (it is not being removed).
2.  The "Holographic Slots" for Step 4 do not appear or are hidden behind the video.
3.  The UI Drawer in `Motorcade.tsx` may be initializing before `window.Sentinel` is ready.

## Required Fixes (Task List)

Please perform the following refactors:

### 1. Hard Cleanup in `SceneManager.ts`

Modify `initMotorcadeMode()` to execute a "Nuclear Cleanup" before loading the grid:

- Set `this.bgMesh.visible = false` AND `this.scene.remove(this.bgMesh)` to be sure.
- Pause `this.videoElement`.
- Iterate through `this.principalInstances` and set visible = false.
- Set `this.formationGroup.visible = false`.
- **Crucial:** Ensure the Camera position is set to `(15, 12, 15)` _after_ the cleanup.

### 2. State Safety in `Motorcade.tsx`

Update the `<script>` tag in `Motorcade.tsx`:

- Add a `setInterval` check to wait for `window.Sentinel` to exist before calling `initMotorcadeMode`.
- If `window.MissionState` is missing, default to a 'Praetorian' tier for debugging.

### 3. Z-Index Fix

Ensure `Motorcade.tsx` UI container has `z-index: 50` or higher so it sits _above_ the Three.js canvas.

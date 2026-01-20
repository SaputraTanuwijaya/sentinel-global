# Sentinel Global

A "Bodyguard Ordering" simulation featuring high-performance 3D integration.

## Tech Stack (BETH)

- **Runtime:** Bun
- **Server:** ElysiaJS
- **Database:** Turso (LibSQL)
- **Frontend:** HTMX + Tailwind CSS (v4)
- **3D Engine:** Three.js
- **Maps:** Leaflet.js

## Architecture: The Persistent Layout

This project uses a "App Shell" pattern (`src/views/layout.tsx`).

- **Canvas Container:** A fixed `div` (#canvas-container) holds the Three.js scene. It is _never_ swapped by HTMX.
- **UI Layer:** A relative `main` (#ui-layer) holds the HTML content. HTMX swaps content here using `hx-swap="innerHTML"`.
- **Event Bridge:** The Frontend talks to the 3D scene via `window.CustomEvent`.

## Project Structure

- `src/core/` - Shared utilities (SceneManager, DB Config).
- `src/modules/` - Feature-based folders (Order, Mission, Auth).
- `src/views/` - Shared layouts and components.
- `src/public/` - Static assets (GLB models, Textures).

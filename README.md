# Sentinel Global

A "Bodyguard Ordering" simulation featuring high-performance 3D integration.

## 1. Tech Stack (BETH + Three.js)
* **Runtime:** Bun
* **Server:** ElysiaJS (`@elysiajs/html`)
* **Database:** Turso (LibSQL)
* **Frontend:** HTMX + Tailwind CSS (v4)
* **3D Engine:** Three.js (Managed via `SceneManager`)
* **Maps:** Leaflet.js

## 2. Architecture: The Persistent Layout
To achieve the "Wow" factor, we use a Hybrid Rendering approach:
* **The "App Shell" (`src/views/layout.tsx`):**
  * Contains a fixed `#canvas-container` that holds the Three.js scene. This element *never* reloads.
  * Contains a relative `#ui-layer` for HTML content.
* **Navigation:** HTMX swaps the inner HTML of `#ui-layer`, leaving the 3D background intact.
* **Bridge:** The Frontend talks to the 3D scene via `window.CustomEvent` or direct access to `window.Sentinel`.

## 3. Project Structure
```text
sentinel-global/
├── src/
│   ├── client/              # Browser-side TypeScript (3D Logic)
│   │   ├── SceneManager.ts  # Singleton handling Three.js scene/camera/renderer
│   │   └── index.ts         # Entry point (bundles to public/js/index.js)
│   ├── core/                # Shared utilities & Config
│   ├── modules/             # Feature logic (Order, Mission, etc.)
│   ├── public/              # Static Assets (Served at /public)
│   │   ├── assets/
│   │   │   ├── images/      # Branding (logo.png)
│   │   │   └── models/      # GLB Files
│   │   ├── js/              # Generated client bundles
│   │   └── styles.css       # Generated Tailwind v4 CSS
│   ├── views/               # JSX Views & Layouts
│   └── index.tsx            # Main Server Entry Point
├── input.css                # Tailwind v4 Configuration
├── package.json             # Scripts: dev, css, build:client
└── tsconfig.json            # configured for manual JSX (Classic)
```

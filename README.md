# Sentinel Global

A high-performance "Bodyguard Ordering" simulation featuring seamless 3D integration and cinematic UI.

## 1. Tech Stack (BETH)

- **Runtime:** [Bun](https://bun.sh) - Ultra-fast JavaScript runtime.
- **Server:** [ElysiaJS](https://elysiajs.com) - High-performance framework utilizing JSX for server-side rendering.
- **Frontend:** [HTMX](https://htmx.org) + [Tailwind CSS v4](https://tailwindcss.com).
- **3D Engine:** [Three.js](https://threejs.org).
- **Asset Pipeline:** DRACO compressed GLB models.

## 2. Architecture: The Persistent Layout

To ensure the web runs fast, a Hybrid Rendering approach is used:

- **The "App Shell" (`src/views/layout.tsx`):**
  - Contains a fixed `#canvas-container` that holds the Three.js scene. This element _never_ reloads.
  - Contains a relative `#ui-layer` for HTML content.
- **Navigation:** HTMX swaps the inner HTML of `#ui-layer`, leaving the 3D background intact.
- **Bridge:** The Frontend talks to the 3D scene via `window.CustomEvent` or direct access to `window.Sentinel`.
- **Modular Monolith:** Pattern to ensure scalability without the complexity of microservices.

## 3. Project Structure

```text
sentinel-global/
├── src/
│   ├── client/              # Browser-side TypeScript (3D Logic)
│   │   ├── SceneManager.ts  # Singleton handling Three.js scene/camera/renderer
│   │   └── index.ts         # Entry point (bundles to public/js/index.js)
│   ├── modules/             # Feature logic
│   │   └── order/
│   │       └── views/       # Step-by-step wizard components
│   ├── views/               # Shared Layouts
│   └── index.tsx            # Main Server Entry Point (Routes)
├── Optimization_Plan.md     # Technical roadmap for performance
├── package.json             # Scripts: dev, css, build:client
└── tsconfig.json            # configured for manual JSX (Classic)
```

## 4. User Flow (Mission Builder)

The application uses a "Single Page Wizard" feel without full reloads:

1.  **Mission Profile:** Select number of Principals (VIPs) in 3D phalanx.
2.  **Security Tier:** Select capability level (Vanguard, Sentinel, Praetorian).
3.  **Visuals:** Select attire (Dress Code) with real-time video preview.
4.  **Motorcade:** _[Done]_ 3D Vehicle Formation Builder (Deployment Grid).
5.  **Mission Parameters:** _[In Progress]_ Leaflet Map & GPS routing.
6.  **Checkout:** _[Pending]_ Secure Mission Deployment Summary.

## 5. Development Workflow

You need **three** terminals running:

1.  `bun run css` (Tailwind Watcher)
2.  `bun run build:client` (3D Engine Watcher)
3.  `bun run dev` (Elysia Server)

---

*For detailed technical strategies on performance, see `Optimization_Plan.md`.*

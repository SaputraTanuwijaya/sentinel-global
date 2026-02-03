# Sentinel Global

A high-performance "Bodyguard Ordering" simulation featuring seamless 3D integration and cinematic UI.

## 1. Tech Stack (BETH)

- **Runtime:** [Bun](https://bun.sh) - Ultra-fast JavaScript runtime.
- **Server:** [ElysiaJS](https://elysiajs.com) - High-performance framework utilizing JSX for server-side rendering.
- **Database:** Turso (LibSQL) - _Pending integration in Step 4_.
- **Frontend:** [HTMX](https://htmx.org) + [Tailwind CSS v4](https://tailwindcss.com).
- **3D Engine:** [Three.js](https://threejs.org).

## 2. Architecture: The Persistent Layout

To ensure the web runs fast a Hybrid Rendering approach is used :

- **The "App Shell" (`src/views/layout.tsx`):**
  - Contains a fixed `#canvas-container` that holds the Three.js scene. This element _never_ reloads.
  - Contains a relative `#ui-layer` for HTML content.
- **Navigation:** HTMX swaps the inner HTML of `#ui-layer`, leaving the 3D background intact.
- **Bridge:** The Frontend talks to the 3D scene via `window.CustomEvent` or direct access to `window.Sentinel`.
- **Modular Monolith** pattern to ensure scalability without the complexity of microservices.

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

## 3. Key Design Patterns

### A. The Persistent Layout (Hybrid Rendering)

1.  **`layout.tsx`** loads the `#canvas-container` (Three.js) once.
2.  **HTMX** swaps the content inside `#ui-layer` dynamically.
3.  **Result:** The 3D scene/video background continues playing seamlessly while the UI changes.

### B. The Event Bridge

The DOM (HTML) communicates with the Canvas (Three.js) via the **Pub/Sub** pattern using `CustomEvents`.

- **Frontend:** `document.body.dispatchEvent(new CustomEvent('sentinel-bg-change', { detail: { theme: 'tactical' } }))`
- **3D Engine:** `SceneManager` listens for this event and hot-swaps the video texture or 3D model without a full re-render.

### C. Client-Side Compilation

We use Bun's bundler to transpile our 3D logic into a single browser-ready file.

- **Command:** `bun run build:client`
- **Output:** `src/public/js/index.js`

## 4. User Flow (Mission Builder)

The application uses a "Single Page Wizard" feel without full reloads:

1.  **Mission Profile:** Select number of Principals (VIPs).
2.  **Security Tier:** Select capability level (Vanguard, Sentinel, Praetorian).
3.  **Visuals:** Select attire (Dress Code) with real-time video preview.
4.  **Motorcade:** _[Coming Soon]_ 3D Vehicle Formation Builder.
5.  **Mission Parameterr** _[Coming Soon]_ Leaflet Map.
6.  **Checkout** _[Coming Soon]_ Guest Mode Checkout.

## 5. Asset Guidelines (Strict)

To maintain the "Cinematic Infinite Studio" look in Step 3 (Dress Code):

### Video Requirements

- **Resolution:** 1920x720 (Ultrawide) or 1920x1080.
- **Edges:** **MUST be Absolute Black (#000000).**
  - _Reason:_ The UI uses gradient masks (`from-black to-transparent`). If the video has grey or noisy edges, the "infinite" illusion breaks.
- **Subject:** Centered, illuminated by a spotlight, ensuring the head is not cut off at the top.
- **Format:** `.mp4` (H.264) or `.webm`.

## 6. Development Workflow

You need **three** terminals running:

1.  `bun run css` (Tailwind Watcher)
2.  `bun run build:client` (3D Engine Watcher)
3.  `bun run dev` (Elysia Server)

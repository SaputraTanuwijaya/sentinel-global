import { SceneManager } from "./SceneManager";

// Only initialize the 3D engine once the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const engine = SceneManager.getInstance();

  // engine.loadVideoBackground('/public/assets/videos/background_loop.webm');

  (window as any).Sentinel = engine;

  // Listen for HTMX Events
  document.body.addEventListener("sentinel-bg-change", (e: any) => {
    const theme = e.detail.theme;
    if (theme) {
      engine.changeBackground(theme);
    }
  });

  // Force renderer resize after every HTMX swap to fix pointer-event stacking
  // and ensure the canvas doesn't block newly inserted UI elements.
  document.body.addEventListener("htmx:afterSettle", () => {
    engine.refresh();
  });
});

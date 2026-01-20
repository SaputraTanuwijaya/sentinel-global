import { SceneManager } from "./SceneManager";

// Only initialize the 3D engine once the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const engine = SceneManager.getInstance();

  // engine.loadVideoBackground('/public/assets/videos/background_loop.webm');

  (window as any).Sentinel = engine;
});

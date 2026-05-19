import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

const THUMB_SIZE = 256;

// Reused across calls so we don't reallocate a renderer per upload.
let _renderer: THREE.WebGLRenderer | null = null;
let _gltfLoader: GLTFLoader | null = null;

function getRenderer(): THREE.WebGLRenderer {
  if (_renderer) return _renderer;
  _renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    preserveDrawingBuffer: true, // required for toBlob from canvas
  });
  _renderer.setSize(THUMB_SIZE, THUMB_SIZE);
  _renderer.setPixelRatio(2);
  _renderer.toneMapping = THREE.ACESFilmicToneMapping;
  return _renderer;
}

function getLoader(): GLTFLoader {
  if (_gltfLoader) return _gltfLoader;
  const draco = new DRACOLoader();
  // Decoder files are already shipped at /public/js/libs/draco/ for the
  // wizard's SceneManager — reuse them here.
  draco.setDecoderPath("/public/js/libs/draco/");
  _gltfLoader = new GLTFLoader();
  _gltfLoader.setDRACOLoader(draco);
  return _gltfLoader;
}

/**
 * Render the first frame of a GLB model to a 256×256 PNG blob. The model is
 * centered and scaled to fit a unit cube, then framed with a 3/4 isometric
 * camera + neutral two-light setup. Used by the admin Vehicle form to
 * auto-generate a thumbnail when no manual upload is provided.
 *
 * Resolves with the PNG Blob. Rejects on decode failure or 10s timeout —
 * callers should fall back gracefully (admin can still upload manually).
 */
export async function generateVehicleThumbnail(file: File): Promise<Blob> {
  const url = URL.createObjectURL(file);

  return new Promise<Blob>((resolve, reject) => {
    const cleanup = () => URL.revokeObjectURL(url);
    let settled = false;
    const ok = (b: Blob) => {
      if (settled) return;
      settled = true;
      cleanup();
      resolve(b);
    };
    const fail = (e: unknown) => {
      if (settled) return;
      settled = true;
      cleanup();
      reject(e instanceof Error ? e : new Error(String(e)));
    };

    const timeout = window.setTimeout(
      () => fail(new Error("GLB render timed out")),
      10_000,
    );

    getLoader().load(
      url,
      (gltf) => {
        try {
          window.clearTimeout(timeout);
          const scene = new THREE.Scene();
          scene.background = new THREE.Color(0x111111);

          // ── Lighting: ambient fill + key light from front-up-right ──
          scene.add(new THREE.AmbientLight(0xffffff, 1.2));
          const key = new THREE.DirectionalLight(0xffffff, 2.0);
          key.position.set(3, 4, 5);
          scene.add(key);

          // ── Model: center on origin, scale to fit a unit box ───────
          const model = gltf.scene;
          scene.add(model);
          const bbox = new THREE.Box3().setFromObject(model);
          const size = new THREE.Vector3();
          const center = new THREE.Vector3();
          bbox.getSize(size);
          bbox.getCenter(center);
          model.position.sub(center);
          const maxDim = Math.max(size.x, size.y, size.z) || 1;
          const targetSize = 1.0;
          model.scale.setScalar(targetSize / maxDim);
          // Lift slightly so the model isn't centered vertically — gives
          // visual weight toward the bottom, matching the original v1
          // catalog thumbnails.
          model.position.y -= 0.1;

          // ── Camera: 3/4 isometric, looking at origin ───────────────
          const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
          camera.position.set(1.2, 0.9, 1.8);
          camera.lookAt(0, 0, 0);

          const renderer = getRenderer();
          renderer.render(scene, camera);

          renderer.domElement.toBlob(
            (blob) => {
              // Free model GPU resources eagerly.
              model.traverse((obj: any) => {
                if (obj.geometry) obj.geometry.dispose?.();
                if (obj.material) {
                  const mats = Array.isArray(obj.material)
                    ? obj.material
                    : [obj.material];
                  for (const m of mats) {
                    for (const k of Object.keys(m)) {
                      const v = (m as any)[k];
                      if (v && typeof v === "object" && "isTexture" in v) {
                        (v as any).dispose?.();
                      }
                    }
                    m.dispose?.();
                  }
                }
              });
              if (!blob) return fail(new Error("toBlob returned null"));
              ok(blob);
            },
            "image/png",
          );
        } catch (e) {
          fail(e);
        }
      },
      undefined,
      (err) => {
        window.clearTimeout(timeout);
        fail(err);
      },
    );
  });
}

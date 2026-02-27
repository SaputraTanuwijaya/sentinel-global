import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export class SceneManager {
  private static instance: SceneManager;
  private container: HTMLElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private controls: OrbitControls | null = null;
  private bgMesh: THREE.Mesh | null = null;
  private currentTheme: string = "";

  // Video Cache: one HTMLVideoElement + VideoTexture per video path (never mutate src)
  private videoCache: Map<
    string,
    { video: HTMLVideoElement; texture: THREE.VideoTexture }
  > = new Map();
  private activeVideoPath: string | null = null;

  // Configuration: Map IDs to file paths
  private readonly VIDEO_MAP: Record<string, string> = {
    business_formal: "/public/assets/videos/business_formal.mp4",
    casual_formal: "/public/assets/videos/business_casual.mp4",
    tactical_casual: "/public/assets/videos/tactical_casual.mp4",
    full_tactical: "/public/assets/videos/full_tactical.mp4",
  };

  // 3D Formation Props
  private principalModel: THREE.Group | null = null;
  private principalInstances: THREE.Group[] = [];
  private formationGroup: THREE.Group;
  private gltfloader: GLTFLoader;
  private targetPositions: THREE.Vector3[] = [];

  // Asset Cache (Promise-based to prevent concurrent duplicate loads)
  private modelCache: Map<string, Promise<THREE.Group>> = new Map();

  // 3D Motorcade Props
  private slotGroup: THREE.Group = new THREE.Group();
  private loadedVehicles: Map<number, THREE.Group> = new Map();
  private raycaster = new THREE.Raycaster();
  private mouse = new THREE.Vector2();
  private resizeTimer: ReturnType<typeof setTimeout> | null = null;

  private readonly TIER_CONFIG: Record<string, any[]> = {
    Vanguard: [
      { id: 0, role: "SWEEPER", x: 0, z: 20, color: 0x00ffff }, // Cyan
      { id: 1, role: "LEAD", x: 0, z: 10, color: 0x888888 }, // Gray
      { id: 2, role: "PRINCIPAL", x: 0, z: 0, color: 0xffd700 }, // Gold
      { id: 3, role: "CAT", x: 0, z: -10, color: 0xff4444 }, // Red
      { id: 4, role: "ECM", x: 0, z: -20, color: 0x4444ff }, // Blue
    ],
    Sentinel: [
      { id: 0, role: "SWEEPER", x: 0, z: 20, color: 0x00ffff },
      { id: 1, role: "LEAD", x: 0, z: 10, color: 0x888888 },
      { id: 2, role: "PRINCIPAL", x: 0, z: 0, color: 0xffd700 },
      { id: 3, role: "CAT", x: 0, z: -10, color: 0xff4444 },
      { id: 4, role: "ECM", x: 0, z: -20, color: 0x4444ff },
    ],
    Praetorian: [
      { id: 0, role: "SWEEPER", x: 0, z: 20, color: 0x00ffff },
      { id: 1, role: "LEAD", x: 0, z: 10, color: 0x888888 },
      { id: 2, role: "PRINCIPAL", x: 0, z: 0, color: 0xffd700 },
      { id: 3, role: "CAT", x: 0, z: -10, color: 0xff4444 },
      { id: 4, role: "ECM", x: 0, z: -20, color: 0x4444ff },
    ],
  };

  // Camera Lerping
  private cameraTargetPos: THREE.Vector3 = new THREE.Vector3(0, 8, 12);
  private cameraLookAt: THREE.Vector3 = new THREE.Vector3(0, 0, 0);
  private motorcadeSpotLights: THREE.SpotLight[] = [];
  private motorcadeBeams: THREE.Mesh[] = [];
  private motorcadeLightPools: THREE.Mesh[] = [];
  private groundPlane: THREE.Mesh | null = null;
  private radiantTexture: THREE.CanvasTexture | null = null;
  private isMotorcade: boolean = false;
  private skipFormationAnimation: boolean = false;
  private isTransitioning: boolean = false;
  private boundOnMouseClick: (event: MouseEvent) => void;

  private constructor() {
    this.container = document.getElementById("canvas-container") as HTMLElement;
    if (!this.container) throw new Error("Canvas container not found!");

    this.scene = new THREE.Scene();

    this.scene.background = new THREE.Color(0x0a0a0a);

    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    this.camera.position.z = 8;

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.shadowMap.enabled = true;
    this.container.appendChild(this.renderer.domElement);

    // ATTACH CONTROLS TO BODY: This fixes the 'unable to move freely' issue
    // because the UI layers on top were intercepting mouse events.
    this.controls = new OrbitControls(this.camera, document.body);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.minDistance = 5;
    this.controls.maxDistance = 120;
    this.controls.maxPolarAngle = Math.PI / 2 - 0.05;
    this.controls.enabled = false;

    // Handle manual interaction to stop transitions
    this.controls.addEventListener("start", () => {
      this.isTransitioning = false;
    });

    // Zooming also stops transitions
    window.addEventListener("wheel", () => {
      this.isTransitioning = false;
    });

    // Ground Plane for Motorcade Lighting
    const groundGeo = new THREE.PlaneGeometry(500, 500);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x151515, // Mid-gray for visibility
      roughness: 0.6, // High roughness to catch light spread
      metalness: 0.1,
    });
    this.groundPlane = new THREE.Mesh(groundGeo, groundMat);
    this.groundPlane.rotation.x = -Math.PI / 2;
    this.groundPlane.position.y = -0.05;
    this.groundPlane.receiveShadow = true;
    this.groundPlane.visible = false;
    this.scene.add(this.groundPlane);

    // Tactical Grid
    const grid = new THREE.GridHelper(500, 100, 0xffffff, 0x222222);
    grid.position.y = -0.02;
    grid.material.transparent = true;
    grid.material.opacity = 0.1;
    this.groundPlane.add(grid);

    // --- Ultra-Bright Cinematic Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
    this.scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2.5);
    mainLight.position.set(20, 50, 20);
    mainLight.castShadow = true;
    this.scene.add(mainLight);

    // Group Formation
    this.formationGroup = new THREE.Group();
    this.scene.add(this.formationGroup);

    // Loaders
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/public/js/libs/draco/");
    this.gltfloader = new GLTFLoader();
    this.gltfloader.setDRACOLoader(dracoLoader);

    this.preloadPrincipal();

    window.addEventListener("resize", this.onWindowResize.bind(this));

    // Bind and add click handler once
    this.boundOnMouseClick = this.onMouseClick.bind(this);
    window.addEventListener("click", this.boundOnMouseClick);

    this.animate();

    (window as any).Sentinel = this;

    console.log("Sentinel SceneManager: Initialized");
  }

  private createRadiantTexture() {
    const size = 512;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext("2d");
    if (!context) return null;

    const gradient = context.createRadialGradient(
      size / 2,
      size / 2,
      0,
      size / 2,
      size / 2,
      size / 2,
    );

    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.8, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

    context.fillStyle = gradient;
    context.fillRect(0, 0, size, size);

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }

  public static getInstance(): SceneManager {
    if (!SceneManager.instance) {
      SceneManager.instance = new SceneManager();
    }
    return SceneManager.instance;
  }

  private preloadPrincipal() {
    this.gltfloader.load(
      "/public/assets/models/Principal-v1.glb",
      (gltf) => {
        this.principalModel = gltf.scene;
        this.principalModel.traverse((node) => {
          if ((node as THREE.Mesh).isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
          }
        });

        this.principalModel.scale.set(1, 1, 1);
        this.principalModel.visible = false;
        this.scene.add(this.principalModel);
        console.log("Sentinel: Principal Model Loaded");
      },
      undefined,
      (error) => console.error("Error loading principal:", error),
    );
  }

  public updatePrincipals(count: number) {
    console.log(`Sentinel: Updating Formation to ${count}`);

    this.isMotorcade = false;
    this.skipFormationAnimation = false;
    if (this.controls) this.controls.enabled = false;
    if (this.groundPlane) this.groundPlane.visible = false;

    this.camera.position.set(4, 5, 4);
    this.camera.lookAt(0, 0.5, 0);
    if (this.bgMesh) this.bgMesh.visible = false;
    this.pauseAllVideos();
    this.formationGroup.visible = true;
    this.slotGroup.visible = false;

    if (!this.principalModel) {
      console.warn("Principal model not loaded yet.");
      return;
    }

    while (this.principalInstances.length < count) {
      const clone = this.principalModel.clone();
      clone.visible = true;
      clone.position.set(1, 0, 0);
      clone.scale.set(0, 0, 0);

      this.formationGroup.add(clone);
      this.principalInstances.push(clone);
      this.targetPositions.push(new THREE.Vector3(1, 0, 0));
    }

    while (this.principalInstances.length > count) {
      const removed = this.principalInstances.pop();
      this.targetPositions.pop();
      if (removed) this.formationGroup.remove(removed);
    }

    // this.principalInstances.forEach((model, index) => {
    //   const targetPos = this.getFormationOffset(index, count);

    //   // TODO : Upgrade slide animations or choose to instantly position
    //   model.position.copy(targetPos);
    //   model.lookAt(0, 0, 10);
    // });

    const spacing = 1.2;
    let offsets: THREE.Vector3[] = [];

    if (count === 1) {
      offsets.push(new THREE.Vector3(0, 0, 0));
    } else if (count === 2) {
      // Side by Side
      offsets.push(new THREE.Vector3(0, 0, -spacing / 2));
      offsets.push(new THREE.Vector3(0, 0, spacing / 2));
    } else if (count === 3) {
      // Triable / Wedge
      offsets.push(new THREE.Vector3(0, 0, spacing / 2));
      offsets.push(new THREE.Vector3(spacing / 2, 0, -spacing / 2));
      offsets.push(new THREE.Vector3(-spacing / 2, 0, -spacing / 2));
    } else if (count === 4) {
      // Diamond
      offsets.push(new THREE.Vector3(-spacing, 0, 0));
      offsets.push(new THREE.Vector3(0, 0, -spacing));
      offsets.push(new THREE.Vector3(0, 0, spacing));
      offsets.push(new THREE.Vector3(spacing, 0, 0));
    } else {
      // 5+ Phalanx
      offsets.push(new THREE.Vector3(0, 0, 0));
      offsets.push(new THREE.Vector3(-spacing, 0, 0));
      offsets.push(new THREE.Vector3(spacing, 0, 0));
      offsets.push(new THREE.Vector3(0, 0, -spacing));
      offsets.push(new THREE.Vector3(0, 0, spacing));
    }

    const unassignedSlots = [...offsets];

    const availableInstances = this.principalInstances.map((inst, i) => ({
      id: i,
      pos: inst.position,
    }));

    // this.targetPositions = offsets;
    this.targetPositions = new Array(count).fill(null);

    unassignedSlots.forEach((slot) => {
      let closestIdx = -1;
      let minDst = Infinity;

      availableInstances.forEach((inst, idx) => {
        const dst = inst.pos.distanceTo(slot);
        if (dst < minDst) {
          minDst = dst;
          closestIdx = idx;
        }
      });

      if (closestIdx !== -1) {
        const foundInstance = availableInstances[closestIdx];
        if (foundInstance) {
          this.targetPositions[foundInstance.id] = slot;
          availableInstances.splice(closestIdx, 1);
        }
      }
    });

    this.targetPositions.forEach((pos, i) => {
      if (!pos && offsets[i]) this.targetPositions[i] = offsets[i];
    });
  }

  // private getFormationOffset(index: number, total: number): THREE.Vector3 {
  //   const spacing = 1.0;

  //   // 1 Person: Center
  //   if (total === 1) return new THREE.Vector3(0, 0, 0);

  //   // 2 People: Side by Side
  //   if (total === 2) {
  //     return new THREE.Vector3((index === 0 ? -0.5 : 0.5) * spacing, 0, 0);
  //   }

  //   // 3+ People: Wedge (Triangle)
  //   if (index === 0) return new THREE.Vector3(0, 0, 0);

  //   const row = Math.floor((index + 1) / 2);
  //   const side = index % 2 === 0 ? 1 : -1;

  //   return new THREE.Vector3(side * spacing * row, 0, -spacing * row);
  // }

  private onWindowResize(): void {
    if (this.resizeTimer) clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }, 150);
  }

  private animate(): void {
    requestAnimationFrame(this.animate.bind(this));

    if (this.isMotorcade) {
      if (this.controls) {
        if (this.isTransitioning) {
          this.camera.position.lerp(this.cameraTargetPos, 0.08);
          this.controls.target.lerp(this.cameraLookAt, 0.08);

          if (
            this.camera.position.distanceTo(this.cameraTargetPos) < 0.05 &&
            this.controls.target.distanceTo(this.cameraLookAt) < 0.05
          ) {
            this.isTransitioning = false;
          }
        }
        if (this.controls.enabled) this.controls.update();
      }
    }

    // Put animation here:
    if (this.formationGroup.visible) {
      this.principalInstances.forEach((model, index) => {
        const target = this.targetPositions[index];
        if (!target) return;

        // Revert to original behavior
        model.position.lerp(target, 0.08);
        model.scale.lerp(new THREE.Vector3(1.5, 1.5, 1.5), 0.1);
        model.lookAt(-10, 0, 0);
      });
    }

    // Only update the actively playing video texture
    if (this.activeVideoPath) {
      const entry = this.videoCache.get(this.activeVideoPath);
      if (entry) entry.texture.needsUpdate = true;
    }
    this.renderer.render(this.scene, this.camera);
  }

  public changeBackground(themeId: string): void {
    // if (this.currentTheme === themeId) return;
    // this.currentTheme = themeId;

    // Debug theme
    console.log(`Sentinel 3D: Switching to [${themeId}]`);

    this.isMotorcade = false;
    this.skipFormationAnimation = false;
    if (this.controls) this.controls.enabled = false;

    if (themeId !== "black") {
      this.camera.position.set(0, 0, 8);
      this.camera.lookAt(0, 0, 0);
      this.formationGroup.visible = false;
    } else {
      this.formationGroup.visible = true;
    }

    if (themeId === "black" || !this.VIDEO_MAP[themeId]) {
      if (this.bgMesh) this.bgMesh.visible = false;
      this.pauseAllVideos();
      this.activeVideoPath = null;
      this.currentTheme = "black";
      return;
    }

    const videoPath = this.VIDEO_MAP[themeId];

    // Pause every cached video before switching
    this.pauseAllVideos();

    // Ensure the bg mesh exists (first call creates geometry + material)
    if (!this.bgMesh) {
      this.initBgMesh();
    }

    // Get or create the cached video+texture pair for this path
    const entry = this.getOrCreateVideo(videoPath);

    // Swap the texture on the existing mesh material
    const mat = this.bgMesh!.material as THREE.MeshBasicMaterial;
    mat.map = entry.texture;
    mat.needsUpdate = true;

    this.bgMesh!.visible = true;
    this.activeVideoPath = videoPath;

    // Play from the start
    entry.video.currentTime = 0;
    entry.video.play();
    // this.currentTheme = themeId;
  }

  /**
   * Pause every video in the cache and mark no active path.
   * Prevents multiple videos from decoding frames simultaneously.
   */
  private pauseAllVideos(): void {
    this.videoCache.forEach((entry) => {
      entry.video.pause();
    });
    this.activeVideoPath = null;
  }

  /**
   * Retrieve a cached video+texture pair, or create one.
   * Each video element's `src` is set exactly once — no mutation.
   */
  private getOrCreateVideo(url: string): {
    video: HTMLVideoElement;
    texture: THREE.VideoTexture;
  } {
    const cached = this.videoCache.get(url);
    if (cached) return cached;

    const video = document.createElement("video");
    video.src = url;
    video.crossOrigin = "anonymous";
    video.loop = false;
    video.muted = true;
    video.playsInline = true;
    video.style.display = "none";
    // Preload metadata so the decoder is warm
    video.preload = "auto";

    const texture = new THREE.VideoTexture(video);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;

    const entry = { video, texture };
    this.videoCache.set(url, entry);
    return entry;
  }

  /**
   * Create the background mesh plane (geometry + material) once.
   * The texture will be swapped via material.map on each theme change.
   */
  private initBgMesh(): void {
    const geometry = new THREE.PlaneGeometry(32, 18);
    const material = new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
    });

    this.bgMesh = new THREE.Mesh(geometry, material);
    this.bgMesh.position.set(0, -2, -5);
    this.scene.add(this.bgMesh);
  }

  public initMotorcadeMode(tier: string = "Vanguard") {
    console.log(`Sentinel: Initializing Motorcade for [${tier}]`);

    this.isMotorcade = true;
    if (this.controls) {
      this.controls.enabled = true;
      this.controls.target.set(0, 0, 0);
      this.controls.update();
    }
    if (this.groundPlane) this.groundPlane.visible = true;

    // --- NUCLEAR CLEANUP: Eradicate all ghost artifacts from previous steps ---
    // Hide background video plane
    if (this.bgMesh) {
      this.bgMesh.visible = false;
    }

    // Pause all cached video elements
    this.pauseAllVideos();

    // Hide the entire formation group and all its children recursively
    this.formationGroup.visible = false;
    this.formationGroup.traverse((child) => {
      child.visible = false;
    });

    // Explicitly hide every principal instance and its descendant meshes
    this.principalInstances.forEach((p) => {
      p.visible = false;
      p.traverse((child) => {
        child.visible = false;
      });
    });

    // Hide the preloaded principal template if it exists
    if (this.principalModel) {
      this.principalModel.visible = false;
    }

    // Horizontal Side View Camera (90 Degree Rotation)
    this.cameraTargetPos.set(25, 8, 0); // Side view
    this.cameraLookAt.set(0, 0, 0);
    this.camera.position.copy(this.cameraTargetPos);
    this.camera.lookAt(this.cameraLookAt);

    // Clear old SpotLights and Beams
    this.motorcadeSpotLights.forEach((light) => {
      this.scene.remove(light);
      this.scene.remove(light.target);
    });
    this.motorcadeBeams.forEach((beam) => this.scene.remove(beam));
    this.motorcadeLightPools.forEach((pool) => this.scene.remove(pool));

    this.motorcadeSpotLights = [];
    this.motorcadeBeams = [];
    this.motorcadeLightPools = [];

    this.slotGroup.clear();
    this.scene.add(this.slotGroup);

    const config = this.TIER_CONFIG[tier] || this.TIER_CONFIG["Vanguard"];

    // Volumetric Beam Geometry & Material
    const beamGeo = new THREE.CylinderGeometry(0.1, 4.5, 25, 32, 1, true);
    beamGeo.translate(0, -12.5, 0); // Origin at top

    // Light Pool Geometry (Circle on floor)
    const poolGeo = new THREE.PlaneGeometry(9, 9);
    if (!this.radiantTexture) this.radiantTexture = this.createRadiantTexture();

    if (!config) return;
    config.forEach((slotData) => {
      this.createHolographicSlot(slotData);

      // Individual SpotLight for each slot
      const spotLight = new THREE.SpotLight(0xffffff, 800);
      spotLight.position.set(slotData.x, 25, slotData.z);
      spotLight.target.position.set(slotData.x, 0, slotData.z);
      spotLight.angle = Math.PI / 10;
      spotLight.penumbra = 0.6;
      spotLight.decay = 2;
      spotLight.distance = 50;
      spotLight.castShadow = true;

      this.scene.add(spotLight);
      this.scene.add(spotLight.target);
      this.motorcadeSpotLights.push(spotLight);

      // Volumetric Beam Mesh
      const beamMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.1,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const beam = new THREE.Mesh(beamGeo, beamMat);
      beam.position.set(slotData.x, 25, slotData.z);
      this.scene.add(beam);
      this.motorcadeBeams.push(beam);

      // Radiant Light Pool (Plane on floor with gradient texture)
      const poolMat = new THREE.MeshBasicMaterial({
        map: this.radiantTexture,
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const pool = new THREE.Mesh(poolGeo, poolMat);
      pool.position.set(slotData.x, 0.1, slotData.z);
      pool.rotation.x = -Math.PI / 2;
      this.scene.add(pool);
      this.motorcadeLightPools.push(pool);
    });

    this.slotGroup.visible = true;
  }

  public focusOnSlot(slotId: number) {
    const slot = this.slotGroup.children.find((c) => c.userData.id === slotId);
    if (!slot) return;

    // Close up side angle
    this.cameraTargetPos.set(12, 4, slot.position.z);
    this.cameraLookAt.set(0, 0, slot.position.z);
    this.isTransitioning = true;

    // DISABLE FREE MOVEMENT during vehicle selection
    if (this.controls) this.controls.enabled = false;

    // Dim other lights, brighten this one
    this.motorcadeSpotLights.forEach((light, index) => {
      const beam = this.motorcadeBeams[index];
      const pool = this.motorcadeLightPools[index];
      if (index === slotId) {
        light.intensity = 2000;
        if (beam) (beam.material as THREE.MeshBasicMaterial).opacity = 0.35;
        if (pool) (pool.material as THREE.MeshBasicMaterial).opacity = 1.0;
      } else {
        light.intensity = 50;
        if (beam) (beam.material as THREE.MeshBasicMaterial).opacity = 0.02;
        if (pool) (pool.material as THREE.MeshBasicMaterial).opacity = 0.05;
      }
    });
  }

  public resetMotorcadeCamera() {
    this.cameraTargetPos.set(25, 8, 0);
    this.cameraLookAt.set(0, 0, 0);
    this.isTransitioning = true;

    // RE-ENABLE FREE MOVEMENT when drawer is closed
    if (this.controls) {
      this.controls.enabled = true;
      this.controls.update();
    }

    // Reset all lights to normal intensity
    this.motorcadeSpotLights.forEach((light, index) => {
      const beam = this.motorcadeBeams[index];
      const pool = this.motorcadeLightPools[index];
      light.intensity = 800;
      if (beam) (beam.material as THREE.MeshBasicMaterial).opacity = 0.1;
      if (pool) (pool.material as THREE.MeshBasicMaterial).opacity = 0.4;
    });
  }

  private createHolographicSlot(data: any) {
    // Glowing Floor Box - Using EdgesGeometry for a clean rectangle without diagonals
    const geometry = new THREE.BoxGeometry(3.5, 0.1, 6);
    const edges = new THREE.EdgesGeometry(geometry);
    const material = new THREE.LineBasicMaterial({
      color: data.color,
      transparent: true,
      opacity: 0.8,
    });

    const slot = new THREE.LineSegments(edges, material);
    slot.position.set(data.x, 0, data.z);
    slot.userData = { id: data.id, role: data.role, type: "slot" };

    // Anchor
    const poleGeo = new THREE.CylinderGeometry(0.05, 0.05, 2);
    const poleMat = new THREE.MeshBasicMaterial({ color: data.color });
    const pole = new THREE.Mesh(poleGeo, poleMat);
    pole.position.y = 1;
    slot.add(pole);

    this.slotGroup.add(slot);
  }

  private onMouseClick(event: MouseEvent) {
    if (!this.isMotorcade) return;

    // IGNORE CLICKS IF GARAGE DRAWER IS OPEN
    const drawer = document.getElementById("garage-drawer");
    if (drawer && !drawer.classList.contains("translate-x-full")) return;

    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Raycast
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(
      this.slotGroup.children,
      false,
    );

    if (intersects.length > 0) {
      // Since type could be undefined maybe use optional chaining and add (?) behind array and userData
      const userData = intersects[0]?.object.userData;
      if (userData?.type === "slot") {
        console.log(`Sentinel: Clicked Slot ${userData.role}`);

        this.focusOnSlot(userData.id);

        document.body.dispatchEvent(
          new CustomEvent("sentinel-garage-open", {
            detail: { slotId: userData.id, role: userData.role },
          }),
        );
      }
    }
  }

  /**
   * Dispose all geometries and materials of a THREE.Object3D tree.
   * Prevents GPU memory leaks when removing vehicles from the scene.
   */
  private disposeObject(obj: THREE.Object3D): void {
    obj.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.geometry?.dispose();
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((m) => m.dispose());
        } else if (mesh.material) {
          mesh.material.dispose();
        }
      }
    });
  }

  /**
   * Load a model from disk once, cache the Promise, and return a clone.
   *
   * Uses a Promise-based cache (`Map<string, Promise<THREE.Group>>`) so that
   * concurrent calls for the same path share a single GLTFLoader parse.
   * This eliminates the race condition where N simultaneous `spawnVehicle`
   * calls each trigger their own `.glb` decode on the main thread.
   */
  private getOrLoadModel(path: string): Promise<THREE.Group> {
    const existing = this.modelCache.get(path);
    if (existing) {
      // Cache hit — await the (possibly still in-flight) load, then clone
      return existing.then((original) => original.clone());
    }

    // Cache miss — create the Promise *synchronously* and store it immediately
    // so that any subsequent call within the same tick receives the same Promise.
    const loadPromise = new Promise<THREE.Group>((resolve, reject) => {
      this.gltfloader.load(
        path,
        (gltf) => {
          const original = gltf.scene;
          original.traverse((node) => {
            if ((node as THREE.Mesh).isMesh) {
              node.castShadow = true;
              node.receiveShadow = true;
            }
          });
          resolve(original);
        },
        undefined,
        (error) => {
          // Evict failed entry so a retry can attempt to load again
          this.modelCache.delete(path);
          reject(error);
        },
      );
    });

    this.modelCache.set(path, loadPromise);
    return loadPromise.then((original) => original.clone());
  }

  public spawnVehicle(slotId: number, vehicleType: string, amount: number = 1) {
    // Find the slot position
    const slot = this.slotGroup.children.find((c) => c.userData.id === slotId);
    if (!slot) return;

    // Remove existing vehicle in this slot and free GPU memory
    if (this.loadedVehicles.has(slotId)) {
      const old = this.loadedVehicles.get(slotId);
      if (old) {
        this.disposeObject(old);
        this.scene.remove(old);
      }
      this.loadedVehicles.delete(slotId);
    }

    if (vehicleType === "none") return;

    // Map vehicleType to GLB Path
    const modelMap: Record<string, string> = {
      Escalade: "/public/assets/models/CadillacEscalade_Optimized-v1.glb",
      G63: "/public/assets/models/MercedesAMGG63_Optimized-v1.glb",
      Suburban: "/public/assets/models/ChevroletSuburban_Optimized-v1.glb",
      F150: "/public/assets/models/FordF150_Optimized-v3.glb",
      BMW: "/public/assets/models/BMW-S1000RR_Optimized-v1.glb",
    };

    const path = modelMap[vehicleType];
    if (!path) return;

    const group = new THREE.Group();
    group.position.copy(slot.position);
    this.scene.add(group);
    this.loadedVehicles.set(slotId, group);

    const spacing = 4.0;
    const offsets: THREE.Vector3[] = [];

    if (amount === 1) {
      offsets.push(new THREE.Vector3(0, 0, 0));
    } else if (amount === 2) {
      // Side by Side (along X axis for a motorcade look)
      offsets.push(new THREE.Vector3(-spacing / 2, 0, 0));
      offsets.push(new THREE.Vector3(spacing / 2, 0, 0));
    } else if (amount === 3) {
      // Triangular
      offsets.push(new THREE.Vector3(0, 0, spacing / 2)); // Front
      offsets.push(new THREE.Vector3(-spacing / 2, 0, -spacing / 2)); // Back Left
      offsets.push(new THREE.Vector3(spacing / 2, 0, -spacing / 2)); // Back Right
    }

    offsets.forEach((offset) => {
      this.getOrLoadModel(path)
        .then((vehicle) => {
          vehicle.position.copy(offset);

          if (vehicleType === "F150") {
            vehicle.rotation.y = Math.PI;
          } else {
            vehicle.rotation.y = 0;
          }

          vehicle.scale.set(1, 1, 1);

          // Animate In (Drop)
          const initialY = 5;
          vehicle.position.y += initialY;

          group.add(vehicle);

          const targetY = offset.y;
          const drop = () => {
            if (vehicle.position.y > targetY) {
              vehicle.position.y -= 0.2;
              requestAnimationFrame(drop);
            } else {
              vehicle.position.y = targetY;
            }
          };
          drop();
        })
        .catch((err) =>
          console.error(`Sentinel: Failed to load ${vehicleType}`, err),
        );
    });
  }
}

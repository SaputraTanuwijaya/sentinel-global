import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

export class SceneManager {
  private static instance: SceneManager;
  private container: HTMLElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private videoTexture: THREE.VideoTexture | null = null;
  private videoElement: HTMLVideoElement | null = null;
  private bgMesh: THREE.Mesh | null = null;
  private currentTheme: string = "";

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

  private constructor() {
    this.container = document.getElementById("canvas-container") as HTMLElement;
    if (!this.container) throw new Error("Canvas container not found!");

    this.scene = new THREE.Scene();

    this.scene.background = new THREE.Color(0x050505);

    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    this.camera.position.z = 8;

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.shadowMap.enabled = true;
    this.container.appendChild(this.renderer.domElement);

    // const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    // this.scene.add(ambientLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    this.scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 3.0);
    dirLight.position.set(5, 10, 7);
    dirLight.castShadow = true;
    this.scene.add(dirLight);
    const rimLight = new THREE.SpotLight(0xffffff, 4.0);
    rimLight.position.set(-5, 5, -5);
    rimLight.lookAt(0, 0, 0);
    this.scene.add(rimLight);

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
    // this.changeBackground("black");
    this.animate();

    (window as any).Sentinel = this;

    console.log("Sentinel SceneManager: Initialized");
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

        this.principalModel.scale.set(1.5, 1.5, 1.5);
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

    this.camera.position.set(4, 5, 4);
    this.camera.lookAt(0, 0.5, 0);

    if (this.bgMesh) this.bgMesh.visible = false;
    if (this.videoElement) this.videoElement.pause();
    this.formationGroup.visible = true;

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
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  private animate(): void {
    requestAnimationFrame(this.animate.bind(this));

    // Put animation here:
    if (this.formationGroup.visible) {
      this.principalInstances.forEach((model, index) => {
        const target = this.targetPositions[index];
        if (!target) return;
        // Lerp sliding
        model.position.lerp(target, 0.08);
        // Pop effect for new clone
        model.scale.lerp(new THREE.Vector3(1.5, 1.5, 1.5), 0.1);
        model.lookAt(-10, 0, 0);
      });
    }

    if (this.videoTexture) this.videoTexture.needsUpdate = true;
    this.renderer.render(this.scene, this.camera);
  }

  public changeBackground(themeId: string): void {
    // if (this.currentTheme === themeId) return;
    // this.currentTheme = themeId;

    // Debug theme
    console.log(`Sentinel 3D: Switching to [${themeId}]`);

    if (themeId !== "black") {
      this.camera.position.set(0, 0, 8);
      this.camera.lookAt(0, 0, 0);
      this.formationGroup.visible = false;
    } else {
      this.formationGroup.visible = true;
    }

    if (themeId === "black" || !this.VIDEO_MAP[themeId]) {
      if (this.bgMesh) this.bgMesh.visible = false;
      if (this.videoElement) this.videoElement.pause();
      this.currentTheme = "black";
      return;
    }

    const videoPath = this.VIDEO_MAP[themeId];

    if (!this.bgMesh) {
      this.createVideoPlane(videoPath);
    } else {
      this.bgMesh.visible = true;
    }

    if (this.videoElement) {
      if (!this.videoElement.src.includes(videoPath)) {
        this.videoElement.src = videoPath;
      }

      this.videoElement.loop = false;
      this.videoElement.currentTime = 0;
      this.videoElement.play();
    }
    // this.currentTheme = themeId;
  }

  private createVideoPlane(url: string): void {
    this.videoElement = document.createElement("video");
    this.videoElement.src = url;
    this.videoElement.crossOrigin = "anonymous";
    this.videoElement.loop = false;
    this.videoElement.muted = true;
    this.videoElement.playsInline = true;
    this.videoElement.play();

    this.videoTexture = new THREE.VideoTexture(this.videoElement);
    this.videoTexture.colorSpace = THREE.SRGBColorSpace;
    this.videoTexture.minFilter = THREE.LinearFilter;
    this.videoTexture.magFilter = THREE.LinearFilter;

    const geometry = new THREE.PlaneGeometry(32, 18);
    const material = new THREE.MeshBasicMaterial({
      map: this.videoTexture,
      side: THREE.DoubleSide,
    });

    this.bgMesh = new THREE.Mesh(geometry, material);
    this.bgMesh.position.set(0, -2, -5);
    // this.bgMesh.name = "BackgroundLayer";

    this.scene.add(this.bgMesh);
  }
}

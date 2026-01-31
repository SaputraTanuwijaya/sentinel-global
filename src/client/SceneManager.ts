import * as THREE from "three";

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
  // TODO: In the future, add real paths here.
  private readonly VIDEO_MAP: Record<string, string> = {
    business_formal: "/public/assets/videos/business_formal.mp4",
    casual_formal: "/public/assets/videos/business_casual.mp4",
    tactical_casual: "/public/assets/videos/tactical_casual.mp4",
    full_tactical: "/public/assets/videos/full_tactical.mp4",
  };

  private constructor() {
    this.container = document.getElementById("canvas-container") as HTMLElement;
    if (!this.container) throw new Error("Canvas container not found!");

    this.scene = new THREE.Scene();

    // Defaulted screen background as black
    this.scene.background = new THREE.Color(0x0a0a0a);

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
    this.container.appendChild(this.renderer.domElement);

    // const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    // this.scene.add(ambientLight);

    window.addEventListener("resize", this.onWindowResize.bind(this));

    this.changeBackground("black");

    this.animate();

    console.log("Sentinel SceneManager: Initialized");
  }

  public static getInstance(): SceneManager {
    if (!SceneManager.instance) {
      SceneManager.instance = new SceneManager();
    }
    return SceneManager.instance;
  }

  private onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  private animate(): void {
    requestAnimationFrame(this.animate.bind(this));

    // Future: Update animations here
    if (this.videoTexture) this.videoTexture.needsUpdate = true;

    this.renderer.render(this.scene, this.camera);
  }

  public changeBackground(themeId: string): void {
    // if (this.currentTheme === themeId) return;
    // this.currentTheme = themeId;

    // Debug theme
    console.log(`Sentinel 3D: Switching to [${themeId}]`);

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
    this.currentTheme = themeId;
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

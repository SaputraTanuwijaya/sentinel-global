import * as THREE from "three";

export class SceneManager {
  private static instance: SceneManager;
  private container: HTMLElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private videoTexture: THREE.VideoTexture | null = null;

  private constructor() {
    this.container = document.getElementById("canvas-container") as HTMLElement;
    if (!this.container) throw new Error("Canvas container not found!");

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    this.camera.position.z = 5;

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.container.appendChild(this.renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);

    window.addEventListener("resize", this.onWindowResize.bind(this));

    this.animate();

    console.log("Sentinel SceneManager: Initialized");
  }

  public static getInstance(): SceneManager {
    if (!SceneManager.instance) {
      SceneManager.instance = new SceneManager();
    }
    return SceneManager.instance;
  }

  // --- Core Logic ---

  private onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  private animate(): void {
    requestAnimationFrame(this.animate.bind(this));

    // Future: Update animations here

    this.renderer.render(this.scene, this.camera);
  }

  // --- Feature: Video Background ---

  public loadVideoBackground(videoUrl: string): void {
    const video = document.createElement("video");
    video.src = videoUrl;
    video.crossOrigin = "anonymous";
    video.loop = true;
    video.muted = true;
    video.play();

    this.videoTexture = new THREE.VideoTexture(video);
    this.videoTexture.colorSpace = THREE.SRGBColorSpace;

    // Plane for video background
    const geometry = new THREE.PlaneGeometry(20, 12);
    const material = new THREE.MeshBasicMaterial({
      map: this.videoTexture,
      side: THREE.DoubleSide,
      depthTest: false,
      depthWrite: false,
    });

    const bgMesh = new THREE.Mesh(geometry, material);
    bgMesh.position.z = -10;

    this.scene.add(bgMesh);
  }
}

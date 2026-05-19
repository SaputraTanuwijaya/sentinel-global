// File-upload helpers used by admin CRUD routes.
//
// Pattern: receive a multipart `File`, validate type + size, write to a
// predictable path under src/public/assets/{kind}/{slug}{ext}, return the
// public URL path. Overwrites in place; orphaned old files are reconciled by
// the asset browser (Step 7).

import { mkdir } from "node:fs/promises";
import { extname } from "node:path";

export const MAX_UPLOAD_BYTES = 50 * 1024 * 1024; // 50 MB

const PUBLIC_DIR = "src/public";

type AcceptKind = "video" | "image" | "model";

const VIDEO_EXT: Record<string, string> = {
  "video/mp4": ".mp4",
  "video/webm": ".webm",
  "video/quicktime": ".mov",
};

const IMAGE_EXT: Record<string, string> = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
};

// GLB MIME is officially "model/gltf-binary" but browsers often send
// "application/octet-stream" because .glb isn't a registered system type
// on every OS. We trust the .glb extension as a fallback signal.
const MODEL_EXT: Record<string, string> = {
  "model/gltf-binary": ".glb",
  "application/octet-stream": ".glb",
};

function allowListFor(accept: AcceptKind): Record<string, string> {
  switch (accept) {
    case "video":
      return VIDEO_EXT;
    case "image":
      return IMAGE_EXT;
    case "model":
      return MODEL_EXT;
  }
}

function pickExt(file: File, accepted: Record<string, string>, accept: AcceptKind): string {
  // For model files, prefer the filename extension (browsers often report
  // application/octet-stream regardless of source).
  if (accept === "model") {
    const fromName = extname(file.name).toLowerCase();
    if (fromName === ".glb") return ".glb";
  }
  const fromMime = accepted[file.type];
  if (fromMime) return fromMime;
  const fromName = extname(file.name).toLowerCase();
  if (Object.values(accepted).includes(fromName)) return fromName;
  throw new Error(
    `Unsupported file type "${file.type || fromName || "unknown"}".`,
  );
}

async function writeFile(
  file: File,
  kind: "dresscodes" | "vehicles",
  slug: string,
  accept: AcceptKind,
): Promise<string> {
  if (file.size === 0) {
    throw new Error("Empty file.");
  }
  if (file.size > MAX_UPLOAD_BYTES) {
    throw new Error(
      `File exceeds ${Math.round(MAX_UPLOAD_BYTES / 1024 / 1024)} MB limit.`,
    );
  }
  if (accept === "video" && !file.type.startsWith("video/")) {
    throw new Error("Expected a video file.");
  }
  if (accept === "image" && !file.type.startsWith("image/")) {
    throw new Error("Expected an image file.");
  }
  if (accept === "model") {
    // The browser may not recognize .glb; trust extension OR mime.
    const ext = extname(file.name).toLowerCase();
    const okMime =
      file.type === "model/gltf-binary" ||
      file.type === "application/octet-stream" ||
      file.type === "";
    if (ext !== ".glb" && !okMime) {
      throw new Error("Expected a .glb model file.");
    }
  }

  const ext = pickExt(file, allowListFor(accept), accept);

  const dir = `${PUBLIC_DIR}/assets/${kind}`;
  await mkdir(dir, { recursive: true });
  const filename = `${slug}${ext}`;
  const diskPath = `${dir}/${filename}`;
  await Bun.write(diskPath, file);
  return `/public/assets/${kind}/${filename}`;
}

export async function writeDresscodeAsset(
  file: File,
  slug: string,
  accept: "video" | "image",
): Promise<string> {
  return writeFile(file, "dresscodes", slug, accept);
}

export async function writeVehicleAsset(
  file: File,
  slug: string,
  accept: "model" | "image",
): Promise<string> {
  return writeFile(file, "vehicles", slug, accept);
}

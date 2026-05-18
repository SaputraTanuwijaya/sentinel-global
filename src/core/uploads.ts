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

function pickExt(file: File, accepted: Record<string, string>): string {
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
  accept: "video" | "image",
): Promise<string> {
  if (file.size === 0) {
    throw new Error("Empty file.");
  }
  if (file.size > MAX_UPLOAD_BYTES) {
    throw new Error(
      `File exceeds ${Math.round(MAX_UPLOAD_BYTES / 1024 / 1024)} MB limit.`,
    );
  }
  const allowList = accept === "video" ? VIDEO_EXT : IMAGE_EXT;
  if (accept === "video" && !file.type.startsWith("video/")) {
    throw new Error("Expected a video file.");
  }
  if (accept === "image" && !file.type.startsWith("image/")) {
    throw new Error("Expected an image file.");
  }
  const ext = pickExt(file, allowList);

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
  accept: "video" | "image",
): Promise<string> {
  return writeFile(file, "vehicles", slug, accept);
}

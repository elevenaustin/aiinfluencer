import fs from "node:fs";
import path from "node:path";

const manifestPath = path.join(process.cwd(), "public", "uploads", "manifest.json");
const uploadsDir = path.join(process.cwd(), "public", "uploads");

export function ensureUploadsDir() {
  try {
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }
  } catch (e) {
    console.warn("Uploads directory check/creation skipped (expected in read-only environments):", e);
  }
}

export function readManifest(): Record<string, string> {
  try {
    ensureUploadsDir();
    if (!fs.existsSync(manifestPath)) {
      return {};
    }
    return JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  } catch (e) {
    console.warn("Manifest reading skipped or failed (expected in read-only environments):", e);
    return {};
  }
}

export function writeManifest(manifest: Record<string, string>) {
  ensureUploadsDir();
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), "utf8");
}

export function saveUploadedImage(imageKey: string, base64Data: string, filename: string) {
  ensureUploadsDir();

  const match = base64Data.match(/^data:(image\/[a-zA-Z+.-]+);base64,(.+)$/);
  if (!match) {
    throw new Error("Invalid image format");
  }

  const mimeType = match[1];
  const base64Content = match[2];
  const buffer = Buffer.from(base64Content, "base64");

  let ext = path.extname(filename).toLowerCase();
  if (!ext) {
    if (mimeType === "image/png") ext = ".png";
    else if (mimeType === "image/jpeg" || mimeType === "image/jpg") ext = ".jpg";
    else if (mimeType === "image/webp") ext = ".webp";
    else ext = ".png";
  }

  const savedFilename = `${imageKey}${ext}`;
  const filePath = path.join(uploadsDir, savedFilename);

  fs.writeFileSync(filePath, buffer);

  const manifest = readManifest();
  manifest[imageKey] = `/uploads/${savedFilename}?t=${Date.now()}`;
  writeManifest(manifest);

  return manifest;
}

export function deleteUploadedImage(imageKey: string) {
  ensureUploadsDir();
  const manifest = readManifest();
  const currentPath = manifest[imageKey];

  if (currentPath) {
    const urlPart = currentPath.split("?")[0];
    const filename = path.basename(urlPart);
    const filePath = path.join(uploadsDir, filename);

    if (fs.existsSync(filePath)) {
      try {
        fs.unlinkSync(filePath);
      } catch (e) {
        console.error(`Error deleting file: ${filePath}`, e);
      }
    }

    delete manifest[imageKey];
    writeManifest(manifest);
  }

  return manifest;
}

export function deleteAllUploadedImages() {
  ensureUploadsDir();
  const manifest = readManifest();

  for (const key of Object.keys(manifest)) {
    const currentPath = manifest[key];
    const urlPart = currentPath.split("?")[0];
    const filename = path.basename(urlPart);
    const filePath = path.join(uploadsDir, filename);

    if (fs.existsSync(filePath)) {
      try {
        fs.unlinkSync(filePath);
      } catch (e) {
        console.error(`Error deleting file: ${filePath}`, e);
      }
    }
  }

  writeManifest({});
  return {};
}

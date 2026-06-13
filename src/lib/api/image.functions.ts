import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const getImageManifest = createServerFn({ method: "GET" })
  .handler(async () => {
    const { readManifest } = await import("../image.server");
    return readManifest();
  });

export const uploadImage = createServerFn({ method: "POST" })
  .validator(
    z.object({
      imageKey: z.string(),
      base64Data: z.string(),
      filename: z.string(),
    })
  )
  .handler(async ({ data }) => {
    const { saveUploadedImage } = await import("../image.server");
    const manifest = saveUploadedImage(data.imageKey, data.base64Data, data.filename);
    return { success: true, manifest };
  });

export const resetImage = createServerFn({ method: "POST" })
  .validator(
    z.object({
      imageKey: z.string(),
    })
  )
  .handler(async ({ data }) => {
    const { deleteUploadedImage } = await import("../image.server");
    const manifest = deleteUploadedImage(data.imageKey);
    return { success: true, manifest };
  });

export const resetAllImages = createServerFn({ method: "POST" })
  .handler(async () => {
    const { deleteAllUploadedImages } = await import("../image.server");
    const manifest = deleteAllUploadedImages();
    return { success: true, manifest };
  });

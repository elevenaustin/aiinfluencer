import { createContext, useContext, useState } from "react";
import { useRouter } from "@tanstack/react-router";
import { toast } from "sonner";
import { uploadImage, resetImage, resetAllImages } from "@/lib/api/image.functions";

type EditorContextType = {
  editMode: boolean;
  setEditMode: (val: boolean) => void;
  manifest: Record<string, string>;
  isUploading: string | null;
  handleUpload: (imageKey: string, file: File) => Promise<void>;
  handleReset: (imageKey: string) => Promise<void>;
  handleResetAll: () => Promise<void>;
};

const EditorContext = createContext<EditorContextType | null>(null);

export function EditorProvider({
  children,
  initialManifest,
}: {
  children: React.ReactNode;
  initialManifest: Record<string, string>;
}) {
  const [editMode, setEditMode] = useState(false);
  const [isUploading, setIsUploading] = useState<string | null>(null);
  const router = useRouter();

  const handleUpload = async (imageKey: string, file: File) => {
    setIsUploading(imageKey);
    const reader = new FileReader();

    const uploadPromise = new Promise<void>((resolve, reject) => {
      reader.onload = async () => {
        try {
          const base64Data = reader.result as string;
          await uploadImage({
            data: {
              imageKey,
              base64Data,
              filename: file.name,
            },
          });
          await router.invalidate();
          resolve();
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = () => reject(new Error("File reading failed"));
      reader.readAsDataURL(file);
    });

    toast.promise(uploadPromise, {
      loading: `Uploading image for ${imageKey}...`,
      success: `Image for "${imageKey}" updated successfully!`,
      error: (err) => `Upload failed: ${err instanceof Error ? err.message : "Unknown error"}`,
    });

    try {
      await uploadPromise;
    } catch (e) {
      console.error(e);
    } finally {
      setIsUploading(null);
    }
  };

  const handleReset = async (imageKey: string) => {
    const resetPromise = (async () => {
      await resetImage({ data: { imageKey } });
      await router.invalidate();
    })();

    toast.promise(resetPromise, {
      loading: `Reverting ${imageKey}...`,
      success: `Image for "${imageKey}" reverted to default!`,
      error: "Failed to revert image",
    });
  };

  const handleResetAll = async () => {
    const resetPromise = (async () => {
      await resetAllImages();
      await router.invalidate();
    })();

    toast.promise(resetPromise, {
      loading: "Reverting all custom images...",
      success: "All images reverted to default!",
      error: "Failed to revert images",
    });
  };

  return (
    <EditorContext.Provider
      value={{
        editMode,
        setEditMode,
        manifest: initialManifest,
        isUploading,
        handleUpload,
        handleReset,
        handleResetAll,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
}

export function useEditor() {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error("useEditor must be used within EditorProvider");
  }
  return context;
}

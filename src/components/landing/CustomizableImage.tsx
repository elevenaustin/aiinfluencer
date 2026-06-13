import { useEditor } from "./EditorProvider";
import { Upload, RotateCcw } from "lucide-react";
import React, { useRef } from "react";

interface CustomizableImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  imageKey: string;
  defaultSrc: string;
}

export function CustomizableImage({
  imageKey,
  defaultSrc,
  className = "",
  ...props
}: CustomizableImageProps) {
  const { editMode, manifest, isUploading, handleUpload, handleReset } = useEditor();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const currentSrc = manifest[imageKey] ?? defaultSrc;
  const isCustomized = !!manifest[imageKey];
  const uploadingThis = isUploading === imageKey;

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleUpload(imageKey, files[0]);
    }
  };

  const triggerUpload = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    fileInputRef.current?.click();
  };

  const triggerReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    handleReset(imageKey);
  };

  if (!editMode) {
    return <img src={currentSrc} className={className} {...props} />;
  }

  return (
    <div className={`relative group/image overflow-hidden ${className}`}>
      {/* Actual Image */}
      <img
        src={currentSrc}
        className={`w-full h-full object-cover transition duration-300 ${uploadingThis ? "opacity-40 blur-sm" : "group-hover/image:scale-[1.02]"}`}
        {...props}
      />

      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={onFileChange}
        accept="image/*"
        className="hidden"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 z-10 p-2">
        {uploadingThis ? (
          <div className="flex flex-col items-center gap-2 text-white">
            <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            <span className="text-xs font-semibold">Uploading...</span>
          </div>
        ) : (
          <>
            <button
              onClick={triggerUpload}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold rounded-lg shadow transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5" />
              Upload Image
            </button>
            {isCustomized && (
              <button
                onClick={triggerReset}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-destructive hover:bg-destructive/90 text-destructive-foreground text-xs font-semibold rounded-lg shadow transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset
              </button>
            )}
            <span className="text-[10px] text-white/60 text-center select-none font-medium mt-1">
              Key: {imageKey}
            </span>
          </>
        )}
      </div>
    </div>
  );
}

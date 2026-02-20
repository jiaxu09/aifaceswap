"use client";

import { useCallback, useState, useRef, useEffect } from "react";
import { Upload, FileVideo, Image, X } from "lucide-react";

interface UploadZoneProps {
  label: string;
  description: string;
  accept: string;
  icon: "video" | "image";
  file: File | null;
  onFileChange: (file: File | null) => void;
}

export default function UploadZone({
  label,
  description,
  accept,
  icon,
  file,
  onFileChange,
}: UploadZoneProps) {
  const [dragOver, setDragOver] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Generate preview URL when file changes
  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setPreviewUrl(null);
    }
  }, [file]);

  const isVideo = file?.type.startsWith("video/");
  const isImage = file?.type.startsWith("image/");

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile) onFileChange(droppedFile);
    },
    [onFileChange]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setDragOver(false);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) onFileChange(selectedFile);
  };

  const IconComponent = icon === "video" ? FileVideo : Image;

  return (
    <div
      className={`upload-zone rounded-2xl text-center cursor-pointer transition-all duration-300 overflow-hidden ${
        dragOver ? "drag-over" : ""
      } ${file ? "border-green-500/40 bg-green-500/5" : ""}`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onClick={() => inputRef.current?.click()}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={handleInputChange}
        className="hidden"
      />

      {file && previewUrl ? (
        <div className="relative group">
          {/* Preview */}
          {isImage && (
            <img
              src={previewUrl}
              alt={file.name}
              className="w-full aspect-[3/4] object-cover"
            />
          )}
          {isVideo && (
            <video
              src={previewUrl}
              className="w-full aspect-[3/4] object-cover"
              muted
              playsInline
              onLoadedData={(e) => {
                // Show a frame from the video
                const video = e.currentTarget;
                video.currentTime = 0.5;
              }}
            />
          )}
          {!isImage && !isVideo && (
            <div className="w-full aspect-[3/4] flex items-center justify-center bg-white/5">
              <FileVideo className="w-12 h-12 text-green-400" />
            </div>
          )}

          {/* Overlay info */}
          <div className="p-3 space-y-1">
            <p className="text-xs font-medium text-green-400 truncate">
              {file.name}
            </p>
            <p className="text-xs text-white/40">
              {(file.size / (1024 * 1024)).toFixed(2)} MB
            </p>
          </div>

          {/* Remove button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onFileChange(null);
              if (inputRef.current) inputRef.current.value = "";
            }}
            className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/60 hover:bg-red-500/80 flex items-center justify-center transition-colors"
          >
            <X className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
      ) : (
        <div className="p-8 space-y-3">
          <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto">
            <IconComponent className="w-7 h-7 text-purple-400" />
          </div>
          <div>
            <p className="text-sm font-medium text-white/80">{label}</p>
            <p className="text-xs text-white/40 mt-1">{description}</p>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-white/30">
            <Upload className="w-3 h-3" />
            <span>Drag & drop or click to browse</span>
          </div>
        </div>
      )}
    </div>
  );
}

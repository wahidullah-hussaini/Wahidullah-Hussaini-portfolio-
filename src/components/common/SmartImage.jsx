
import { useState, useEffect } from "react";
import { LuImage } from "react-icons/lu";

export default function SmartImage({
  src,
  alt = "Portfolio photo",
  fileLabel,
  priority = false,
  className = "",
  imgClassName = "",
}) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  return (
    <div
      className={`relative overflow-hidden bg-surface ${className}`}
    >
      {failed || !src ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 border border-dashed border-line p-4 text-center">
          <LuImage className="h-6 w-6 text-muted" />

          <p className="text-xs text-muted">
            Add photo
          </p>

          {fileLabel && (
            <p className="font-mono text-xs text-accent">
              {fileLabel}
            </p>
          )}
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      )}
    </div>
  );
}

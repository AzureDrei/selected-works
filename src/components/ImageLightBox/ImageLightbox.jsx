import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import "./ImageLightbox.css";

export default function ImageLightbox({
  src,
  alt = "Project preview",
  isOpen,
  onClose,
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !src) return null;

  return createPortal(
    <div className="image-lightbox" onClick={onClose} role="presentation">
      <button
        type="button"
        className="image-lightbox__close"
        onClick={onClose}
        aria-label="Close enlarged image"
      >
        <X size={24} />
      </button>

      <img
        className="image-lightbox__image"
        src={src}
        alt={alt}
        onClick={(event) => event.stopPropagation()}
      />
    </div>,
    document.body,
  );
}

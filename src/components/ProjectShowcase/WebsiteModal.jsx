import { useEffect, useState, useCallback } from "react";
import ImageLightbox from "../ImageLightBox/ImageLightbox.jsx";
import "./WebsiteShowcase.css";

function WebsiteModal({ project, onClose }) {
  const [activeImage, setActiveImage] = useState(null);

  const closeLightbox = useCallback(() => {
    setActiveImage(null);
  }, []);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        if (activeImage) {
          closeLightbox();
        } else {
          onClose();
        }
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose, activeImage, closeLightbox]);

  useEffect(() => {
    setActiveImage(null);
  }, [project]);

  if (!project) return null;

  const openLightbox = (src, alt) => {
    setActiveImage({ src, alt });
  };

  return (
    <>
      <div
        className="project-modal-backdrop"
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) onClose();
        }}
      >
        <article
          className="project-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <button
            className="project-modal-close"
            onClick={onClose}
            aria-label="Close project details"
          >
            ×
          </button>

          <div className="project-modal-hero">
            <img
              src={project.image}
              alt={project.title}
              onClick={() => openLightbox(project.image, project.title)}
            />
          </div>

          <div className="project-modal-content">
            <span className="project-eyebrow">
              {project.platform} / PROJECT DETAILS
            </span>

            <h2 id="project-modal-title">{project.title}</h2>

            <p className="project-modal-description">{project.overview}</p>

            <h3>Tools & Technologies</h3>

            <div className="project-tools">
              {project.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>

            <h3>Project Gallery</h3>

            <div className="project-modal-gallery">
              {project.gallery.map((image, index) => (
                <img
                  key={`${image}-${index}`}
                  src={image}
                  alt={`${project.title} supporting image ${index + 1}`}
                  loading="lazy"
                  onClick={() =>
                    openLightbox(
                      image,
                      `${project.title} supporting image ${index + 1}`,
                    )
                  }
                />
              ))}
            </div>

            {(project.demoUrl || project.githubUrl) && (
              <div className="project-modal-links">
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noreferrer">
                    View Live Project ↗
                  </a>
                )}

                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    View Source Code ↗
                  </a>
                )}
              </div>
            )}
          </div>
        </article>
      </div>

      <ImageLightbox
        src={activeImage?.src}
        alt={activeImage?.alt}
        isOpen={Boolean(activeImage)}
        onClose={closeLightbox}
      />
    </>
  );
}

export default WebsiteModal;

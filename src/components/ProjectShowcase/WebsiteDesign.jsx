import { useState } from "react";
import { websiteProjects } from "./websiteData";
import WebsiteModal from "./WebsiteModal";
import "./WebsiteShowcase.css";

function WebsiteDesign({ onBack }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="project-showcase">
      <div className="project-showcase-inner">
        <button type="button" className="project-back-button" onClick={onBack}>
          ← Back to Selected Works
        </button>

        <header className="project-showcase-heading">
          <span className="project-eyebrow">SELECTED WORKS / WEB DESIGN</span>

          <h1>Digital Experiences.</h1>

          <p>
            Websites and landing pages designed to bring ideas to life through
            thoughtful design and functionality.
          </p>
        </header>

        <div className="automation-project-grid">
          {websiteProjects.map((project) => (
            <button
              type="button"
              className="automation-project-card"
              key={project.id}
              onClick={() => setSelectedProject(project)}
            >
              <div className="automation-project-image">
                <img src={project.image} alt={project.title} loading="lazy" />

                <span className="automation-project-open">↗</span>
              </div>

              <div className="automation-project-info">
                <div>
                  <span className="project-eyebrow">{project.platform}</span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>
                </div>

                <span className="automation-project-arrow">↗</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedProject && (
        <WebsiteModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default WebsiteDesign;

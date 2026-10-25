import { useState, useCallback } from "react";
import { automationProjects } from "./websiteData";
import WebsiteModal from "./WebsiteModal.jsx";

import "./WebsiteShowcase.css";

function AutomationAI({ onBack }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const [activeImage, setActiveImage] = useState(null);

  const closeLightbox = useCallback(() => {
    setActiveImage(null);
  }, []);

  return (
    <section className="project-showcase">
      <div className="project-showcase-inner">
        <button className="project-back-button" onClick={onBack}>
          ← Back to Selected Works
        </button>

        <header className="project-showcase-heading">
          <span className="project-eyebrow">
            SELECTED WORKS / AUTOMATION & AI
          </span>

          <h1>Workflow Automation.</h1>

          <p>
            A collection of automated workflows, integrations, and connected
            digital systems.
          </p>
        </header>

        {automationProjects.map((group, groupIndex) => (
          <section className="automation-platform" key={group.platform}>
            <div className="automation-platform-heading">
              <div>
                <span className="project-eyebrow">
                  PLATFORM / 0{groupIndex + 1}
                </span>

                <h2>{group.platform}</h2>

                <p>{group.description}</p>
              </div>

              <span className="automation-project-count">
                {String(group.projects.length).padStart(2, "0")} PROJECTS
              </span>
            </div>

            <div className="automation-project-grid">
              {group.projects.map((project, index) => (
                <button
                  className="automation-project-card"
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="automation-project-image">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                    />

                    <span className="automation-project-open">↗</span>
                  </div>

                  <div className="automation-project-info">
                    <div>
                      <span className="project-eyebrow">
                        {group.platform} / {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3>{project.title}</h3>

                      <p>{project.description}</p>
                    </div>

                    <span className="automation-project-arrow">↗</span>
                  </div>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>

      <WebsiteModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default AutomationAI;

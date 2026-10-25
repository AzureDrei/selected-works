import "./CreativeGallery.css";
import { useState, useEffect } from "react";
import AutomationAI from "../ProjectShowcase/AutomationAI";
//import AIExperience from "../ProjectShowcase/AIExperience";
import WebsiteDesign from "../ProjectShowcase/WebsiteDesign";

const creativeProjects = [
  {
    id: 1,
    slug: "website-design",
    title: "Website Design",
    category: "WEB DESIGN",
    description: "Landing pages and digital experiences.",
    image: "/pictures/web-design/havenstone-realty-1.jpg",
  },
  {
    id: 2,
    slug: "automation",
    title: "Workflow Automation",
    category: "AUTOMATION",
    description: "Connected workflows and integrations.",
    image: "/pictures/automation/QuoteCanvas.jpg",
  },
  {
    id: 3,
    slug: "ai-experiences",
    title: "AI Experiences",
    category: "ARTIFICIAL INTELLIGENCE",
    description: "Intelligent tools and digital experiences.",
    image: "/pictures/web-design/coming-soon.jpg",
    disabled: true,
  },
];

function CreativeGallery() {
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [activeCategory]);

  const handleBack = () => {
    setActiveCategory(null);
  };

  if (activeCategory === "automation") {
    return <AutomationAI onBack={handleBack} />;
  }

  if (activeCategory === "ai-experiences") {
    return <AIExperience onBack={handleBack} />;
  }

  if (activeCategory === "website-design") {
    return <WebsiteDesign onBack={handleBack} />;
  }
  return (
    <section className="creative-gallery" id="creative-gallery">
      <div className="creative-gallery-inner">
        <div className="creative-gallery-heading">
          <span className="creative-gallery-label">SELECTED WORKS / 01—03</span>

          <h2>Selected Works.</h2>

          <p>
            A selection of websites, automations, and intelligent digital
            experiences.
          </p>
        </div>

        <div className="creative-gallery-grid">
          {creativeProjects.map((project, index) => (
            <button
              type="button"
              className={`creative-gallery-card creative-gallery-card-${index + 1} ${
                project.disabled ? "creative-gallery-card-disabled" : ""
              }`}
              key={project.id}
              onClick={() => {
                if (!project.disabled) {
                  setActiveCategory(project.slug);
                }
              }}
              disabled={project.disabled}
              aria-label={
                project.disabled
                  ? `${project.title} — coming soon`
                  : `Explore ${project.title}`
              }
            >
              <div className="creative-gallery-image">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>

              <div className="creative-gallery-card-info">
                <div>
                  <span className="creative-gallery-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>
                </div>

                <span className="creative-gallery-index">0{project.id}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CreativeGallery;

import { FiArrowUpRight, FiGithub, FiGlobe, FiPlay } from "react-icons/fi";
import { projects } from "../data/portfolio";
import { SectionHeading } from "./PortfolioUI";
import ProjectArtwork from "./ProjectArtwork";
export default function ProjectsSection() {
  return (
    <section id="projects" className="portfolio-section">
      <SectionHeading eyebrow="Featured" title="Selected Projects">
        <span className="section-note">01 — 06</span>
      </SectionHeading>
      <p className="section-description">
        A selection of projects spanning web development, systems programming,
        computer vision, and computational biology.
      </p>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <article
            id={`project-${i}`}
            className="project-card"
            key={project.title}
          >
            <ProjectArtwork index={i} />
            <div className="project-body">
              <div className="project-meta">
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>
              <div className="project-title-row">
                <h3>{project.title}</h3>
                <div className="project-icon-links">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} ${project.videoUrl ? "video demo" : "demo"}`}
                    >
                      {project.videoUrl ? <FiPlay /> : <FiGlobe />}
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code`}
                    >
                      <FiGithub />
                    </a>
                  )}
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                <p>Technologies</p>
                <div className="tags">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-footer">
                <span className="project-index">PROJECT / 0{i + 1}</span>
                <a
                  href={project.demoUrl || project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.videoUrl
                    ? "Watch Demo"
                    : project.demoUrl
                      ? "View Project"
                      : "View Code"}
                  <FiArrowUpRight />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

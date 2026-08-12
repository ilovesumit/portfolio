import "./Projects.css";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import portfolio from "../../assets/images/portfolio.png";
import reactportfolio from "../../assets/images/reactportfolio.png";
import weather from "../../assets/images/weatherapp.png";

const projects = [
  {
    title: "Personal Portfolio",
    image: portfolio,
    description:
      "Responsive portfolio website built using HTML, CSS and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ilovesumit",
    demo: "https://sumit-port12-folio.netlify.app/",
  },

  {
    title: "React Portfolio",
    image: reactportfolio,
    description:
      "Modern React portfolio with Framer Motion animations and responsive design.",
    tech: ["React", "CSS", "Framer Motion"],
    github: "https://github.com/ilovesumit",
    demo: null,
  },

  {
    title: "Weather App",
    image: weather,
    description:
      "Weather application using REST API with a modern responsive UI.",
    tech: ["React", "API", "CSS"],
    github: "https://github.com/ilovesumit",
    demo: null,
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <div className="section-title">
          <h2>Projects</h2>
          <span>Some Things I&apos;ve Built</span>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <motion.div
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
              }}
            >
              <img src={project.image} alt={`${project.title} preview`} loading="lazy" decoding="async" />

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-buttons">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <FaGithub aria-hidden="true" /> GitHub
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title} live demo`}
                    >
                      <FaExternalLinkAlt aria-hidden="true" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;

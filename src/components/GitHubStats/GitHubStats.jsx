import "./GitHubStats.css";
import { motion } from "framer-motion";
import { FaArrowRight, FaGithub } from "react-icons/fa";

const pinnedProjects = [
  { title: "Personal Portfolio", description: "A responsive portfolio built with HTML, CSS, and JavaScript.", tech: ["HTML", "CSS", "JavaScript"] },
  { title: "React Portfolio", description: "A modern portfolio with smooth Framer Motion animations.", tech: ["React", "CSS", "Framer Motion"] },
  { title: "Weather App", description: "A responsive weather experience powered by a REST API.", tech: ["React", "REST API", "CSS"] },
];

function GitHubStats() {
  return (
    <section className="github" id="github">
      <div className="github-container">
        <div className="section-title">
          <h2>GitHub Activity</h2>
          <span>My Coding Journey</span>
        </div>

        <motion.div className="stats-grid" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
          <a className="stat-card" href="https://github.com/ilovesumit" target="_blank" rel="noreferrer" aria-label="View Sumit's GitHub profile">
            <img src="https://github-readme-stats.vercel.app/api?username=ilovesumit&show_icons=true&theme=tokyonight&hide_border=true" alt="GitHub statistics for Sumit" loading="lazy" decoding="async" />
          </a>

          <div className="stat-card language-card">
            <div className="card-heading">
              <h3>Top Languages</h3>
              <span>Public repositories</span>
            </div>
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=ilovesumit&layout=compact&theme=tokyonight&hide_border=true" alt="Most-used languages in Sumit's public GitHub repositories" loading="lazy" decoding="async" />
            <p>Based on code in public repositories, not a measure of proficiency.</p>
          </div>
        </motion.div>

        <div className="pinned-heading">
          <h3>Pinned Projects</h3>
          <a href="#projects">Explore all projects <FaArrowRight aria-hidden="true" /></a>
        </div>

        <div className="pinned-grid">
          {pinnedProjects.map((project, index) => (
            <motion.article className="pinned-card" key={project.title} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: index * 0.1 }} viewport={{ once: true }}>
              <FaGithub className="github-icon" aria-hidden="true" />
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GitHubStats;

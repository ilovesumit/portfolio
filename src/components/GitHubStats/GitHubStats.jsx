import { useEffect, useState } from "react";
import "./GitHubStats.css";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaUsers,
  FaBook,
} from "react-icons/fa";

const GITHUB_USERNAME = "ilovesumit";

const pinnedProjects = [
  {
    title: "Personal Portfolio",
    description:
      "A responsive portfolio built with HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "React Portfolio",
    description:
      "A modern portfolio with smooth Framer Motion animations.",
    tech: ["React", "CSS", "Framer Motion"],
  },
  {
    title: "Weather App",
    description:
      "A responsive weather experience powered by a REST API.",
    tech: ["React", "REST API", "CSS"],
  },
];

function GitHubStats() {
  const [profile, setProfile] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const [profileResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
          ),
        ]);

        if (!profileResponse.ok || !reposResponse.ok) {
          throw new Error("Unable to fetch GitHub data");
        }

        const profileData = await profileResponse.json();
        const reposData = await reposResponse.json();

        setProfile(profileData);
        setRepositories(reposData);
      } catch (err) {
        console.error("GitHub API Error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const totalStars = repositories.reduce(
    (total, repo) => total + repo.stargazers_count,
    0
  );

  const totalForks = repositories.reduce(
    (total, repo) => total + repo.forks_count,
    0
  );

  const languages = repositories.reduce((languageList, repo) => {
    if (repo.language && !languageList.includes(repo.language)) {
      languageList.push(repo.language);
    }

    return languageList;
  }, []);

  return (
    <section className="github" id="github">
      <div className="github-container">

        {/* Section Heading */}
        <div className="section-title">
          <h2>GitHub Activity</h2>
          <span>My Coding Journey</span>
        </div>

        {/* GitHub Stats */}
        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          {loading ? (
            <div className="stat-card loading-card">
              <h3>Loading GitHub statistics...</h3>
              <p>Please wait a moment.</p>
            </div>
          ) : error ? (
            <div className="stat-card error-card">
              <FaGithub />

              <h3>GitHub Statistics</h3>

              <p>
                GitHub statistics are temporarily unavailable.
              </p>

              <a
                href="https://github.com/ilovesumit"
                target="_blank"
                rel="noreferrer"
              >
                Visit GitHub Profile
              </a>
            </div>
          ) : (
            <>
              {/* Repositories */}
              <div className="stat-card">
                <FaBook className="stat-icon" />

                <h3>Public Repositories</h3>

                <strong>
                  {profile?.public_repos ?? 0}
                </strong>

                <p>
                  Public projects available on GitHub
                </p>
              </div>

              {/* Stars */}
              <div className="stat-card">
                <FaStar className="stat-icon" />

                <h3>Total Stars</h3>

                <strong>
                  {totalStars}
                </strong>

                <p>
                  Stars received across my repositories
                </p>
              </div>

              {/* Forks */}
              <div className="stat-card">
                <FaCodeBranch className="stat-icon" />

                <h3>Total Forks</h3>

                <strong>
                  {totalForks}
                </strong>

                <p>
                  Repository forks across my projects
                </p>
              </div>

              {/* Followers */}
              <div className="stat-card">
                <FaUsers className="stat-icon" />

                <h3>Followers</h3>

                <strong>
                  {profile?.followers ?? 0}
                </strong>

                <p>
                  GitHub followers
                </p>
              </div>
            </>
          )}
        </motion.div>

        {/* Languages */}
        {!loading && !error && (
          <motion.div
            className="languages-section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="card-heading">
              <h3>Languages Used</h3>

              <span>
                Based on public repositories
              </span>
            </div>

            <div className="languages-list">
              {languages.length > 0 ? (
                languages.map((language) => (
                  <span key={language}>
                    {language}
                  </span>
                ))
              ) : (
                <span>No language data available</span>
              )}
            </div>
          </motion.div>
        )}

        {/* GitHub Profile */}
        <motion.a
          className="github-profile-button"
          href="https://github.com/ilovesumit"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FaGithub />

          <span>View My GitHub Profile</span>

          <FaArrowRight />
        </motion.a>

        {/* Pinned Projects */}
        <div className="pinned-heading">
          <h3>Pinned Projects</h3>

          <a href="#projects">
            Explore all projects <FaArrowRight aria-hidden="true" />
          </a>
        </div>

        <div className="pinned-grid">
          {pinnedProjects.map((project, index) => (
            <motion.article
              className="pinned-card"
              key={project.title}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
            >
              <FaGithub
                className="github-icon"
                aria-hidden="true"
              />

              <h4>{project.title}</h4>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default GitHubStats;
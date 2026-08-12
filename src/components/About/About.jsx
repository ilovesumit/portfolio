import "./About.css";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaBrain,
  FaProjectDiagram,
} from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="section-title">
          <h2>About Me</h2>
          <span>Who I Am</span>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Computer Engineering Graduate & React Developer</h3>

            <p>
              Hi, I&apos;m <strong>Sumit Kumar Mandal</strong>, a Computer Engineering
              diploma graduate passionate about programming, web development,
              and Artificial Intelligence.
            </p>

            <p>
              I enjoy building responsive web applications using React,
              JavaScript, and Node.js while continuously learning new
              technologies and improving my development skills.
            </p>

            <p>
              My goal is to become a professional Full Stack Developer and build
              innovative software that solves real-world problems.
            </p>
          </div>

          <div className="about-cards">
            <div className="card">
              <FaGraduationCap />
              <h4>Education</h4>
              <p>Diploma in Computer Engineering</p>
            </div>

            <div className="card">
              <FaLaptopCode />
              <h4>Experience</h4>
              <p>React & Frontend Projects</p>
            </div>

            <div className="card">
              <FaBrain />
              <h4>Learning</h4>
              <p>React • Node.js • AI</p>
            </div>

            <div className="card">
              <FaProjectDiagram />
              <h4>Projects</h4>
              <p>Portfolio • React Apps • AI</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;

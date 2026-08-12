import "./Hero.css";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowDown,
} from "react-icons/fa";

import { Link } from "react-scroll";

import profile from "../../assets/images/profile.jpg";
import resume from "../../assets/resume.pdf";

function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background Glow */}
      <div className="hero-bg">
        <span className="blob blob1"></span>
        <span className="blob blob2"></span>
        <span className="blob blob3"></span>
      </div>

      <div className="hero-container">
        {/* LEFT SIDE */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="greeting"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span aria-hidden="true">👋 </span>Hello, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Sumit Kumar
            <span> Mandal</span>
          </motion.h1>

          <TypeAnimation
            sequence={[
              "Frontend React Developer",
              2000,
              "Computer Engineering Graduate",
              2000,
              "BSc CSIT Student",
              2000,
              "AI Enthusiast",
              2000,
              "Full Stack Learner",
              2000,
            ]}
            wrapper="h2"
            speed={45}
            repeat={Infinity}
            className="typing"
          />

          <p className="hero-description">
            Passionate about creating beautiful, responsive and modern web
            applications using React, JavaScript and Node.js. I enjoy solving
            real-world problems while continuously learning new technologies.
          </p>

          <div className="hero-buttons">
            <motion.a
              href={resume}
              download
              className="btn-primary"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload aria-hidden="true" />
              Download Resume
            </motion.a>

            <motion.a
              href="mailto:mandalsumitraj8@gmail.com"
              className="btn-secondary"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.a>
          </div>

          <div className="social-icons">
            <motion.a
              whileHover={{ y: -8, scale: 1.2 }}
              href="https://github.com/ilovesumit"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Sumit's GitHub profile"
            >
              <FaGithub aria-hidden="true" />
            </motion.a>

            <motion.a
              whileHover={{ y: -8, scale: 1.2 }}
              href="https://www.linkedin.com/in/sumit-mandal-a61793320"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Sumit's LinkedIn profile"
            >
              <FaLinkedin aria-hidden="true" />
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="image-wrapper"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
  src={profile}
  alt="Sumit Kumar Mandal"
  loading="eager"
/>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <motion.div
        className="scroll-down"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
      >
        <Link to="about" smooth duration={700} aria-label="Scroll to the About section">
          <FaArrowDown aria-hidden="true" />
        </Link>
      </motion.div>
    </section>
  );
}

export default Hero;

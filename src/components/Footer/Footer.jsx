import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-left">

          <h2>Sumit Kumar Mandal</h2>

          <p>
            Computer Engineering Graduate passionate about
            React, JavaScript, Node.js and Artificial Intelligence.
          </p>

        </div>

        <div className="footer-center">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#education">Education</a>

          <a href="#projects">Projects</a>

          <a href="#contact">Contact</a>

        </div>

        <div className="footer-right">

          <h3>Connect</h3>

          <div className="footer-socials">

            <a
              href="https://github.com/ilovesumit"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <FaGithub aria-hidden="true" />
            </a>

            <a
              href="https://www.linkedin.com/in/sumit-mandal-a61793320"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin aria-hidden="true" />
            </a>

            <a href="mailto:mandalsumitraj8@gmail.com" aria-label="Send an email">
              <FaEnvelope aria-hidden="true" />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Sumit Kumar Mandal. All Rights Reserved.
        </p>

      </div>

      <button
        className="top-btn"
        onClick={scrollTop}
        type="button"
        aria-label="Back to top"
      >
        <FaArrowUp aria-hidden="true" />
      </button>

    </footer>
  );
}

export default Footer;

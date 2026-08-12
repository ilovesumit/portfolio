import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import "./Navbar.css";

const navigationItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "github", label: "GitHub" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <Link className="logo" to="home" smooth duration={500} onClick={closeMenu}>
        Sumit
      </Link>

      <ul
        id="primary-navigation"
        className={isMenuOpen ? "nav-links active" : "nav-links"}
      >
        {navigationItems.map(({ id, label }) => (
          <li key={id}>
            <Link
              to={id}
              smooth
              duration={500}
              spy
              offset={-70}
              onClick={closeMenu}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="menu-icon"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
      >
        {isMenuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
      </button>
    </nav>
  );
}

export default Navbar;

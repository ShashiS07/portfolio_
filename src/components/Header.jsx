import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header fade-in">
      <div className="container nav-container">
        <h1 className="logo">Shashi Shekhar Singh</h1>
        
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <nav className={`nav-links ${isMenuOpen ? 'nav-active' : ''}`}>
          <ul>
            <li>
              <a href="#hero" onClick={toggleMenu}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>About</a>
            </li>
            <li>
              <a href="#achievements" onClick={toggleMenu}>Acheivements</a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>Projects</a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>Contact</a>
            </li>
            <li>
              <a
                href="/resume/Shashi_Shekhar_Singh.pdf"
                download="Shashi_Shekhar_Singh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMenu}
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

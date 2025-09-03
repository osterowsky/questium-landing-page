import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './Nav.css';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const navigate = useNavigate();

  const goToSection = (id: string) => {
    const isHome = window.location.hash === "#/" || window.location.hash === "";
  
    if (!isHome) {
      // navigate back home, then wait for component to render
      navigate("/"); // HashRouter will make this "#/"
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // already on homepage
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(prev => !prev);
  };

  // Close menu when clicking on a navigation link or outside
  const closeMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-logo">
          <h2><Link to="/" onClick={closeMenu}>questium</Link></h2>
        </div>
        
        {/* Desktop Navigation */}
        <div className="nav-links desktop-nav">
          <button
            className="nav-button"
            onClick={() => goToSection("FAQ")}
          >
            FAQ
          </button>
          <button
            className="nav-button"
            onClick={() => goToSection("About")}
          >
            About
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          ref={buttonRef}
          className={`hamburger ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div ref={menuRef} className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-content">
          <a href="/#FAQ" onClick={closeMenu}>FAQ</a>
          <a href="/#About" onClick={closeMenu}>About</a>
        </div>
      </div>
    </nav>
  );
}
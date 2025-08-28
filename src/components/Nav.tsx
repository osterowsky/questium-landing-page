import { useState, useRef, useEffect } from 'react';
import './Nav.css';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-logo">
          <h2><a href="/">questium</a></h2>
        </div>
        
        {/* Desktop Navigation */}
        <div className="nav-links desktop-nav">
          <button className="nav-button"><a href="/#FAQ">FAQ</a></button>
          <button className="nav-button"><a href="/#About">About</a></button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`hamburger ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div ref={menuRef} className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-content">
          <a href="/#FAQ" onClick={() => setIsMenuOpen(false)}>FAQ</a>
          <a href="/#About" onClick={() => setIsMenuOpen(false)}>About</a>
        </div>
      </div>
    </nav>
  );
}
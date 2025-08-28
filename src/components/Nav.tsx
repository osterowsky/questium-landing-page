import { useState, useRef, useEffect } from 'react';
import './Nav.css';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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
          <h2><a href="/" onClick={closeMenu}>questium</a></h2>
        </div>
        
        {/* Desktop Navigation */}
        <div className="nav-links desktop-nav">
          <button className="nav-button"><a href="/#FAQ" onClick={closeMenu}>FAQ</a></button>
          <button className="nav-button"><a href="/#About" onClick={closeMenu}>About</a></button>
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
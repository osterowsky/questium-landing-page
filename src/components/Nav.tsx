import './Nav.css';

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-logo">
          <h3><a href="#">questium</a></h3>
        </div>
        <div className="nav-links">
          <button className="nav-button"><a href="#FAQ">FAQ</a></button>
          <button className="nav-button"><a href="#About">About</a></button>
        </div>
      </div>
    </nav>
  );
};
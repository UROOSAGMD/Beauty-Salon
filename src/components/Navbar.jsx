import { useEffect, useState } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className="navbar"
      style={{
        background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
        boxShadow: scrolled ? '0 4px 25px rgba(0,0,0,0.15)' : '0 2px 20px rgba(0,0,0,0.1)',
      }}
    >
      <div className="nav-container">
        <a href="#home" className="logo">
          <i className="fas fa-spa"></i>
          <span>Glow</span>
        </a>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#services" onClick={handleLinkClick}>Services</a></li>
          <li><a href="#gallery" onClick={handleLinkClick}>Gallery</a></li>
          <li><a href="#testimonials" onClick={handleLinkClick}>Testimonials</a></li>
          <li><a href="#booking" onClick={handleLinkClick}>Booking</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
          <li className="nav-cta-mobile">
            <a href="#booking" className="nav-book-btn" onClick={handleLinkClick}>Book Appointment</a>
          </li>
        </ul>
        <a href="#booking" className="nav-book-btn nav-cta-desktop">Book Appointment</a>
        <div
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

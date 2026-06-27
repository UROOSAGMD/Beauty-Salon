import { useRef, useState } from 'react';

function Footer() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      formRef.current.reset();
    }, 2000);
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo">
            <i className="fas fa-spa"></i>
            <span>Glow</span>
          </div>
          <p>Where beauty meets excellence. Creating beautiful transformations with expert care and luxury services.</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-pinterest-p"></i></a>
          </div>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Bridal Makeup</a></li>
            <li><a href="#">Party Makeup</a></li>
            <li><a href="#">Hair Styling</a></li>
            <li><a href="#">Facial Mask</a></li>
            <li><a href="#">Nail Art</a></li>
          </ul>
        </div>
        <div className="footer-newsletter">
          <h4>Newsletter</h4>
          <p>Join our newsletter for beauty tips, exclusive offers, the latest beauty trends, and expert advice to help you look and feel your best.</p>
          <form className="newsletter-form" ref={formRef} onSubmit={handleNewsletterSubmit}>
            <input type="email" placeholder="Your email" required />
            <button
              type="submit"
              style={submitted ? { background: '#2ecc71' } : {}}
            >
              <i className={submitted ? 'fas fa-check' : 'fas fa-paper-plane'}></i>
            </button>
          </form>
        </div>
      </div>
      <div className="back-to-top">
        <button id="backToTop" title="Back to Top" onClick={handleBackToTop}>
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
      <div className="footer-bottom">
        <p>
          © 2026 Glow Beauty Salon. All Rights Reserved.
          <br />
          Designed &amp; Developed by{' '}
          <a
            href="https://www.linkedin.com/in/uroosa-ghulam-mahiuddin-994a66356/"
            target="_blank"
            rel="noopener noreferrer"
            className="credit-link"
          >
            Uroosa Ghulam Mohiuddin
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

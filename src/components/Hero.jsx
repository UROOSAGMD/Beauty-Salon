import { useEffect, useRef, useState } from 'react';
import { home1, home2, home3 } from '../assets/images';

const slidesData = [
  { src: home1, alt: 'Bridal Makeup' },
  { src: home2, alt: 'Party Makeup' },
  { src: home3, alt: 'Walima Makeup' },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 5000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleIndicatorClick = (index) => {
    clearInterval(intervalRef.current);
    goToSlide(index);
    startAutoSlide();
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background-slider">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </div>
      <div className="hero-overlay-gradient"></div>
      <div className="particles">
        {Array.from({ length: 8 }).map((_, i) => (
          <div className="particle" key={i}></div>
        ))}
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          Discover Your <span className="highlight">Natural Beauty</span>
        </h1>
        <p className="hero-subtitle">
          Experience luxury bridal, party makeup &amp; beauty treatments
        </p>
        <div className="hero-buttons">
          <a href="#booking" className="btn btn-primary">
            <i className="fas fa-calendar-check"></i> Book Appointment
          </a>
          <a href="#services" className="btn btn-secondary">
            <i className="fas fa-play"></i> View Services
          </a>
        </div>
      </div>
      <div className="slide-indicators">
        {slidesData.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleIndicatorClick(index)}
          ></span>
        ))}
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
}

export default Hero;

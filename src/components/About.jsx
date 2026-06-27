import { salon } from '../assets/images';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text reveal">
            <span className="section-tag">About</span>
            <h2>Your Beauty Our <span className="highlight">Passion</span></h2>
            <p>
              At Glow Beauty Salon, we believe every woman deserves to feel
              beautiful and confident. Our team of certified professionals
              brings years of experience and passion to every service.
            </p>
            <ul className="features-list">
              <li><i className="fas fa-check"></i> Certified Professional Staff</li>
              <li><i className="fas fa-check"></i> Premium Quality Products</li>
              <li><i className="fas fa-check"></i> Hygienic Environment</li>
              
            </ul>
            <a href="#booking" className="btn btn-primary">Book Now</a>
          </div>
          <div className="about-image reveal">
            <div className="image-frame">
              <img src={salon} alt="Salon Interior" />
            </div>
            <div className="experience-badge">
              <span className="years">15+</span>
              <span className="text">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

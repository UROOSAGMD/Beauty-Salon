import { review3, review1, review2 } from '../assets/images';

const testimonialsData = [
  {
    text: '"Absolutely love this place! The staff is so professional and friendly. My bridal makeup was perfect!"',
    img: review3,
    name: 'Sarah Ahsan',
    role: 'Bride',
    active: true,
  },
  {
    text: '"Best party makeup I have ever had! Everyone complimented me at the event. Highly recommend!"',
    img: review1,
    name: 'Tuba Fatima',
    role: 'Party Client',
    active: false,
  },
  {
    text: '"The facial mask treatment was amazing. My skin has never felt so smooth and glowing!"',
    img: review2,
    name: 'Aresha Atif',
    role: 'Facial Client',
    active: false,
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Testimonials</span>
          <h2>Client <span className="highlight">Reviews</span></h2>
          <p>Hear what our happy clients say about their Glow Beauty Salon experience.</p>
        </div>
        <div className="testimonials-slider">
          <div className="testimonials-grid">
            {testimonialsData.map((t) => (
              <div className={`testimonial-card ${t.active ? 'active' : ''}`} key={t.name}>
                <div className="card-content">
                  <div className="stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <i className="fas fa-star" key={i}></i>
                    ))}
                  </div>
                  <p>{t.text}</p>
                  <div className="client-info">
                    <img src={t.img} alt="Client" />
                    <div>
                      <h4>{t.name}</h4>
                      <span>{t.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

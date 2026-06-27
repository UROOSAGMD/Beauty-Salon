const servicesData = [
  { icon: 'fa-cut', title: 'Hair Styling', desc: 'Cut, color, and styling by expert stylists', price: 'From Rs 2,500' },
  { icon: 'fa-hand-sparkles', title: 'Manicure & Pedicure', desc: 'Premium nail care and artistic designs', price: 'From Rs 1,500' },
  { icon: 'fa-face-smile', title: 'Facial Treatment', desc: 'Rejuvenating facials for glowing skin', price: 'From Rs 3,500' },
  { icon: 'fa-eye', title: 'Makeup Artistry', desc: 'Bridal and occasion makeup services', price: 'From Rs 8,000' },
  { icon: 'fa-hot-tub', title: 'Spa & Massage', desc: 'Relaxing body treatments and massages', price: 'From Rs 4,000' },
  { icon: 'fa-wand-magic-sparkles', title: 'Waxing', desc: 'Smooth and professional hair removal', price: 'From Rs 1,200' },
];

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Services</span>
          <h2>Beauty <span className="highlight">Treatments</span></h2>
          <p>Professional services tailored to enhance your natural beauty and confidence.</p>
        </div>
        <div className="services-grid">
          {servicesData.map((service) => (
            <div className="service-card reveal" key={service.title}>
              <div className="service-icon">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <span className="price">{service.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

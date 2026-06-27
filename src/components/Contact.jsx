import { contactMakeupBg } from '../assets/images';

const contactInfo = [
  { icon: 'fa-phone', title: 'Call Us', content: '03345684903' },
  { icon: 'fa-envelope', title: 'Email Us', content: 'hello@glowsalon.com' },
  { icon: 'fa-map-marker-alt', title: 'Visit Us', content: <>123 Beauty Street,<br />Glam City</> },
  { icon: 'fa-clock', title: 'Opening Hours', content: <>Mon - Sat<br />9:00 AM - 7:00 PM</> },
];

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-bg">
        <img src={contactMakeupBg} alt="Contact Background" />
      </div>
      <div className="contact-overlay"></div>

      <div className="contact-container">
        <div className="contact-header">
          <div className="contact-tag">
            <span className="line"></span>
            Get In Touch
            <span className="line"></span>
          </div>
          <h1>We'd Love To Hear From <span className="highlight">You</span></h1>
          <p>Have questions or want to book an appointment? We are here to help and make you feel beautiful.</p>
        </div>

        <div className="contact-info-grid">
          {contactInfo.map((item) => (
            <div className="contact-info-item" key={item.title}>
              <div className="info-icon">
                <i className={`fas ${item.icon}`}></i>
              </div>
              <div className="info-text">
                <h4>{item.title}</h4>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;

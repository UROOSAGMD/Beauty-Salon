import { useEffect, useRef, useState } from 'react';

const SERVICE_LABELS = {
  bridal: 'Bridal Makeup',
  party: 'Party Makeup',
  hair: 'Hair Styling',
  facial: 'Facial Mask',
  nails: 'Manicure/Pedicure',
  spa: 'Spa & Massage',
  waxing: 'Waxing',
};

const EXPERT_LABELS = {
  maria: 'Maria - Makeup Artist',
  sana: 'Sana - Hair Stylist',
  aisha: 'Aisha - Nail Expert',
  zara: 'Zara - Spa Therapist',
};

const initialForm = {
  name: '',
  email: '',
  phone: '',
  service: '',
  expert: '',
  time: '',
  date: '',
  special: '',
};

function Booking({ onBookingSuccess }) {
  const [today, setToday] = useState('');
  const [placeholderActive, setPlaceholderActive] = useState({
    service: true,
    expert: true,
    date: true,
    time: true,
  });
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  useEffect(() => {
    setToday(new Date().toISOString().split('T')[0]);
  }, []);

  const handlePlaceholderChange = (field) => (e) => {
    setPlaceholderActive((prev) => ({
      ...prev,
      [field]: !e.target.value,
    }));
  };

  const handleChange = (field) => (e) => {
    let value = e.target.value;

    // Name: letters and spaces only (allow common name characters like apostrophe/hyphen)
    if (field === 'name') {
      value = value.replace(/[^a-zA-Z\s'-]/g, '');
    }

    // Phone: digits, spaces, +, - only
    if (field === 'phone') {
      value = value.replace(/[^0-9+\s-]/g, '');
    }

    setFormData((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    const nameValue = formData.name.trim();
    if (!nameValue) {
      newErrors.name = 'Name is required';
    } else if (!/^[a-zA-Z\s'-]+$/.test(nameValue)) {
      newErrors.name = 'Name can only contain letters';
    } else if (nameValue.length < 2) {
      newErrors.name = 'Name is too short';
    }

    const emailValue = formData.email.trim();
    if (!emailValue) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      newErrors.email = 'Enter a valid email address';
    }

    const phoneValue = formData.phone.trim();
    const phoneDigits = phoneValue.replace(/[^0-9]/g, '');
    if (!phoneValue) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]+$/.test(phoneValue) || phoneDigits.length < 7) {
      newErrors.phone = 'Enter a valid phone number';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.expert) {
      newErrors.expert = 'Please select an expert';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a date';
    }

    if (!formData.time) {
      newErrors.time = 'Please select a time';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onBookingSuccess({
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      service: SERVICE_LABELS[formData.service] || formData.service,
      expert: EXPERT_LABELS[formData.expert] || formData.expert,
      date: formData.date,
      time: formData.time,
      special: formData.special.trim(),
    });

    formRef.current.reset();
    setFormData(initialForm);
    setErrors({});
    setPlaceholderActive({ service: true, expert: true, date: true, time: true });
  };

  return (
    <section id="booking" className="booking-section">
      <div className="booking-container">
        <div className="booking-left">
          <span className="booking-tag">Book Your Appointment</span>
          <h2>
            Booking Your Beauty<span className="highlight">Experience</span>
          </h2>
          <p>
            "Book your appointment and enjoy a professional beauty experience
            tailored to your needs. Our expert team is dedicated to helping
            you look and feel your best with exceptional care and
            personalized services."
          </p>

          <div className="booking-features">
            <div className="booking-feature">
              <div className="icon-box">
                <i className="fas fa-cut"></i>
              </div>
              <span>Expert<br />Beauticians</span>
            </div>
            <div className="booking-feature">
              <div className="icon-box">
                <i className="fas fa-thumbs-up"></i>
              </div>
              <span>Premium<br />Products</span>
            </div>
            <div className="booking-feature">
              <div className="icon-box">
                <i className="fas fa-heart-pulse"></i>
              </div>
              <span>Hygienic<br />&amp; Safe</span>
            </div>
          </div>
        </div>

        <div className="booking-right">
          <div className="booking-card">
            <div className="booking-card-header">
              <div>
                <h2>Book Your <span>Appointment</span></h2>
                <div className="booking-divider"></div>
              </div>
              <div className="calendar-icon">
                <i className="fas fa-calendar-days"></i>
              </div>
            </div>

            <form className="booking-form" id="bookingForm" ref={formRef} onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    autoComplete="name"
                    list="name-suggestions"
                    value={formData.name}
                    onChange={handleChange('name')}
                    className={errors.name ? 'input-error' : ''}
                  />
                  <datalist id="name-suggestions">
                    <option value="Sara" />
                    <option value="Ayesha" />
                    <option value="Fatima" />
                    <option value="Maria" />
                  </datalist>
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange('email')}
                    className={errors.email ? 'input-error' : ''}
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Phone Number"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange('phone')}
                    className={errors.phone ? 'input-error' : ''}
                  />
                  {errors.phone && <span className="field-error">{errors.phone}</span>}
                </div>
                <div className="form-group">
                  <select
                    id="service"
                    defaultValue=""
                    className={`${placeholderActive.service ? 'placeholder-active' : ''} ${errors.service ? 'input-error' : ''}`}
                    onChange={(e) => {
                      handlePlaceholderChange('service')(e);
                      handleChange('service')(e);
                    }}
                  >
                    <option value="" disabled>Services</option>
                    <option value="bridal">Bridal Makeup</option>
                    <option value="party">Party Makeup</option>
                    <option value="hair">Hair Styling</option>
                    <option value="facial">Facial Mask</option>
                    <option value="nails">Manicure/Pedicure</option>
                    <option value="spa">Spa &amp; Massage</option>
                    <option value="waxing">Waxing</option>
                  </select>
                  {errors.service && <span className="field-error">{errors.service}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <select
                    id="expert"
                    defaultValue=""
                    className={`${placeholderActive.expert ? 'placeholder-active' : ''} ${errors.expert ? 'input-error' : ''}`}
                    onChange={(e) => {
                      handlePlaceholderChange('expert')(e);
                      handleChange('expert')(e);
                    }}
                  >
                    <option value="" disabled>Expert</option>
                    <option value="maria">Maria - Makeup Artist</option>
                    <option value="sana">Sana - Hair Stylist</option>
                    <option value="aisha">Aisha - Nail Expert</option>
                    <option value="zara">Zara - Spa Therapist</option>
                  </select>
                  {errors.expert && <span className="field-error">{errors.expert}</span>}
                </div>
                <div className="form-group">
                  <input
                    type="time"
                    id="time"
                    placeholder="Time"
                    className={`${placeholderActive.time ? 'placeholder-active' : ''} ${errors.time ? 'input-error' : ''}`}
                    onChange={(e) => {
                      handlePlaceholderChange('time')(e);
                      handleChange('time')(e);
                    }}
                  />
                  {errors.time && <span className="field-error">{errors.time}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="date"
                    id="date"
                    placeholder="Date"
                    min={today}
                    className={`${placeholderActive.date ? 'placeholder-active' : ''} ${errors.date ? 'input-error' : ''}`}
                    onChange={(e) => {
                      handlePlaceholderChange('date')(e);
                      handleChange('date')(e);
                    }}
                  />
                  {errors.date && <span className="field-error">{errors.date}</span>}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="special"
                    placeholder="Special Request"
                    list="special-suggestions"
                    value={formData.special}
                    onChange={handleChange('special')}
                  />
                  <datalist id="special-suggestions">
                    <option value="Bridal package" />
                    <option value="Home service required" />
                    <option value="Allergy to certain products" />
                    <option value="Party look preferred" />
                  </datalist>
                </div>
              </div>

              <button type="submit" className="btn-book">
                <span>Book Now</span>
                <div className="arrow-circle">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Booking;

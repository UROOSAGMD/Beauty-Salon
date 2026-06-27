function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

function formatTime(timeStr) {
  if (!timeStr) return '';
  const [hours, minutes] = timeStr.split(':');
  const h = parseInt(hours, 10);
  const period = h >= 12 ? 'PM' : 'AM';
  const displayHour = h % 12 === 0 ? 12 : h % 12;
  return `${displayHour}:${minutes} ${period}`;
}

function SuccessModal({ active, onClose, booking }) {
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal')) {
      onClose();
    }
  };

  const handleSave = () => {
    if (!booking) {
      onClose();
      return;
    }

    const lines = [
      'Glow Beauty Salon - Booking Confirmation',
      '----------------------------------------',
      `Name: ${booking.name}`,
      `Email: ${booking.email}`,
      `Phone: ${booking.phone}`,
      `Service: ${booking.service}`,
      `Expert: ${booking.expert}`,
      `Date: ${formatDate(booking.date)}`,
      `Time: ${formatTime(booking.time)}`,
      booking.special ? `Special Request: ${booking.special}` : null,
    ].filter(Boolean);

    const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'glow-beauty-salon-booking.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className={`modal ${active ? 'active' : ''}`}
      id="successModal"
      onClick={handleBackdropClick}
      style={active ? {} : { display: 'none' }}
    >
      <div className="modal-content booking-success-content">
        <button className="modal-close-icon" onClick={onClose} aria-label="Close">
          <i className="fas fa-xmark"></i>
        </button>
        <div className="booking-success-icon">
          <i className="fas fa-check"></i>
        </div>
        <h3>Booking Confirmed!</h3>
        <p>Thank you for choosing Glow Beauty Salon. We will contact you shortly to confirm your appointment.</p>

        {booking && (
          <div className="booking-summary booking-summary-grid">
            <div className="booking-summary-col">
              <div className="booking-summary-row">
                <span className="label"><i className="fas fa-user"></i></span>
                <span className="text">
                  <span className="field-name">Name</span>
                  <span className="value">{booking.name}</span>
                </span>
              </div>
              <div className="booking-summary-row">
                <span className="label"><i className="fas fa-envelope"></i></span>
                <span className="text">
                  <span className="field-name">Email</span>
                  <span className="value">{booking.email}</span>
                </span>
              </div>
              <div className="booking-summary-row">
                <span className="label"><i className="fas fa-phone"></i></span>
                <span className="text">
                  <span className="field-name">Phone</span>
                  <span className="value">{booking.phone}</span>
                </span>
              </div>
              <div className="booking-summary-row">
                <span className="label"><i className="fas fa-spa"></i></span>
                <span className="text">
                  <span className="field-name">Service</span>
                  <span className="value">{booking.service}</span>
                </span>
              </div>
              <div className="booking-summary-row">
                <span className="label"><i className="fas fa-user-doctor"></i></span>
                <span className="text">
                  <span className="field-name">Expert</span>
                  <span className="value">{booking.expert}</span>
                </span>
              </div>
            </div>
            <div className="booking-summary-col">
              <div className="booking-summary-row">
                <span className="label"><i className="fas fa-calendar-days"></i></span>
                <span className="text">
                  <span className="field-name">Date</span>
                  <span className="value">{formatDate(booking.date)}</span>
                </span>
              </div>
              <div className="booking-summary-row">
                <span className="label"><i className="fas fa-clock"></i></span>
                <span className="text">
                  <span className="field-name">Time</span>
                  <span className="value">{formatTime(booking.time)}</span>
                </span>
              </div>
              {booking.special && (
                <div className="booking-summary-row">
                  <span className="label"><i className="fas fa-star"></i></span>
                  <span className="text">
                    <span className="field-name">Request</span>
                    <span className="value">{booking.special}</span>
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="modal-actions">
          <button className="btn btn-primary modal-save-btn" onClick={handleSave}>Save Booking</button>
          <button className="btn-modal-close" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default SuccessModal;

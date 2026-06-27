function Lightbox({ item, onClose }) {
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('lightbox')) {
      onClose();
    }
  };

  return (
    <div className="lightbox" onClick={handleBackdropClick}>
      <div className="lightbox-content">
        <button className="close-lightbox" onClick={onClose}>&times;</button>
        <img src={item.src} alt={item.label} />
        <h3>{item.label}</h3>
      </div>
    </div>
  );
}

export default Lightbox;

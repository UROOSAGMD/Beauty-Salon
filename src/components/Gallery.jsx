import { useEffect } from 'react';
import { bridal, party, hairstyle, nail, facial, spa } from '../assets/images';
import Lightbox from './Lightbox';
import { useState } from 'react';

const galleryData = [
  { src: bridal, alt: 'Bridal Makeup', label: 'Bridal Makeup' },
  { src: party, alt: 'Party Makeup', label: 'Party Makeup' },
  { src: hairstyle, alt: 'Hair Style', label: 'Hair Styling' },
  { src: nail, alt: 'Nails', label: 'Nail Art' },
  { src: facial, alt: 'Facial', label: 'Facial Mask' },
  { src: spa, alt: 'Spa', label: 'Spa Treatment' },
];

function Gallery() {
  const [lightboxItem, setLightboxItem] = useState(null);

  useEffect(() => {
    document.body.style.overflow = lightboxItem ? 'hidden' : 'auto';
  }, [lightboxItem]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setLightboxItem(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Work</span>
          <h2>Beauty  <span className="highlight">Gallery</span></h2>
          <p>Discover our finest beauty transformations and signature salon moments.</p>
        </div>
        <div className="gallery-grid">
          {galleryData.map((item) => (
            <div
              className="gallery-item reveal"
              key={item.label}
              onClick={() => setLightboxItem(item)}
            >
              <img src={item.src} alt={item.alt} />
              <div className="overlay">
                <i className="fas fa-search-plus"></i>
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {lightboxItem && (
        <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
      )}
    </section>
  );
}

export default Gallery;

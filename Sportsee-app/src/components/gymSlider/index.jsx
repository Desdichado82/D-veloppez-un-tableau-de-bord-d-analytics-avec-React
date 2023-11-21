import { useState } from 'react';

const imageUrls = [
  'https://images.pexels.com/photos/866027/pexels-photo-866027.jpeg',
  'https://images.pexels.com/photos/866021/pexels-photo-866021.jpeg',
  'https://images.pexels.com/photos/949126/pexels-photo-949126.jpeg',
  'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg',
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1));
  };

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '1200px', height:'300px', margin: 'auto' }}>
      <img src={imageUrls[currentIndex]} alt={`Slide ${currentIndex + 1}`} style={{ width: '100%', height:'300px', objectFit:'cover', borderRadius: '8px' }} />
      <button onClick={prevSlide} style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', background: 'none', border: 'none', fontSize: '24px', color: '#fff' }}>
        {'<'}
      </button>
      <button onClick={nextSlide} style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', background: 'none', border: 'none', fontSize: '24px', color: '#fff' }}>
        {'>'}
      </button>
    </div>
  );
};

export default ImageSlider;

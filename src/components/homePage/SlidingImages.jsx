import React, { useState, useEffect } from 'react';

const SlidingImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([
    'http://localhost:3000/static/media/image.9779b4d9935fa4e195b1.png',
    'https://super-monitoring.com/blog/wp-content/uploads/2019/07/freelancers.jpg',
    'https://idreamcareer.com/wp-content/uploads/2020/09/freelance-jobs-for-students.webp'
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, images]);

  return (
    <div>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
    </div>
  );
};

export default SlidingImages;

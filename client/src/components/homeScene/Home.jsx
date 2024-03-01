import React, { useState, useEffect } from 'react';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showSlide = (index) => {
    const slider = document.getElementById('image-slider');
    const sliderWidth = document.querySelector('.slider-image').clientWidth;
    const newPosition = -index * sliderWidth;
    slider.style.transform = `translateX(${newPosition}px)`;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // Change 3 to the total number of images
    showSlide(currentIndex);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3); // Change 3 to the total number of images
    showSlide(currentIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000); // Change 3000 to the desired interval

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentIndex]);

  return (
    <>
      <header>
        {/* Your header content here */}
      </header>
      <div className="slide-background">
        <div id="slider-container">
          <div id="image-slider">
            <img src="image1.jpg" alt="Image 1" className="slider-image" />
            <img src="image2.jpg" alt="Image 2" className="slider-image" />
            <img src="image3.jpg" alt="Image 3" className="slider-image" />
          </div>
          <button id="prev-btn" className="slider-btn" onClick={prevSlide}>❮</button>
          <button id="next-btn" className="slider-btn" onClick={nextSlide}>❯</button>
        </div>
      </div>
    </>
  );
};

export default Home;

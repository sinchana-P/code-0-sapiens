import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './home.css'; 

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container">
      <div className="background-image"></div>
      <Slider {...sliderSettings}>
        <div>
          <img src="./images/image1.jpg" alt="Image 1" className="slider-image" />
        </div>
        <div>
          <img src="./images/image1.jpg" alt="Image 2" className="slider-image" />
        </div>
        <div>
          <img src="./images/image1.jpg" alt="Image 3" className="slider-image" />
        </div>
      </Slider>
    </div>
  );
};

export default Home;

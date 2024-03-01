import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './home.css';

const Home = () => {
  // Configuration options for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='home'>
      <h1>Welcome to Our App!</h1>
      <p>This is the homepage where you can find all the main features and information about our application. Feel free to explore and make the most of it!</p>
     <img className="imgbkg" src='https://upload.wikimedia.org/wikipedia/commons/b/bd/Emmanuel_College_Front_Court,_Cambridge,_UK_-_Diliff.jpg' alt='background'/>
     <a href="/login">
     <button>Login</button>
     </a>
     <a href="/register">
     <button>Register</button>
     </a>
    </div>
  );
};

export default Home;

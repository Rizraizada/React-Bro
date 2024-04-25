import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from '../uploads/img1.jpg';
 
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-auto max-w-screen-lg">
      <Slider {...settings}>
        <div>
          <img src={img1} alt="Slide 1" style={{ width: '100%', height: '200%' }} />
        </div>
        <div>
          <img src={img1} alt="Slide 2" style={{ width: '100%', height: '200%' }} />
        </div>
        <div>
          <img src={img1} alt="Slide 3" style={{ width: '100%', height: '200%' }} />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Carousel;

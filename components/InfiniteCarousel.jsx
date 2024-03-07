"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Componente personalizado para la flecha de siguiente
const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    />
  );
};

// Componente personalizado para la flecha de anterior
const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'green' }}
      onClick={onClick}
    />
  );
};

const InfiniteCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />
  };

  return (
    <div className="container mx-auto">
      <Slider {...settings}>
        <div className="bg-[#914848]">
          <h3>Slide 1</h3>
        </div>
        <div className="bg-[#569cd1]">
          <h3>Slide 2</h3>
        </div>
        <div className="bg-[#4ec995]">
          <h3>Slide 3</h3>
        </div>
        <div className="bg-[#5a0d37]">
          <h3>Slide 4</h3>
        </div>
        <div className="bg-[#d7d7a6]">
          <h3>Slide 5</h3>
        </div>
        <div className="bg-[#0078d4]">
          <h3>Slide 6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default InfiniteCarousel;

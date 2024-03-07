"use client";
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

const slides = [
  { image: '/renders/item-1.webp' },
  { image: '/renders/item-2.webp' },
  { image: '/renders/item-3.webp' },
  { image: '/renders/item-4.webp' },
  { image: '/renders/item-5.webp' },
  { image: '/renders/item-6.webp' },
  { image: '/renders/item-7.webp' },
  { image: '/renders/item-8.webp' },
  { image: '/renders/item-9.webp' },
  { image: '/renders/item-10.webp' },
  { image: '/renders/item-11.webp' },
  { image: '/renders/item-12.webp' },
  { image: '/renders/item-13.webp' },
  { image: '/renders/item-14.webp' },
  { image: '/renders/item-15.webp' },
  { image: '/renders/item-16.webp' },
  { image: '/renders/item-17.webp' },
  { image: '/renders/item-18.webp' },
  { image: '/renders/item-19.webp' },
  { image: '/renders/item-20.webp' },
  { image: '/renders/item-21.webp' },
  { image: '/renders/item-22.webp' },
  { image: '/renders/item-23.webp' },
  { image: '/renders/item-24.webp' },
];

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
    <div className="container mx-auto px-[15px]">
      <Slider className="w-[95%] mx-auto" {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <Image src={slide.image} alt={`Slide ${index + 1}`} width={300} height={200} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default InfiniteCarousel;

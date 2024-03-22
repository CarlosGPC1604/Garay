"use client";
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      onClick={onClick}
    />
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      onClick={onClick}
    />
  );
};

const slides = [
  { image: '/renders-carousel/item-1.webp' },
  { image: '/renders-carousel/item-2.webp' },
  { image: '/renders-carousel/item-3.webp' },
  { image: '/renders-carousel/item-4.webp' },
  { image: '/renders-carousel/item-5.webp' },
  { image: '/renders-carousel/item-6.webp' },
  { image: '/renders-carousel/item-7.webp' },
  { image: '/renders-carousel/item-8.webp' },
  { image: '/renders-carousel/item-9.webp' },
  { image: '/renders-carousel/item-10.webp' },
  { image: '/renders-carousel/item-11.webp' },
  { image: '/renders-carousel/item-12.webp' },
  { image: '/renders-carousel/item-13.webp' },
  { image: '/renders-carousel/item-14.webp' },
  { image: '/renders-carousel/item-15.webp' },
  { image: '/renders-carousel/item-16.webp' },
  { image: '/renders-carousel/item-17.webp' },
  { image: '/renders-carousel/item-18.webp' },
  { image: '/renders-carousel/item-19.webp' },
  { image: '/renders-carousel/item-20.webp' },
  { image: '/renders-carousel/item-21.webp' },
  { image: '/renders-carousel/item-22.webp' },
  { image: '/renders-carousel/item-23.webp' },
  { image: '/renders-carousel/item-24.webp' },
  { image: '/renders-carousel/item-25.webp' },
];

const InfiniteCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1280, // xl breakpoint
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '60px',
        },
      },
      {
        breakpoint: 1024, // lg breakpoint
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '30px',
        },
      },
      {
        breakpoint: 768, // md breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '120px',
        },
      },
      {
        breakpoint: 640, // sm breakpoint
        settings: {
          slidesToShow: 1,
          centerPadding: '60px',
        },
      },
      {
        breakpoint: 360, // xs breakpoint
        settings: {
          slidesToShow: 1,
          centerPadding: '0px',
        },
      },
    ],
  };

  return (
    <section className='py-[50px] px-[15px]'>
      <div className="container mx-auto">
        <Slider className="w-[95%] mx-auto" {...settings}>
          {slides.map((slide, index) => (
            <div className="px-3" key={index}>
              <Image
                className='w-full h-auto object-contain mx-auto'
                src={slide.image}
                alt={`Slide ${index + 1}`}
                height={0}
                width={0}
                sizes="50vw"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default InfiniteCarousel;

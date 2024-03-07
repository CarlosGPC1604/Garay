import React from 'react';
import InfiniteCarousel from '../../../components/InfiniteCarousel';

export default function Renders() {
  return (
    <section>
      <div className="container mx-auto text-center text-white">
        <h1 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]">
          Explora&nbsp;
        </h1>
        <h1 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]">
          nuestros renders
        </h1>
        <p className='text-lg'>
          Inspiración en Cada Diseño
        </p>
      </div>
      <InfiniteCarousel/>
    </section>
  );
}
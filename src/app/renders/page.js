import React from 'react';
import InfiniteCarousel from '../../../components/InfiniteCarousel';
import FBXLoader from "../../../components/ThreeJSFBX"

export default function Renders() {
  return (
    <section>

      {/* Hero */}
      <div className='w-full py-[150px] flex items-center justify-center hero-bg renders'>
        <div className='text-center'>
          <h1 className="text-[33px] sm:text-[36px] md:font-[40px] lg:text-[44px] xl:text-[48px] 2xl:[55px] font-medium text-white">
            Explora nuestros
            <span className='text-[#bd1622]'>
              &nbsp;renders
            </span>
          </h1>
          <p className='text-2xl text-white'>
            Inspiración en Cada Diseño
          </p>
        </div>
      </div>
      {/* Hero */}
      <FBXLoader />
      <InfiniteCarousel />
    </section>
  );
}
'use client';
import React, { useState, useEffect } from 'react';
import { title } from "@/components/primitives";

function HeroTest() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fadeAnimation, setFadeAnimation] = useState(false);

    const content = [
        {
            text: "Soluciones arquitectónicas profesionales",
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/Renders/IMG-20240105-WA0044.webp")',
        },
        {
            text: "Proyectos originales y creativos",
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/Renders/IMG-20240105-WA0030.webp")',
        },
        {
            text: "Innovando en cada proyecto",
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/Renders/IMG-20240105-WA0108.webp")',
        },
        {
            text: "Mejorando constantemente",
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/Renders/IMG-20240105-WA0024.webp")',
        },
    ];

    const handleNextImage = () => {
        setFadeAnimation(true);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % content.length);
            setFadeAnimation(false);
        }, 500);
    };

    const handlePrevImage = () => {
        setFadeAnimation(true);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex - 1 + content.length) % content.length);
            setFadeAnimation(false);
        }, 500);
    };

    const autoPlayInterval = 5000;

    useEffect(() => {
        const autoPlayTimer = setInterval(() => {
            handleNextImage();
        }, autoPlayInterval);

        return () => {
            clearInterval(autoPlayTimer);
        };
    }, [currentImageIndex]);

    const currentContent = content[currentImageIndex];

    const divStyle = {
        backgroundImage: currentContent.backgroundImage,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: '#000',
        backgroundPosition: '50% 50%',
        overflow: 'hidden',
        backdropFilter: 'blur(0)',
        WebkitBackdropFilter: 'blur(0)',
        backgroundAttachment: "fixed",
    };

    return (
        <div className='w-full py-[250px] flex justify-between fade-container' style={divStyle}>
            <button onClick={handlePrevImage}
                className="w-[50px] text-grey hover:text-black bg-transparent hover:bg-gray-50 bg-opacity-70 hover:bg-opacity-80 transition-all duration-300 rounded-full">
                &lt;
            </button>
            <div className={` text-center ${fadeAnimation ? 'fade-out' : 'fade-in'}`}>
                <h1 className={` ${title({ color: "red" })} text-[33px] sm:text-[36px] md:font-[40px] lg:text-[44px] xl:text-[48px] 2xl:[55px]`}>
                    Garay&nbsp;
                </h1>
                <h1 className={`${title()} text-[33px] sm:text-[36px] md:font-[40px] lg:text-[44px] xl:text-[48px] 2xl:[55px]`}>
                    Arquitectos
                </h1>
                <br />
                <div className='text-2xl'>
                    {currentContent.text}
                </div>
            </div>
            <button onClick={handleNextImage}
                className="w-[50px] text-grey hover:text-black bg-transparent hover:bg-gray-50 bg-opacity-70 hover:bg-opacity-80 transition-all duration-300 rounded-full">
                &gt;
            </button>
        </div>
    );
}

export default HeroTest;
'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fadeAnimation, setFadeAnimation] = useState(false);
    const [loadedImages, setLoadedImages] = useState([]);

    const content = [
        {
            text: "Soluciones arquitectónicas profesionales",
            image: "/Renders/IMG-20240105-WA0044.webp",
        },
        {
            text: "Proyectos originales y creativos",
            image: "/Renders/IMG-20240105-WA0030.webp",
        },
        {
            text: "Innovando en cada proyecto",
            image: "/Renders/IMG-20240105-WA0108.webp",
        },
        {
            text: "Mejorando constantemente",
            image: "/Renders/IMG-20240105-WA0024.webp",
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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${currentContent.image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backgroundPosition: '50% 50%',
        overflow: 'hidden',
        backdropFilter: 'blur(0)',
        WebkitBackdropFilter: 'blur(0)',
        backgroundAttachment: "fixed",
        transition: 'background-image 0.5s ease-in-out',
    };

    return (
        <div className='w-full py-[250px] flex justify-between fade-container' style={divStyle}>
            <button
                onClick={handlePrevImage}
                className="w-[50px] text-white hover:text-black bg-transparent hover:bg-gray-50 bg-opacity-70 hover:bg-opacity-80 transition-all duration-300 rounded-full">
                &lt;
            </button>
            <div className='text-center'>
                <Image
                    className='mx-auto'
                    src="/Logo.svg"
                    height={0}
                    width={100}
                    alt='logo'
                />
                <h1 className="text-[33px] sm:text-[36px] md:font-[40px] lg:text-[44px] xl:text-[48px] 2xl:[55px] font-medium text-[#bd1622]">
                    Garay&nbsp;
                    <span className='text-white'>
                        Arquitectos
                    </span>
                </h1>
                <p className='text-2xl text-white'>
                    {currentContent.text}
                </p>
            </div>
            <button
                onClick={handleNextImage}
                className="w-[50px] text-white hover:text-black bg-transparent hover:bg-gray-50 bg-opacity-70 hover:bg-opacity-80 transition-all duration-300 rounded-full">
                &gt;
            </button>
        </div>
    );
}

export default Hero;

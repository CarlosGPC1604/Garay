'use client';
import React, { useState, useEffect } from 'react';
import { Button } from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";


function HeroTest() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fadeAnimation, setFadeAnimation] = useState(false);

    const content = [
        {
            text: "Planeamos",
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/Renders/IMG-20240105-WA0044.webp")',
        },
        {
            text: "proyectamos",
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/Renders/IMG-20240105-WA0030.webp")',
        },
        {
            text: " construimos",
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/Renders/IMG-20240105-WA0108.webp")',
        },
        {
            text: "supervisamos",
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
    };

    return (
        <div className='w-full py-[250px] flex justify-between fade-container' style={divStyle}>
            <Button variant="light" onClick={handlePrevImage} className="carousel-button carousel-button-left text-white">
                &lt;
            </Button>
            <div className={` text-center ${fadeAnimation ? 'fade-out' : 'fade-in'}`}>
                <h1 className={` ${title({ color: "red" })} text-[30px] sm:text-[36px] md:font-[40px] lg:text-[44px] xl:text-[48px] 2xl:[55px]`}>
                    Garay&nbsp;
                </h1>
                <h1 className={`${title()} text-[30px] sm:text-[36px] md:font-[40px] lg:text-[44px] xl:text-[48px] 2xl:[55px]`}>
                    Arquitectos
                </h1>
                <br />
                <div>
                    {currentContent.text}
                </div>
            </div>
            <Button variant="light" onClick={handleNextImage} className="carousel-button carousel-button-right text-white">
                &gt;
            </Button>
        </div>
    );
}

export default HeroTest;

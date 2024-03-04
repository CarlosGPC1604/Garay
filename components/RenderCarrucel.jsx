"use client";
import React, { useState, useEffect } from 'react';

function RenderCarousel() {
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
        });
    };

    const handlePrevImage = () => {
        setFadeAnimation(true);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex - 1 + content.length) % content.length);
            setFadeAnimation(false);
        });
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

    return (
        <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5'>
            <div>

            </div>
            <div>
                <button
                    onClick={handlePrevImage}
                    className="w-[50px] text-white hover:text-black bg-transparent hover:bg-gray-50 bg-opacity-70 hover:bg-opacity-80 transition-all duration-300 rounded-full">
                    &lt;
                </button>

                <div>
                    {content.map((item, index) => (
                        <img
                            key={index}
                            src={item.image}
                            alt={item.text}
                            style={{ display: index === currentImageIndex ? 'block' : 'none' }}
                        />
                    ))}
                </div>
                <button
                    onClick={handleNextImage}
                    className="w-[50px] text-white hover:text-black bg-transparent hover:bg-gray-50 bg-opacity-70 hover:bg-opacity-80 transition-all duration-300 rounded-full">
                    &gt;
                </button>
            </div>

        </div>
    );
}

export default RenderCarousel;

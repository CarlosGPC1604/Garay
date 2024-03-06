"use client";
import React, { useState, useEffect } from 'react';

function RenderCarousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fadeAnimation, setFadeAnimation] = useState(false);
    const [loadedImages, setLoadedImages] = useState([]);

    const images = [
        "/Renders/IMG-20240105-WA0044.webp",
        "/Renders/IMG-20240105-WA0030.webp",
        "/Renders/IMG-20240105-WA0108.webp",
        "/Renders/IMG-20240105-WA0024.webp"
    ];

    const handleNextImage = () => {
        setFadeAnimation(true);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            setFadeAnimation(false);
        });
    };

    const handlePrevImage = () => {
        setFadeAnimation(true);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
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

    return (
        <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 py-[50px] lg:py-[100px] px-[15px]'>
            <div className='flex items-center justify-center text-white'>
                <div className='text-center lg:text-right text-balance'>
                    <h2 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]">
                        Perspectivas&nbsp;
                    </h2>
                    <h2 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]">
                        Tridimensionales
                    </h2>
                    <p className='text-balance mt-3'>
                        Ofrecemos servicios de renders fotorealistas, visualización 3D, recorridos virtuales y presentaciones impactantes. Nuestro equipo comprometido y experimentado da vida a tus ideas arquitectónicas con creatividad y precisión técnica. Destaca entre la competencia con imágenes cautivadoras. Colabora con nosotros para proyectos personalizados y entregas puntuales. Transforma tus conceptos en experiencias visuales impresionantes. ¡Contáctanos hoy para obtener más información!
                    </p>
                    <a href="/renders">
                        <button className="mt-4 cursor-pointer text-white px-5 py-4 lg:right-10">
                            Descubre más
                        </button>
                    </a>
                </div>
            </div>
            {/* Carrusel */}
            <div className="flex items-center justify-center">
                <div className="relative">
                    <button
                        onClick={handlePrevImage}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[50px] h-[50px] text-white hover:text-black bg-transparent hover:bg-gray-50 bg-opacity-70 hover:bg-opacity-80 transition-all duration-300 z-10">
                        &lt;
                    </button>
                    <button
                        onClick={handleNextImage}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[50px] h-[50px] text-white hover:text-black bg-transparent hover:bg-gray-50 bg-opacity-70 hover:bg-opacity-80 transition-all duration-300 z-10">
                        &gt;
                    </button>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Image ${index + 1}`}
                            style={{ display: index === currentImageIndex ? 'block' : 'none' }}
                        />
                    ))}
                </div>
            </div>
            {/* Carrusel */}
        </div>
    );
}

export default RenderCarousel;
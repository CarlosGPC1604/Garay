"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Collague = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    const handleKeyDown = (event) => {
        if (event.keyCode === 27)
            handleCloseModal();
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    // Componente Carousel
    const Carousel = () => {
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
            <section>
                {/* Carousel */}
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
                            <Image
                                className='w-auto h-[400px] object-contain mx-auto'
                                height={0}
                                width={0}
                                key={index}
                                src={image}
                                alt={`Image ${index + 1}`}
                                style={{ display: index === currentImageIndex ? 'block' : 'none' }}
                                sizes="100vw"
                            />
                        ))}
                    </div>
                </div>
                {/* Carousel */}
            </section>
        );
    };

    return (
        <section>
            <div className="container mx-auto grid grid-cols-5">
                {/* col 1 */}
                <div className="cursor-pointer" onClick={handleOpenModal}>
                    <Image
                        className='w-auto h-[400px] object-contain mx-auto'
                        src="/collague/item-1.webp"
                        height={50}
                        width={50}
                        sizes="100vw"
                        alt="collague"
                    />
                </div>
                {/* col 1 */}
            </div>
            {/* Modal */}
            {isOpen && (
                <div className="modal-overlay z-10 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="w-[345px] sm:w-[600px] md:w-[720px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1300px] flex flex-col" style={{ background: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(10px)' }}>
                        {/* Modal content */}
                        <div className="flex justify-end">
                            <button
                                className="text-white bg-transparent border-none cursor-pointer m-4"
                                onClick={handleCloseModal}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                </svg>
                            </button>
                        </div>
                        <div className="w-full mx-auto pb-[60px] lg:pb-[80px]">
                            <Carousel />
                        </div>
                        {/* Modal content */}
                    </div>
                </div>
            )}
            {/* Modal */}
        </section>
    );
};

export default Collague;

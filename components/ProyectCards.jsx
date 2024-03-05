"use client";
import React, { useState, useEffect } from 'react';

// Carousel
function RenderCarousel({ images }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fadeAnimation, setFadeAnimation] = useState(false);
    const [loadedImages, setLoadedImages] = useState([]);

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

    return (
        <div className="relative">
            {/* Previous button */}
            <button
                onClick={handlePrevImage}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[50px] h-[50px] text-white hover:text-black bg-transparent hover:bg-gray-50 bg-opacity-70 hover:bg-opacity-80 transition-all duration-300 z-10">
                &lt;
            </button>
            {/* Next button */}
            <button
                onClick={handleNextImage}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[50px] h-[50px] text-white hover:text-black bg-transparent hover:bg-gray-50 bg-opacity-70 hover:bg-opacity-80 transition-all duration-300 z-10">
                &gt;
            </button>
            {/* Images */}
            {images.map((image, index) => (
                <img
                    className='w-auto h-[300px] lg:h-[650px] object-contain mx-auto'
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    style={{ display: index === currentImageIndex ? 'block' : 'none' }}
                />
            ))}
            {/* Images */}
        </div>
    );
}

// Main component
const ProyectCards = () => {
    const [openModalIndex, setOpenModalIndex] = useState(null);

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                handleCloseModal();
            }
        };

        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);


    const handleOpenModal = (index) => {
        setOpenModalIndex(index);
    };


    const handleCloseModal = () => {
        setOpenModalIndex(null);
    };


    const projects = [
        {
            images: [
                "/carruseles/proyecto-1/item-1.webp",
                "/carruseles/proyecto-1/item-2.webp",
                "/carruseles/proyecto-1/item-3.webp",
            ],
            title: "Titulo de proyecto 1"
        },
        {
            images: [
                "/carruseles/proyecto-2/item-1.webp",
                "/carruseles/proyecto-2/item-2.webp",
                "/carruseles/proyecto-2/item-3.webp",
            ],
            title: "Titulo de proyecto 2"
        },
        {
            images: [
                "/carruseles/proyecto-3/item-1.webp",
                "/carruseles/proyecto-3/item-2.webp",
                "/carruseles/proyecto-3/item-3.webp",
            ],
            title: "Titulo de proyecto 3"
        },
    ];

    return (
        <section>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 py-[50px] px-[15px]'>
                {/* Open modal */}
                {projects.map((project, index) => (
                    <div key={index} className='relative group cursor-pointer' onClick={() => handleOpenModal(index)}>
                        <img
                          className="rounded-[15px]"
                          src={project.images[0]}
                          alt={`Open`}
                          loading="lazy"
                        />
                        <div className="absolute inset-x-0 bottom-0 py-[15px] rounded-b-[15px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10" style={{ background: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(10px)' }}>
                          <p className="text-white text-center">{project.title}</p>
                        </div>
                    </div>
                ))}
                {/* Open modal */}
            </div>
            {/* Modal */}
            {projects.map((project, index) => (
                <div key={index}>
                    {openModalIndex === index && (
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
                                <div className="w-full mx-auto pb-[60px]  lg:pb-[80px]">
                                    <RenderCarousel
                                        images={project.images}
                                    />
                                </div>
                                {/* Modal content */}
                            </div>
                        </div>
                    )}
                </div>
            ))}
            {/* Modal */}
        </section>
    );
}

export default ProyectCards;

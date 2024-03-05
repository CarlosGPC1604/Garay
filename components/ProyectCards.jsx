'use client';
import React, { useState, useEffect } from 'react';

// Carousel component
function RenderCarousel({ images }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fadeAnimation, setFadeAnimation] = useState(false);
    const [loadedImages, setLoadedImages] = useState([]);

    // Function to handle next image
    const handleNextImage = () => {
        setFadeAnimation(true);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            setFadeAnimation(false);
        });
    };

    // Function to handle previous image
    const handlePrevImage = () => {
        setFadeAnimation(true);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            setFadeAnimation(false);
        });
    };

    // Rendering the carousel component
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
            {/* Render images */}
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    style={{ display: index === currentImageIndex ? 'block' : 'none' }}
                />
            ))}
        </div>
    );
}

// Main component
const ProyectCards = () => {
    const [openModalIndex, setOpenModalIndex] = useState(null);

    // Effect for handling escape key to close modal
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

    // Function to open modal
    const handleOpenModal = (index) => {
        setOpenModalIndex(index);
    };

    // Function to close modal
    const handleCloseModal = () => {
        setOpenModalIndex(null);
    };

    // Data for projects
    const projects = [
        {
            images: [ // Example images for Project 1
                "/carruseles/proyecto-1/item-1.webp",
                "/Project1/Image2.webp",
                "/Project1/Image3.webp",
            ],
        },
        {
            images: [ // Example images for Project 2
                "/Project2/Image1.webp",
                "/Project2/Image2.webp",
                "/Project2/Image3.webp",
            ],
        },
        {
            images: [ // Example images for Project 3
                "/Project3/Image1.webp",
                "/Project3/Image2.webp",
                "/Project3/Image3.webp",
            ],
        },
    ];

    // Rendering the main component
    return (
        <section>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 py-[50px] px-[15px]'>
                {/* Render project cards */}
                {projects.map((project, index) => (
                    <div className="rounded-[15px]" key={index}>
                        <button className='cursor-pointer' onClick={() => handleOpenModal(index)}>
                            Abrir modal
                        </button>
                    </div>
                ))}
                {/* Render project cards */}
            </div>

            {/* Render modals */}
            {projects.map((project, index) => (
                <div key={index}>
                    {openModalIndex === index && (
                        <div className="modal-overlay z-10 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                            <div className="modal bg-black rounded-[15px] w-[360px] sm:w-[600px] md:w-[720px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1300px]">
                                <div className='p-5' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <div>
                                        <p className='title text-2xl'>
                                            {project.title}
                                        </p>
                                    </div>
                                    <button
                                        className="text-white bg-transparent border-none cursor-pointer"
                                        onClick={handleCloseModal}
                                        style={{ marginTop: '0' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                        </svg>
                                    </button>
                                </div>
                                <div>
                                    <RenderCarousel images={project.images} />

                                </div>
                                <div className='p-5'>
                                    <div className='flex justify-end'>
                                        <button
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                            onClick={handleCloseModal}>
                                            Cerrar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
            {/* Render modals */}
        </section>
    );
}

export default ProyectCards;

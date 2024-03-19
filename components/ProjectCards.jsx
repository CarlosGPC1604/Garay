"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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
                className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[50px] h-[50px] text-black hover:text-black bg-transparent hover:bg-gray-50 bg-opacity-70 hover:bg-opacity-80 transition-all duration-300 z-10">
                &lt;
            </button>
            {/* Next button */}
            <button
                onClick={handleNextImage}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[50px] h-[50px] text-black hover:text-black bg-transparent hover:bg-gray-50 bg-opacity-70 hover:bg-opacity-80 transition-all duration-300 z-10">
                &gt;
            </button>
            {/* Images */}
            {images.map((image, index) => (
                <div key={index} style={{ display: index === currentImageIndex ? 'block' : 'none' }}>
                    <Image
                        className='w-auto h-[400px] object-contain mx-auto'
                        src={image}
                        alt={`Image ${index + 1}`}
                        height={0}
                        width={0}
                        sizes="100vw"
                    />
                </div>
            ))}
            {/* Images */}
        </div>
    );
}

// Main component
const ProjectCards = () => {
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
                "/carruseles/proyecto-1/item-4.webp",
                "/carruseles/proyecto-1/item-5.webp",
                "/carruseles/proyecto-1/item-6.webp",
                "/carruseles/proyecto-1/item-7.webp",
                "/carruseles/proyecto-1/item-8.webp",
                "/carruseles/proyecto-1/item-9.webp",
                "/carruseles/proyecto-1/item-10.webp",
            ],
            title: "Titulo de proyecto 1"
        },
        {
            images: [
                "/carruseles/proyecto-2/item-1.webp",
                "/carruseles/proyecto-2/item-2.webp",
                "/carruseles/proyecto-2/item-3.webp",
                "/carruseles/proyecto-2/item-4.webp",
                "/carruseles/proyecto-2/item-5.webp",
                "/carruseles/proyecto-2/item-6.webp",
                "/carruseles/proyecto-2/item-7.webp",
                "/carruseles/proyecto-2/item-8.webp",
                "/carruseles/proyecto-2/item-9.webp",
                "/carruseles/proyecto-2/item-10.webp",
            ],
            title: "Titulo de proyecto 2"
        },
        {
            images: [
                "/carruseles/proyecto-3/item-1.webp",
                "/carruseles/proyecto-3/item-3.webp",
                "/carruseles/proyecto-3/item-4.webp",
                "/carruseles/proyecto-3/item-5.webp",
                "/carruseles/proyecto-3/item-6.webp",
                "/carruseles/proyecto-3/item-7.webp",
                "/carruseles/proyecto-3/item-8.webp",
                "/carruseles/proyecto-3/item-9.webp",
                "/carruseles/proyecto-3/item-10.webp",
            ],
            title: "Titulo de proyecto 3"
        },
        {
            images: [
                "/carruseles/proyecto-4/item-1.webp",
                "/carruseles/proyecto-4/item-3.webp",
                "/carruseles/proyecto-4/item-4.webp",
                "/carruseles/proyecto-4/item-5.webp",
                "/carruseles/proyecto-4/item-6.webp",
                "/carruseles/proyecto-4/item-7.webp",
                "/carruseles/proyecto-4/item-8.webp",
                "/carruseles/proyecto-4/item-9.webp",
                "/carruseles/proyecto-4/item-10.webp",
            ],
            title: "Titulo de proyecto 4"
        },
        {
            images: [
                "/carruseles/proyecto-5/item-1.webp",
                "/carruseles/proyecto-5/item-3.webp",
                "/carruseles/proyecto-5/item-4.webp",
                "/carruseles/proyecto-5/item-5.webp",
                "/carruseles/proyecto-5/item-6.webp",
                "/carruseles/proyecto-5/item-7.webp",
                "/carruseles/proyecto-5/item-8.webp",
                "/carruseles/proyecto-5/item-9.webp",
                "/carruseles/proyecto-5/item-10.webp",
            ],
            title: "Titulo de proyecto 5"
        },
        {
            images: [
                "/carruseles/proyecto-6/item-1.webp",
                "/carruseles/proyecto-6/item-3.webp",
                "/carruseles/proyecto-6/item-4.webp",
                "/carruseles/proyecto-6/item-5.webp",
                "/carruseles/proyecto-6/item-6.webp",
                "/carruseles/proyecto-6/item-7.webp",
                "/carruseles/proyecto-6/item-8.webp",
                "/carruseles/proyecto-6/item-9.webp",
                "/carruseles/proyecto-6/item-10.webp",
            ],
            title: "Titulo de proyecto 6"
        },
        {
            images: [
                "/carruseles/proyecto-7/item-1.webp",
                "/carruseles/proyecto-7/item-3.webp",
                "/carruseles/proyecto-7/item-4.webp",
                "/carruseles/proyecto-7/item-5.webp",
                "/carruseles/proyecto-7/item-6.webp",
                "/carruseles/proyecto-7/item-7.webp",
                "/carruseles/proyecto-7/item-8.webp",
                "/carruseles/proyecto-7/item-9.webp",
                "/carruseles/proyecto-7/item-10.webp",
            ],
            title: "Titulo de proyecto 7"
        },
        {
            images: [
                "/carruseles/proyecto-8/item-1.webp",
                "/carruseles/proyecto-8/item-3.webp",
                "/carruseles/proyecto-8/item-4.webp",
                "/carruseles/proyecto-8/item-5.webp",
                "/carruseles/proyecto-8/item-6.webp",
                "/carruseles/proyecto-8/item-7.webp",
                "/carruseles/proyecto-8/item-8.webp",
                "/carruseles/proyecto-8/item-9.webp",
                "/carruseles/proyecto-8/item-10.webp",
            ],
            title: "Titulo de proyecto 8"
        },
        {
            images: [
                "/carruseles/proyecto-9/item-1.webp",
                "/carruseles/proyecto-9/item-3.webp",
                "/carruseles/proyecto-9/item-4.webp",
                "/carruseles/proyecto-9/item-5.webp",
                "/carruseles/proyecto-9/item-6.webp",
                "/carruseles/proyecto-9/item-7.webp",
                "/carruseles/proyecto-9/item-8.webp",
                "/carruseles/proyecto-9/item-9.webp",
                "/carruseles/proyecto-9/item-10.webp",
            ],
            title: "Titulo de proyecto 9"
        },
        {
            images: [
                "/carruseles/proyecto-10/item-1.webp",
                "/carruseles/proyecto-30/item-3.webp",
                "/carruseles/proyecto-10/item-4.webp",
                "/carruseles/proyecto-10/item-5.webp",
                "/carruseles/proyecto-10/item-6.webp",
                "/carruseles/proyecto-10/item-7.webp",
                "/carruseles/proyecto-10/item-8.webp",
                "/carruseles/proyecto-10/item-9.webp",
                "/carruseles/proyecto-10/item-10.webp",
            ],
            title: "Titulo de proyecto 10"
        },
    ];

    return (
        <section>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-5 py-[50px] px-[15px]'>
                {/* Open modal */}
                {projects.map((project, index) => (
                    <div key={index} className='relative group cursor-pointer' onClick={() => handleOpenModal(index)}>
                        <Image
                            src={project.images[0]}
                            alt={`Open`}
                            width={50}
                            height={50}
                            layout="responsive"
                        />
                        <div className="glass absolute inset-x-0 bottom-0 py-[15px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                            <p className="text-black text-center">
                                {project.title}
                            </p>
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
                            <div className="glass w-[345px] sm:w-[600px] md:w-[720px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1300px] flex flex-col">
                                {/* Modal content */}
                                <div className="flex justify-end">
                                    <button
                                        className="text-white hover:text-black bg-transparent border-none cursor-pointer m-4"
                                        onClick={handleCloseModal}>
                                        <svg xmlns="https://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="w-full mx-auto pb-[60px] lg:pb-[80px]">
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

export default ProjectCards;
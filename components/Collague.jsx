"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Carousel
function RenderCarousel({ images }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fadeAnimation, setFadeAnimation] = useState(false);

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
        },
    ];

    return (
        <section>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 py-[50px] px-[15px]'>
                {/* collague */}
                <div className="order-2 lg:order-1">
                    <div className="grid grid-cols-3 lg:grid-cols-5 gap-3 ">
                        {/* col 1 */}
                        {projects.map((project, index) => (
                            <div
                                className="col-span-1 lg:col-span-1 overflow-hidden cursor-pointer"
                                key={index}
                                onClick={() => handleOpenModal(index)}
                            >
                                <Image
                                    className='zoom h-[167px] w-[112px] sm:h-[307px] md:h-[371px]'
                                    style={{ objectFit: "cover", width: "100%" }}
                                    src="/collague/item-1.webp"
                                    height={50}
                                    width={50}
                                    sizes="100vw"
                                    alt="collague"
                                />
                            </div>
                        ))}
                        {/* col 1 */}
                        {/* col 2 */}
                        {projects.map((project, index) => (
                            <div
                                className='col-span-2 lg:col-span-3  overflow-hidden cursor-pointer'
                                key={index}
                                onClick={() => handleOpenModal(index)}
                            >
                                <Image
                                    className='zoom h-[167px] w-[112px] sm:h-[307px] md:h-[371px]'
                                    style={{ objectFit: "cover", width: "100%" }}
                                    src="/collague/item-2.webp"
                                    height={50}
                                    width={50}
                                    sizes="100vw"
                                    alt="collague"
                                />
                            </div>
                        ))}
                        {/* col 2 */}
                        {/* col 3 */}
                        {projects.map((project, index) => (
                            <div
                                className='col-span-2 lg:col-span-1  overflow-hidden cursor-pointer'
                                key={index}
                                onClick={() => handleOpenModal(index)}
                            >
                                <Image
                                    className='zoom h-[167px] w-[112px] sm:h-[307px] md:h-[371px]'
                                    style={{ objectFit: "cover", width: "100%" }}
                                    src="/collague/item-3.webp"
                                    height={50}
                                    width={50}
                                    sizes="100vw"
                                    alt="collague"
                                />
                            </div>
                        ))}
                        {/* col 3 */}
                        {/* col 4 */}
                        {projects.map((project, index) => (
                            <div
                                className='col-span-1 lg:col-span-2 overflow-hidden cursor-pointer'
                                key={index}
                                onClick={() => handleOpenModal(index)}
                            >
                                <Image
                                    className='zoom h-[167px] w-[112px] sm:h-[307px] md:h-[371px]'
                                    style={{ objectFit: "cover", width: "100%" }}
                                    src="/collague/item-4.webp"
                                    height={50}
                                    width={50}
                                    sizes="100vw"
                                    alt="collague"
                                />
                            </div>
                        ))}
                        {/* col 4 */}
                        {/* col 5 */}
                        {projects.map((project, index) => (
                            <div
                                className='col-span-3 lg:col-span-3 overflow-hidden cursor-pointer' key={index}
                                onClick={() => handleOpenModal(index)}
                            >
                                <Image
                                    className='zoom h-[167px] w-[112px] sm:h-[307px] md:h-[371px]'
                                    style={{ objectFit: "cover", width: "100%" }}
                                    src="/collague/item-6.webp"
                                    height={50}
                                    width={50}
                                    sizes="100vw"
                                    alt="collague"
                                />
                            </div>
                        ))}
                        {/* col 5 */}
                    </div>
                </div>
                {/* collague */}
                {/* Open modal */}
                <div className="text-center lg:text-left order-1 lg:order-2 flex items-center justify-center order-1 lg:order-2">
                    <div>
                        <h2 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]">
                            Armonia&nbsp;
                        </h2>
                        <h2 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]">
                            urbana
                        </h2>
                        <p className='mt-2 text-balance'>
                            Sumérgete en nuestro collage visual que captura la diversidad y creatividad de la arquitectura moderna. Desde imponentes rascacielos hasta íntimos espacios públicos, cada imagen es una pieza clave en la sinfonía de formas, líneas y texturas que define nuestro entorno urbano. Celebra la belleza e innovación en la creación de espacios urbanos en este viaje visual único. ¡Bienvenido a Armonía Urbana!
                        </p>
                        <a href="/proyectos">
                            <button className="mt-4 cursor-pointer text-white px-5 py-4 lg:right-10">
                                Descubre más
                            </button>
                        </a>
                    </div>
                </div>
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
                                        onClick={handleCloseModal}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
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
            ))
            }
            {/* Modal */}
        </section >
    );
}

export default ProjectCards;

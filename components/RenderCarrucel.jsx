"use client";
import React from 'react';
import { title, subtitle } from "@/components/primitives";
import { Button, Image } from "@nextui-org/react";
import IframeRender from './IframeRender';

function RenderCarrucel() {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    const images = [
        "/Renders-Carrucel/IMG-20240105-WA0028.webp",
        "/Renders-Carrucel/IMG-20240105-WA0030.webp",
        "/Renders-Carrucel/IMG-20240105-WA0035.webp",
        "/Renders-Carrucel/IMG-20240105-WA0081.webp",
        "/Renders-Carrucel/IMG-20240105-WA0108.webp",
        "/Renders-Carrucel/IMG-20240105-WA0046.webp",
        "/Renders-Carrucel/IMG-20240105-WA0024.webp",
        "/Renders-Carrucel/IMG-20240105-WA0091.webp",
        "/Renders-Carrucel/IMG-20240105-WA0052.webp",
        "/Renders-Carrucel/IMG-20240105-WA0058.webp"
    ];

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <section>
            <div className="w-full pt-[100px] px-[10px] lg:px-0 bg-[#000000]">
                <div className="container mx-auto">
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        <div className='flex items-center justify-center'>
                            <div className='text-center lg:text-right text-balance'>
                                <h2 className={` ${title({})} text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]`}>
                                    Perspectivas&nbsp;
                                </h2>
                                <h2 className={` ${title({ color: "red" })} text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]`}>
                                    Tridimensionales
                                </h2>
                                <p className='text-balance mt-2'>
                                    Ofrecemos servicios de renders fotorealistas, visualización 3D, recorridos virtuales y presentaciones impactantes. Nuestro equipo comprometido y experimentado da vida a tus ideas arquitectónicas con creatividad y precisión técnica. Destaca entre la competencia con imágenes cautivadoras. Colabora con nosotros para proyectos personalizados y entregas puntuales. Transforma tus conceptos en experiencias visuales impresionantes. ¡Contáctanos hoy para obtener más información!
                                </p>
                                <a href="/renders">
                                    <button className="mt-4 cursor-pointer bg-[#e12527] hover:bg-[#e0323c] text-white px-6 py-5 lg:right-10 bg-[#e12527] hover:bg-[#e0323c]">
                                        Descubre más
                                    </button>
                                </a>
                            </div>
                        </div>
                        {/* Slider */}
                        <div className='w-[90%] mx-auto'>
                            <div className="flex justify-center items-center">
                                <Image
                                    src={images[currentImageIndex]}
                                    alt={`Image ${currentImageIndex + 1}`}
                                    className="rounded-[15px]"
                                    style={{ delay: "0.3s" }}
                                    loading="lazy"
                                />
                            </div>
                            <div className="flex justify-center mt-3">
                                <Button variant="light" onPress={handlePrevImage} className="carousel-button carousel-button-left text-white">
                                    &lt; Anterior
                                </Button>
                                <Button variant="light" onPress={handleNextImage} className="carousel-button carousel-button-right text-white">
                                    Siguiente &gt;
                                </Button>
                            </div>
                        </div>
                        {/* Slider */}
                    </div>
                </div>
            </div>
            <IframeRender />
        </section>
    );
}

export default RenderCarrucel;
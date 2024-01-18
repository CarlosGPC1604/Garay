"use client";
import React from 'react';
import { Button, Image } from "@nextui-org/react";

function RenderCarrucel() {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    const images = [
        '/collague/item-1.webp',
        '/collague/item-2.webp',
        '/collague/item-3.webp',
        '/collague/item-4.webp',
        '/collague/item-5.webp',
        '/collague/item-6.webp'
    ];

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className=''>
            {/* Slider */}
            <div className="flex justify-center items-center">
                <Image
                    src={images[currentImageIndex]}
                    alt={`Image ${currentImageIndex + 1}`}
                    className="rounded-[15px] h-auto w-[20%]"
                    style={{ delay: "0.3s" }}
                    loading="lazy"
                />
            </div>
            <div className="text-center mt-[15px]">
                <a className="hover:text-[red] text-[18px]" href="/proyectos" alt="descubre mas">Descubre más</a>
            </div>
            <div className="flex justify-center">
                <Button variant="light" onPress={handlePrevImage} className="carousel-button carousel-button-left">
                    &lt; Anterior
                </Button>
                <Button variant="light" onPress={handleNextImage} className="carousel-button carousel-button-right">
                    Siguiente &gt;
                </Button>
            </div>
            {/* Slider */}
        </div>
    );
}

export default RenderCarrucel;





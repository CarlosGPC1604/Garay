"use client";
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Image } from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";

export default function RenderCards() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    const images = [
        '/Renders/IMG-20240105-WA0058.jpg',
        '/Renders/IMG-20240105-WA0039.jpg',
        '/Renders/IMG-20240105-WA0030.jpg',
        '/Renders/IMG-20240105-WA0108.jpg',
        '/Renders/IMG-20240105-WA0024.jpg',
        '/Renders/IMG-20240105-WA0037.jpg',
        '/Renders/IMG-20240105-WA0091.jpg',
        '/Renders/IMG-20240105-WA0102.jpg',
        '/Renders/IMG-20240105-WA0081.jpg',
        '/Renders/IMG-20240105-WA0026.jpg',
        '/Renders/IMG-20240105-WA0033.jpg',
        '/Renders/IMG-20240105-WA0045.jpg',
        '/Renders/IMG-20240105-WA0032.jpg',
        '/Renders/IMG-20240105-WA0038.jpg',
        '/Renders/IMG-20240105-WA0046.jpg',
        '/Renders/IMG-20240105-WA0111.jpg',
        '/Renders/IMG-20240105-WA0052.jpg',
        '/Renders/IMG-20240105-WA0023.jpg',
        '/Renders/IMG-20240105-WA0025.jpg',
        '/Renders/IMG-20240105-WA0040.jpg',
        '/Renders/IMG-20240105-WA0044.jpg',
        '/Renders/IMG-20240105-WA0097.jpg',
        '/Renders/IMG-20240105-WA0035.jpg',
        '/Renders/IMG-20240105-WA0031.jpg',
        '/Renders/IMG-20240105-WA0028.jpg',
    ];

    const handleOpen = (index) => {
        setCurrentImageIndex(index);
        onOpen();
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <section>
            {/* Collague */}
            <div className="container mx-auto grid grid-cols-2 lg:grid-cols-5 gap-2">
                {images.map((image, index) => (
                    <div key={index} className='overflow-hidden rounded-[15px] cursor-pointer'>
                        <Image
                            onClick={() => handleOpen(index)}
                            className='zoom'
                            src={image}
                            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                            alt={`Open ${image}`}
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
            {/* Collague */}
            {/* Modal */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalContent className="my-auto bg-[#1b1919]">
                    {(onClose) => (
                        <div>
                            <ModalHeader className="flex flex-col gap-1">Garay Arquitectos</ModalHeader>
                            <ModalBody>
                                {/* Slider */}
                                <div>
                                    <div className="flex justify-center">
                                        <Image
                                            src={images[currentImageIndex]}
                                            alt={`Image ${currentImageIndex + 1}`}
                                            className="rounded-[15px]"
                                            style={{ delay: "0.3s" }}
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="text-center mt-[15px]">
                                        <a className="hover:text-[red] text-[18px]" href="/proyectos" alt="descubre mas">Descubre más</a>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <Button variant="light" onPress={handlePrevImage} className="carousel-button carousel-button-left">
                                        &lt; Anterior
                                    </Button>
                                    <Button variant="light" onPress={handleNextImage} className="carousel-button carousel-button-right">
                                        Siguiente &gt;
                                    </Button>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cerrar
                                </Button>
                            </ModalFooter>
                        </div>
                    )}
                </ModalContent>
            </Modal>
            {/* Modal */}
        </section>
    );
}

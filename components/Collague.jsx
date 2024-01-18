"use client";
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Image } from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";

export default function Collague() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [size, setSize] = React.useState('lg');
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    const sizes = ["3xl"];

    const handleOpen = (size) => {
        setSize(size);
        onOpen();
    }

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

    const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    };

    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className='flex items-center'>
                    <div className='text-center'>
                        <h2 className={` ${title({ color: "red" })} text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]`}>
                            Armonia&nbsp;
                        </h2>
                        <h2 className={` ${title()} text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]`}>
                            urbana
                        </h2>
                        <p className='mt-5'>
                            Sumérgete en nuestro collage visual que captura la diversidad y creatividad de la arquitectura moderna. Desde imponentes rascacielos hasta íntimos espacios públicos, cada imagen es una pieza clave en la sinfonía de formas, líneas y texturas que define nuestro entorno urbano. Celebra la belleza e innovación en la creación de espacios urbanos en este viaje visual único. ¡Bienvenido a Armonía Urbana!
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-3 lg:grid-cols-5 gap-3">
                    <div className='col-span-1 lg:col-span-1 overflow-hidden rounded-[15px] cursor-pointer'>
                        {sizes.map((size) => (
                            <a key={size} onClick={() => handleOpen(size)}>
                                <Image
                                    className='zoom h-[167px] sm:h-[307px] md:h-[371px]'
                                    src="/collague/item-1.webp"
                                    style={{ objectFit: "cover" }}
                                    alt={`Open ${size}`}
                                    loading="lazy" />
                            </a>
                        ))}
                    </div>
                    <div className='col-span-2 lg:col-span-3 overflow-hidden rounded-[15px] cursor-pointer'>
                        {sizes.map((size) => (
                            <a key={size} onClick={() => handleOpen(size)}>
                                <Image
                                    className='zoom h-[167px] sm:h-[307px] md:h-[371px]'
                                    src="/collague/item-2.webp"
                                    style={{ objectFit: "cover" }}
                                    alt={`Open ${size}`}
                                    loading="lazy" />
                            </a>
                        ))}
                    </div>
                    <div className='col-span-2 lg:col-span-1 overflow-hidden rounded-[15px] cursor-pointer'>
                        {sizes.map((size) => (
                            <a key={size} onClick={() => handleOpen(size)}>
                                <Image
                                    className='zoom h-[167px] sm:h-[307px] md:h-[371px]'
                                    src="/collague/item-3.webp"
                                    style={{ objectFit: "cover" }}
                                    alt={`Open ${size}`}
                                    loading="lazy" />
                            </a>
                        ))}
                    </div>
                    <div className='col-span-1 lg:col-span-1 overflow-hidden rounded-[15px] cursor-pointer'>
                        {sizes.map((size) => (
                            <a key={size} onClick={() => handleOpen(size)}>
                                <Image
                                    className='zoom h-[167px] sm:h-[307px] md:h-[371px]'
                                    src="/collague/item-4.webp"
                                    style={{ objectFit: "cover" }}
                                    alt={`Open ${size}`}
                                    loading="lazy" />
                            </a>
                        ))}
                    </div>
                    <div className='col-span-1 lg:col-span-1 overflow-hidden rounded-[15px] cursor-pointer'>
                        {sizes.map((size) => (
                            <a key={size} onClick={() => handleOpen(size)}>
                                <Image
                                    className='zoom h-[167px] sm:h-[307px] md:h-[371px]'
                                    src="/collague/item-5.webp"
                                    style={{ objectFit: "cover" }}
                                    alt={`Open ${size}`}
                                    loading="lazy" />
                            </a>
                        ))}
                    </div>
                    <div className='col-span-2 lg:col-span-3 overflow-hidden rounded-[15px] cursor-pointer'>
                        {sizes.map((size) => (
                            <a key={size} onClick={() => handleOpen(size)}>
                                <Image
                                    className='zoom h-[167px] sm:h-[307px] md:h-[371px]'
                                    src="/collague/item-6.webp"
                                    style={{ objectFit: "cover" }}
                                    alt={`Open ${size}`}
                                    loading="lazy" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <Modal
                size={size}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalContent className="my-auto">
                    {(onClose) => (
                        <div>
                            <ModalHeader className="flex flex-col gap-1">Garay Arquitectos</ModalHeader>
                            <ModalBody>
                                <div>
                                    <div>
                                        <div className="flex justify-center">
                                            <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="rounded-[15px]" style={{ delay: "0.3s" }} loading="lazy" />
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
        </>
    );
}

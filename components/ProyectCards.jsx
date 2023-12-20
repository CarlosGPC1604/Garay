"use client";
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState('lg');
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const sizes = ["3xl"];

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  }

  const images = [
    './collague/casa-ciruelos.webp',
    '/collague/Casa-Mari-Trini.webp',
    '/collague/casa-lindavista.webp',
    "/collague/escaleras.webp",
    "/collague/Fotos.webp",
    "/collague/Planta-Tomates.webp"
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
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-3">
        <div className=' overflow-hidden rounded-[15px]' >
          {sizes.map((size) => (
            <a key={size} onClick={() => handleOpen(size)}>
              <img className='zoom' src="/collague/casa-ciruelos.webp" style={imageStyle} alt={`Open ${size}`} />
            </a>
          ))}
        </div>
        <div className=' overflow-hidden rounded-[15px]'>
          {sizes.map((size) => (
            <a key={size} onClick={() => handleOpen(size)}>
              <img className='zoom' src="/collague/Casa-Mari-Trini.webp" style={imageStyle} alt={`Open ${size}`} />
            </a>
          ))}
        </div>
        <div className='overflow-hidden rounded-[15px]'>
          {sizes.map((size) => (
            <a key={size} onClick={() => handleOpen(size)}>
              <img className='zoom' src="/collague/casa-lindavista.webp" style={imageStyle} alt={`Open ${size}`} />
            </a>
          ))}
        </div>
        <div className=' overflow-hidden rounded-[15px]'>
          {sizes.map((size) => (
            <a key={size} onClick={() => handleOpen(size)}>
              <img className='zoom' src="/collague/escaleras.webp" style={imageStyle} alt={`Open ${size}`} />
            </a>
          ))}
        </div>
        <div className=' overflow-hidden rounded-[15px]'>
          {sizes.map((size) => (
            <a key={size} onClick={() => handleOpen(size)}>
              <img className='zoom' src="/collague/Fotos.webp" style={imageStyle} alt={`Open ${size}`} />
            </a>
          ))}
        </div>
        <div className=' overflow-hidden rounded-[15px]'>
          {sizes.map((size) => (
            <a key={size} onClick={() => handleOpen(size)}>
              <img className='zoom' src="/collague/Planta-Tomates.webp" style={imageStyle} alt={`Open ${size}`} />
            </a>
          ))}
        </div>
      </div>
      <Modal
        size={size}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent className="bottom-[25%] sm:bottom-auto mx-auto">
          {(onClose) => (
            <div>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <div>
                  <div>
                    <div className="flex justify-center">
                      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="rounded-[15px]" style={{ delay: "0.3s" }} />
                    </div>
                    <div className="text-center mt-[15px]">
                      <a className="hover:text-[red] text-[18px]" href="/proyectos">Descubre más</a>
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

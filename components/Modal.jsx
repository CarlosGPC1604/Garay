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
    'https://costar.brightspotcdn.com/dims4/default/3e2f728/2147483647/strip/true/crop/2100x1181+0+106/resize/1200x675!/quality/90/?url=http%3A%2F%2Fcostar-brightspot.s3.us-east-1.amazonaws.com%2F75%2Fcf%2F36ae84a3402088b1053d8697c851%2Fgettyimages-501234002.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuuERwUbpzk9f-FoFbwSUjJPpxAhs0bLc9hw&usqp=CAU',
    'https://img.indiafilings.com/learn/wp-content/uploads/2018/07/12005844/Land-Conversion-in-Telangana.jpg',
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
            <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]">
              Armonía Urbana
            </h2>
            <p className='mt-5'>
              Sumérgete en nuestro collage visual que captura la diversidad y creatividad de la arquitectura moderna. Desde imponentes rascacielos hasta íntimos espacios públicos, cada imagen es una pieza clave en la sinfonía de formas, líneas y texturas que define nuestro entorno urbano. Celebra la belleza e innovación en la creación de espacios urbanos en este viaje visual único. ¡Bienvenido a "Armonía Urbana"!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-3">

          <div className='col-span-1 lg:col-span-1 overflow-hidden' >
            {sizes.map((size) => (
              <a key={size} onClick={() => handleOpen(size)}>
                <img className='zoom' src="/collague/casa-ciruelos.jpg" style={imageStyle} alt={`Open ${size}`} />
              </a>
            ))}
          </div>

          <div className='col-span-2 lg:col-span-3 overflow-hidden'>
            {sizes.map((size) => (
              <a key={size} onClick={() => handleOpen(size)}>
                <img className='zoom' src="/collague/Casa-Mari-Trini.jpg" style={imageStyle} alt={`Open ${size}`} />
              </a>
            ))}
          </div>

          <div className='col-span-2 lg:col-span-1 overflow-hidden'>
            <img className='zoom' src="/collague/casa-lindavista.jpg" alt="" style={imageStyle} />
          </div>

          <div className='col-span-1 lg:col-span-1 overflow-hidden'>
            <img className='zoom' src="/collague/Casa-Senderos.jpg" alt="" style={imageStyle} />
          </div>

          <div className='col-span-1 lg:col-span-1 overflow-hidden'>
            <img className='zoom' src="/collague/Fotos.jpeg" alt="" style={imageStyle} />
          </div>

          <div className='col-span-2 lg:col-span-3 overflow-hidden'>
            <img className='zoom' src="/collague/Planta-Tomates.jpg" alt="" style={imageStyle} />
          </div>

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
                  <div className="flex justify-center">
                    <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="carousel-image" style={{ delay: "0.3s" }} />
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
                  Close
                </Button>
              </ModalFooter>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

"use client";
import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Image } from "@nextui-org/react";

export default function ProyectCards() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState('3xl');
  const [currentProjectIndex, setCurrentProjectIndex] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sizes = ["5xl"];

  const projects = [
    [
      '/carruseles/proyecto-1/item-1.webp',
      '/carruseles/proyecto-1/item-2.webp',
      '/carruseles/proyecto-1/item-3.webp',
      '/carruseles/proyecto-1/item-4.webp',
      '/carruseles/proyecto-1/item-5.webp',
      '/carruseles/proyecto-1/item-6.webp',
      '/carruseles/proyecto-1/item-7.webp',
      '/carruseles/proyecto-1/item-8.webp',
      '/carruseles/proyecto-1/item-9.webp',
      '/carruseles/proyecto-1/item-10.webp',
    ],
    [
      '/carruseles/proyecto-2/item-1.webp',
      '/carruseles/proyecto-2/item-2.webp',
      '/carruseles/proyecto-2/item-3.webp',
      '/carruseles/proyecto-2/item-4.webp',
      '/carruseles/proyecto-2/item-5.webp',
      '/carruseles/proyecto-2/item-6.webp',
      '/carruseles/proyecto-2/item-7.webp',
      '/carruseles/proyecto-2/item-8.webp',
      '/carruseles/proyecto-2/item-9.webp',
      '/carruseles/proyecto-2/item-10.webp',
    ],
    [
      '/carruseles/proyecto-3/item-1.webp',
      '/carruseles/proyecto-3/item-2.webp',
      '/carruseles/proyecto-3/item-3.webp',
      '/carruseles/proyecto-3/item-4.webp',
      '/carruseles/proyecto-3/item-5.webp',
      '/carruseles/proyecto-3/item-6.webp',
      '/carruseles/proyecto-3/item-7.webp',
      '/carruseles/proyecto-3/item-8.webp',
      '/carruseles/proyecto-3/item-9.webp',
      '/carruseles/proyecto-3/item-10.webp',
    ],
    [
      '/carruseles/proyecto-4/item-1.webp',
      '/carruseles/proyecto-4/item-2.webp',
      '/carruseles/proyecto-4/item-3.webp',
      '/carruseles/proyecto-4/item-4.webp',
      '/carruseles/proyecto-4/item-5.webp',
      '/carruseles/proyecto-4/item-6.webp',
      '/carruseles/proyecto-4/item-7.webp',
      '/carruseles/proyecto-4/item-8.webp',
      '/carruseles/proyecto-4/item-9.webp',
      '/carruseles/proyecto-4/item-10.webp',
    ],
    [
      '/carruseles/proyecto-5/item-1.webp',
      '/carruseles/proyecto-5/item-2.webp',
      '/carruseles/proyecto-5/item-3.webp',
      '/carruseles/proyecto-5/item-4.webp',
      '/carruseles/proyecto-5/item-5.webp',
      '/carruseles/proyecto-5/item-6.webp',
      '/carruseles/proyecto-5/item-7.webp',
      '/carruseles/proyecto-5/item-8.webp',
      '/carruseles/proyecto-5/item-9.webp',
      '/carruseles/proyecto-5/item-10.webp',
    ],
    [
      '/carruseles/proyecto-6/item-1.webp',
      '/carruseles/proyecto-6/item-2.webp',
      '/carruseles/proyecto-6/item-3.webp',
      '/carruseles/proyecto-6/item-4.webp',
      '/carruseles/proyecto-6/item-5.webp',
      '/carruseles/proyecto-6/item-6.webp',
      '/carruseles/proyecto-6/item-7.webp',
      '/carruseles/proyecto-6/item-8.webp',
      '/carruseles/proyecto-6/item-9.webp',
      '/carruseles/proyecto-6/item-10.webp',
    ],
    [
      '/carruseles/proyecto-7/item-1.webp',
      '/carruseles/proyecto-7/item-2.webp',
      '/carruseles/proyecto-7/item-3.webp',
      '/carruseles/proyecto-7/item-4.webp',
      '/carruseles/proyecto-7/item-5.webp',
    ],
    [
      '/carruseles/proyecto-8/item-1.webp',
      '/carruseles/proyecto-8/item-2.webp',
      '/carruseles/proyecto-8/item-3.webp',
      '/carruseles/proyecto-8/item-4.webp',
      '/carruseles/proyecto-8/item-5.webp',
    ],
    [
      '/carruseles/proyecto-9/item-1.webp',
      '/carruseles/proyecto-9/item-2.webp',
      '/carruseles/proyecto-9/item-3.webp',
      '/carruseles/proyecto-9/item-4.webp',
      '/carruseles/proyecto-9/item-5.webp',
      '/carruseles/proyecto-9/item-6.webp',
      '/carruseles/proyecto-9/item-7.webp',
      '/carruseles/proyecto-9/item-8.webp',
      '/carruseles/proyecto-9/item-9.webp',
      '/carruseles/proyecto-9/item-10.webp',
    ],
    [
      '/carruseles/proyecto-10/item-1.webp',
      '/carruseles/proyecto-10/item-2.webp',
      '/carruseles/proyecto-10/item-3.webp',
      '/carruseles/proyecto-10/item-4.webp',
      '/carruseles/proyecto-10/item-5.webp',
      '/carruseles/proyecto-10/item-6.webp',
      '/carruseles/proyecto-10/item-7.webp',
      '/carruseles/proyecto-10/item-8.webp',
      '/carruseles/proyecto-10/item-9.webp',
      '/carruseles/proyecto-10/item-10.webp',
    ],
  ];

  const handleOpen = (projectIndex, size) => {
    setCurrentProjectIndex(projectIndex);
    setSize(size);
    onOpen();
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projects[currentProjectIndex].length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + projects[currentProjectIndex].length) % projects[currentProjectIndex].length);
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  };

  return (
    <>
      <div className="px-[10px] grid grid-cols-2 lg:grid-cols-5 gap-2">
        {projects.map((project, projectIndex) => (

          <div onClick={() => handleOpen(projectIndex, 'lg')} key={projectIndex} className='relative group cursor-pointer'>
            <div >
              <Image className="rounded-[15px]" src={project[0]} style={imageStyle} alt={`Open`} loading="lazy" />
            </div>
            <div className="absolute inset-x-0 bottom-0 py-[15px] rounded-b-[15px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10" style={{ background: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(10px)' }}>
              <p className="text-white text-center">Titulo de proyecto</p>
            </div>
          </div>
        ))}
      </div>
      <Modal
        size={size}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent className="my-auto">
          {(onClose) => (
            <div>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <div>
                  <div>
                    <div className="flex justify-center">
                      <Image src={projects[currentProjectIndex][currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="rounded-[15px]" style={{ delay: "0.3s" }} loading="lazy" />
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

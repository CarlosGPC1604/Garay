"use client";
import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function ProyectCards() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState('lg');
  const [currentProjectIndex, setCurrentProjectIndex] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      '/carruseles/proyecto-8/item-6.webp',
      '/carruseles/proyecto-8/item-7.webp',
      '/carruseles/proyecto-8/item-8.webp',
      '/carruseles/proyecto-8/item-9.webp',
      '/carruseles/proyecto-8/item-10.webp',
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
    height: '100%',
    objectFit: 'cover',
  };

  return (
    <>
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-3">
        {projects.map((project, projectIndex) => (
          <div key={projectIndex} className='overflow-hidden rounded-[15px]'>
            <a onClick={() => handleOpen(projectIndex, 'lg')}>
              <img className='zoom' src={project[0]} style={imageStyle} alt={`Open`} />
            </a>
          </div>
        ))}
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
                      <img src={projects[currentProjectIndex][currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="rounded-[15px]" style={{ delay: "0.3s" }} />
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

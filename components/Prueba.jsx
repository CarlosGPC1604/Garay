"use client";
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function ProyectCards() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
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
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

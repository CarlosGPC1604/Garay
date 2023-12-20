"use client";
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function ProyectCards() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const list = [
    {
      img: "./landing-cards/diesño.webp",
    },
    {
      img: "./landing-cards/plan.webp",
    },
    {
      img: "./landing-cards/supervision.webp",
    }
  ];

  return (
    <>
      {list.map((item, index) => (
        <div key={index}>
          <img src={item.img} alt={`Project ${index}`} />
        </div>
      ))}
      <Button onPress={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                {/* Contenido del cuerpo del modal */}
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

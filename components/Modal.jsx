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

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {sizes.map((size) => (
          <Button key={size} onPress={() => handleOpen(size)}>Open {size}</Button>
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
    </div>
  );
}

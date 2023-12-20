"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function App() {
  const list = [
    {
      img: "/collague/casa-ciruelos.webp",
      SliderImg: "./collague/casa-ciruelos.webp"
    },
    {
      img: "/collague/Casa-Mari-Trini.webp",
      SliderImg: "/collague/Casa-Mari-Trini.webp"
    },
    {
      img: "/collague/casa-lindavista.webp",
      SliderImg: "/collague/casa-lindavista.webp"
    },
  ];

  const ImageModal = ({ isOpen, onClose, sliderImg }) => (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
          <ModalBody>
            <div>
              <img src={sliderImg} alt="Slider Image" />
            </div>
            <div className="">

            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onClick={onClose}>
              Close
            </Button>
            <Button color="primary" onClick={onClose}>
              Action
            </Button>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );

  const ImageGrid = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (sliderImg) => {
      setSelectedImage(sliderImg);
      onOpen();
    };

    return (
      <div className="grid grid-cols-3 gap-4">
        {list.map((item, index) => (
          <div key={index} className="overflow-hidden rounded-[15px]">
            <img
              className="zoom"
              src={item.img}
              alt={`item-${index}`}
              onClick={() => handleImageClick(item.SliderImg)}
            />
          </div>
        ))}
        <ImageModal isOpen={isOpen} onClose={onClose} sliderImg={selectedImage} />
      </div>
    );
  };

  return <ImageGrid />;
}

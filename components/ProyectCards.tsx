'use client';
import React from "react";
import { Card, CardBody, CardFooter, Image, CardHeader } from "@nextui-org/react";

export default function App() {
  const list = [
    {
      img: "./proyect-cards-img/IMG-20231107-WA0012_8_11zon.webp",
    },
    {
      img: "./proyect-cards-img/IMG-20231106-WA0143_7_11zon.webp",
    },
    {
      img: "./proyect-cards-img/IMG-20231106-WA0135_6_11zon.webp",
    },
    {
      img: "./proyect-cards-img/IMG-20231106-WA0120_5_11zon.webp",
    },
    {
      img: "./proyect-cards-img/IMG-20231103-WA0033_4_11zon.webp",
    },
    {
      img: "./proyect-cards-img/IMG-20231030-WA0050_3_11zon.webp",
    },
    {
      img: "./proyect-cards-img/IMG-20231026-WA0025_2_11zon.webp",
    },
    {
      img: "./proyect-cards-img/IMG-20231026-WA0021_1_11zon.webp",
    },
  ];

  return (
    <>
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Prueba</p>
            <small className="text-default-500">Uso de la card</small>
            <h4 className="font-bold text-large">Imagen de ejemplo</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={item.img}
              width={300}
            />
          </CardBody>
        </Card>
      ))}
    </>
  );
}



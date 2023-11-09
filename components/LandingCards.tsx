'use client';
import React from "react";
import { Card, CardBody, CardFooter, Image, CardHeader } from "@nextui-org/react";

export default function App() {
  const list = [
    {
      title: "Diseño Arquitectonico",
      img: "./landing-cards/IMG-20231106-WA0135_6_11zon.webp",
    },
    {
        title: "Planificacion de proyectos",
        img: "./landing-cards/IMG-20231106-WA0143_7_11zon.webp",
    },
    {
        title: "Supervicion de obra",
        img: "./landing-cards/IMG-20231107-WA0012_8_11zon.webp",
    }
  ];

  return (
    <>
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <b>{item.title}</b>       
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

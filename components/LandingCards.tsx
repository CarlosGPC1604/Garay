'use client';
import React from "react";
import { Card, CardBody, Image, CardHeader } from "@nextui-org/react";

export default function App() {
  const list = [
    {
      title: "Diseño Arquitectónico",
      img: "./landing-cards/diesño.webp",
    },
    {
      title: "Planificación de proyectos",
      img: "./landing-cards/plan.webp",
    },
    {
      title: "Supervisión de obras",
      img: "./landing-cards/supervision.webp",
    }
  ];

  return (
    <div className="paralax w-screen py-[30px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {list.map((item, index) => (
          <Card className="py-2 max-w-[100%] mx-auto" shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
            <CardHeader>
              <p className="font-semibold">{item.title}</p>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <div className="flex justify-center">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl mx-auto"
                  src={item.img}
                  width={300}
                />
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

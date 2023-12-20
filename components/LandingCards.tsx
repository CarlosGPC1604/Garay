"use client";
import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function LandingCrds() {
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
    <div className="paralax w-full py-[60px]">
      <div className="container mx-auto">
        <div className="gap-2 grid grid-cols-3">
          {list.map((item, index) => (
            <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover h-[140px]"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{item.title}</b>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

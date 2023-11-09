'use client';
import React from "react";
import { Card, CardBody, CardFooter, Image, CardHeader } from "@nextui-org/react";

export default function App() {
  const list = [
    {
      img: "http://placekitten.com/g/200/201",
    },
    {
      img: "http://placekitten.com/g/200/202",
    },
    {
      img: "http://placekitten.com/g/200/203",
    },
    {
      img: "http://placekitten.com/g/200/204",
    },
    {
      img: "http://placekitten.com/g/200/205",
    },
    {
      img: "http://placekitten.com/g/200/206",
    },
    {
      img: "http://placekitten.com/g/200/207",
    },
    {
      img: "http://placekitten.com/g/200/208",
    },
  ];

  return (
    <div className="gap-2 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-4">
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
    </div>
  );
}



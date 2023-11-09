'use client';
import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

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
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <p className="text-default-500">PRECIO</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

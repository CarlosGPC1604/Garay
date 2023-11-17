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
      <div className="gap-5 container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-3">
        {list.map((item, index) => (
          <Card className="py-2 hover:bg-[#e02528]" shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-visible py-2">
              <div className="mx-auto my-auto">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={item.img}
                />
              </div>
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">Click para saber mas →</h4>
            </CardHeader>
          </Card>
        ))}
      </div>
  );
}

'use client';
import React from "react";
import { Card, CardBody, CardFooter, Image, CardHeader } from "@nextui-org/react";
import { Tooltip, Button } from "@nextui-org/react";

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
    <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-3">
      {list.map((item, index) => (
        <div className="container">
          <Card isFooterBlurred radius="lg" className="py-2 border-none max-w-[75%] mx-auto" shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-visible py-2">
              <div className="mx-auto my-auto">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={item.img}
                />
              </div>
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <h4 className="font-bold text-large"></h4>
              <Tooltip
                content={
                  <div className="pr-4 pt-4 pb-2">
                    <div className="container">
                      <div className="grid grid-cols-2 divide-x">
                        <div className="grid grid-cols-2">
                          <div className="content-center flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-1H2v-1h4v-1H4v-1h2v-1H2v-1h4V9H4V8h2V7H2V6h4V2h1v4h1V4h1v2h1V2h1v4h1V4h1v2h1V2h1v4h1V1a1 1 0 0 0-1-1H1z" />
                            </svg>
                          </div>
                          <div>
                            <p>666 m²</p>
                            <p>Terreno</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2">
                          <div className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                            </svg>
                          </div>
                          <p>Casa habitación</p>
                        </div>
                      </div>
                    </div>
                    <div className="container mt-4">
                      <div className="grid grid-cols-4">
                        <div className="text-center">
                          <div className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M2 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM0 2a2 2 0 0 1 3.937-.5h8.126A2 2 0 1 1 14.5 3.937v8.126a2 2 0 1 1-2.437 2.437H3.937A2 2 0 1 1 1.5 12.063V3.937A2 2 0 0 1 0 2zm2.5 1.937v8.126c.703.18 1.256.734 1.437 1.437h8.126a2.004 2.004 0 0 1 1.437-1.437V3.937A2.004 2.004 0 0 1 12.063 2.5H3.937A2.004 2.004 0 0 1 2.5 3.937zM14 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM2 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                          </div>
                          <p>2</p>
                        </div>

                        <div className="text-center">
                          <div className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M2 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM0 2a2 2 0 0 1 3.937-.5h8.126A2 2 0 1 1 14.5 3.937v8.126a2 2 0 1 1-2.437 2.437H3.937A2 2 0 1 1 1.5 12.063V3.937A2 2 0 0 1 0 2zm2.5 1.937v8.126c.703.18 1.256.734 1.437 1.437h8.126a2.004 2.004 0 0 1 1.437-1.437V3.937A2.004 2.004 0 0 1 12.063 2.5H3.937A2.004 2.004 0 0 1 2.5 3.937zM14 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM2 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                          </div>
                          <p>2</p>
                        </div>

                        <div className="text-center">
                          <div className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M2 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM0 2a2 2 0 0 1 3.937-.5h8.126A2 2 0 1 1 14.5 3.937v8.126a2 2 0 1 1-2.437 2.437H3.937A2 2 0 1 1 1.5 12.063V3.937A2 2 0 0 1 0 2zm2.5 1.937v8.126c.703.18 1.256.734 1.437 1.437h8.126a2.004 2.004 0 0 1 1.437-1.437V3.937A2.004 2.004 0 0 1 12.063 2.5H3.937A2.004 2.004 0 0 1 2.5 3.937zM14 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM2 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                          </div>
                          <p>2</p>
                        </div>
                        <div className="text-center">
                          <div className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M2 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM0 2a2 2 0 0 1 3.937-.5h8.126A2 2 0 1 1 14.5 3.937v8.126a2 2 0 1 1-2.437 2.437H3.937A2 2 0 1 1 1.5 12.063V3.937A2 2 0 0 1 0 2zm2.5 1.937v8.126c.703.18 1.256.734 1.437 1.437h8.126a2.004 2.004 0 0 1 1.437-1.437V3.937A2.004 2.004 0 0 1 12.063 2.5H3.937A2.004 2.004 0 0 1 2.5 3.937zM14 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM2 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                          </div>
                          <p>2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              >
                <div>
                  <Button variant="light">Más información →</Button>
                </div>
              </Tooltip>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
}
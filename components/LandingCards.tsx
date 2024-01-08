import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function LandingCrds() {
  const list = [
    {
      title: "Diseño Arquitectónico",
    },
    {
      title: "Planificación de proyectos",
    },
    {
      title: "Supervisión de obras",
    }
  ];

  return (
    <div className="paralax-1 w-full py-[60px]">
      <div className="container mx-auto">
        <div className="gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {list.map((item, index) => (
            <Card key={index} className="w-[70%] mx-auto"> 
              <CardBody className="p-0">
        
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

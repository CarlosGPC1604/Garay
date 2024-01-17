import React from "react";
import { Card, CardFooter} from "@nextui-org/react";

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
    <div className="paralax-1 w-full py-[60px]">
      <div className="container mx-auto">
        <div className="gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((item, index) => (
            <div>
              <Card
                isFooterBlurred
                radius="lg"
                className="border-none w-[80%] mx-auto"
              >
                <img
                  alt="card"
                  className="object-cover"
                  height="auto"
                  src={item.img}
                  width="100%"
                />
                <CardFooter className=" border-white/20 border-1 overflow-hidden py-[10%] absolute before:rounded-xl rounded-large bottom-1  z-10" style={{ background: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(10px)' }}>
                  <div className="font-black">
                    {item.title}
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

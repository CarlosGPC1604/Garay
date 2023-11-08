import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";



export default function App() {

    const list = [
        {
          title: "Orange",
          img: "/images/fruit-1.jpeg",
          price: "$5.50",
        },
        {
          title: "Tangerine",
          img: "/images/fruit-2.jpeg",
          price: "$3.00",
        },
        {
          title: "Raspberry",
          img: "/images/fruit-3.jpeg",
          price: "$10.00",
        },
        {
          title: "Lemon",
          img: "/images/fruit-4.jpeg",
          price: "$5.30",
        },
        {
          title: "Avocado",
          img: "/images/fruit-5.jpeg",
          price: "$15.70",
        },
        {
          title: "Lemon 2",
          img: "/images/fruit-6.jpeg",
          price: "$8.00",
        },
        {
          title: "Banana",
          img: "/images/fruit-7.jpeg",
          price: "$7.50",
        },
        {
          title: "Watermelon",
          img: "/images/fruit-8.jpeg",
          price: "$12.20",
        },
      ];
      
    return (
        <Card className="py-2 min-w-full">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Prueba</p>
                <small className="text-default-500">Uso de la card</small>
                <h4 className="font-bold text-large">Imagen de ejemplo</h4>
            </CardHeader>
            <CardBody className="overflow-hidden py-2">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="http://placekitten.com/g/400/400"
                    width={400}
                />
            </CardBody>
        </Card>
    );
}

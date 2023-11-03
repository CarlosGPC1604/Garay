import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function App() {
    return (
        <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Prueba</p>
                <small className="text-default-500">Uso de la card</small>
                <h4 className="font-bold text-large">Imagen de ejemplo</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="http://placekitten.com/g/200/300"
                    width={300}
                />
            </CardBody>
        </Card>
    );
}

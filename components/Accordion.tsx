'use client';
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";


export default function App() {
  return (
    <div className="container mx-auto">
      {/* Title */}
      <div className="text-center flex items-center justify-center">
        <div className="text-center">
          <h2 className={` ${title({ color: "red" })} text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]`}>
            Calidad&nbsp;
          </h2>
          <h2 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]">
            y
            <br />
            compromiso
          </h2>
          <h3 className="mt-2 text-lg">
            ¿En que consiste muetsros servicios?
          </h3>
        </div>
      </div>
      {/* Title */}
      {/* Accordion */}
      <div className="mt-8 lg:w-[60%] mx-auto">
        <Accordion variant="splitted">
          <AccordionItem className="font-semibold p-0 " key="1" aria-label="Accordion 1" title="Diseño arquitectónico">
            <p className="font-normal text-black pt-0 pb-4">
              Contamos con experiencia en el diseño de edificios y espacios, Ofrecemos servicios de diseño arquitectónico que incluyen la creación de planos, dibujos y representaciones visuales de edificios y estructuras, trabajamos en estrecha colaboración con los clientes para entender sus necesidades y preferencias, y luego desarrollamos diseños que sean funcionales, estéticos y cumplan con los códigos de construcción y regulaciones locales.
            </p>
          </AccordionItem>
          <AccordionItem className="font-semibold p-0" key="2" aria-label="Accordion 2" title="Planificación de proyectos">
            <p className="font-normal text-black pt-0 pb-4">
              Ayudamos en la planificación de proyectos de construcción desde el inicio hasta la finalización. Esto implica la creación de un plan maestro para el proyecto, la identificación de los requisitos del sitio, la coordinación con otros profesionales, la gestión del presupuesto y el cronograma, y la obtención de permisos y aprobaciones necesarios. La planificación del proyecto es esencial para garantizar que la construcción se realice de manera eficiente y dentro de los límites presupuestarios.
            </p>
          </AccordionItem>
          <AccordionItem className="font-semibold p-0" key="3" aria-label="Accordion 3" title="Supervisión de obra">
            <p className="font-normal text-black pt-0 pb-4">
              Ofrecemos servicios de supervisión de la construcción. Esto implica que el arquitecto trabaje en el lugar de construcción para garantizar que el proyecto se desarrolle de acuerdo con los planos y especificaciones acordados. También supervisan la calidad de la construcción y se aseguran de que se cumplan los estándares de seguridad y los códigos de construcción. La supervisión de la construcción ayuda a asegurar que el proyecto se complete de manera exitosa y cumpla con las expectativas del cliente.
            </p>
          </AccordionItem>
          <AccordionItem className="font-semibold p-0" key="4" aria-label="Accordion 4" title="Renders 3D">
            <p className="font-normal text-black pt-0 pb-4">
              El render 3D es crucial en proyectos arquitectónicos por su capacidad para proporcionar representaciones visuales realistas. Facilita la toma de decisiones informada, mejora la presentación del proyecto, impulsa el marketing y las ventas, ayuda a identificar problemas de diseño, y es fundamental para obtener aprobaciones regulatorias. En resumen, el render 3D mejora la eficiencia del diseño y contribuye a la satisfacción de los profesionales y clientes.
            </p>
          </AccordionItem>
        </Accordion>
      </div>
      {/* Accordion */}
      {/* Title */}
    </div>
  );
}
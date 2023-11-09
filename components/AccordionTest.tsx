'use client';

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function App() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <Accordion>
      <AccordionItem key="1" aria-label="Accordion 1" title="Diseño Arquitectonico">
        <p>Los arquitectos son conocidos por su experiencia en el diseño de edificios y espacios. Ofrecen servicios de diseño arquitectónico que incluyen la creación de planos, dibujos y representaciones visuales de edificios y estructuras. Trabajan en estrecha colaboración con los clientes para entender sus necesidades y preferencias, y luego desarrollan diseños que sean funcionales, estéticos y cumplan con los códigos de construcción y regulaciones locales.</p>
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Planificacion de proyectos">
        <p>Los arquitectos ayudan en la planificación de proyectos de construcción desde el inicio hasta la finalización. Esto implica la creación de un plan maestro para el proyecto, la identificación de los requisitos del sitio, la coordinación con otros profesionales, la gestión del presupuesto y el cronograma, y la obtención de permisos y aprobaciones necesarios. La planificación del proyecto es esencial para garantizar que la construcción se realice de manera eficiente y dentro de los límites presupuestarios.</p>
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Supervicion de obra">
        <p>Los arquitectos también pueden ofrecer servicios de supervisión de la construcción. Esto implica que el arquitecto trabaje en el lugar de construcción para garantizar que el proyecto se desarrolle de acuerdo con los planos y especificaciones acordados. También supervisan la calidad de la construcción y se aseguran de que se cumplan los estándares de seguridad y los códigos de construcción. La supervisión de la construcción ayuda a asegurar que el proyecto se complete de manera exitosa y cumpla con las expectativas del cliente.</p>
      </AccordionItem>
    </Accordion>
  );
}
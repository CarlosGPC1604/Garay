'use client';
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";


export default function App() {
  return (
    <div className="paralax-2 py-[125px] w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {/* Title */}
        <div className="text-center lg:hidden">
          <div>
            <h2 className={` ${title({ color: "red" })} text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]`}>
              Te ofrecemos&nbsp;
            </h2>
            <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]">
              los mejores servicios
            </h2>
          </div>
        </div>
        {/* Title */}

        {/* Title */}
        <div className="flex items-center justify-center text-center hidden lg:block mt-[50px]">
          <div>
            <h2 className={` ${title({ color: "red" })} text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]`}>
              Te ofrecemos&nbsp;
            </h2>
            <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]">
              los mejores servicios
            </h2>
          </div>
        </div>
        {/* Title */}
      </div>
    </div>
  );
}

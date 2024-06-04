"use client";

import React from "react";
import { Avatar } from "@nextui-org/avatar";
import { FC } from "react";
import { Image } from "@nextui-org/image";

interface CardProps {
  title: string;
  description: string;
  src: string;
}

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible
};



const Card: FC<CardProps> = ({ title, description, src }) => {
  return (
      <div className="group w-full flex items-center rounded-lg bg-sky-800 p-5 transition relative duration-300 cursor-pointer hover:translate-y-[10px] hover:shadow-[0_-8px_0px_0px_#2196f3]">
        <div className="flex items-center">
          {" "}
          {/* Contenedor flex para centrar el avatar */}
          
          <Image
            width={300}
            alt="NextUI hero Image"
            src={src}
          />
        </div>

        <div className="ml-4">
          {" "}
          {/* Espacio a la izquierda del avatar */}
          <p className="text-white text-2xl">{title}</p>
          <p className="text-white text-sm">{description}</p>
        </div>
      </div>
  );
};

export default Card;

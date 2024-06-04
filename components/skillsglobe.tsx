// components/FloatingHeader.tsx
import { motion } from "framer-motion";
import { FC } from "react";
import {Avatar, AvatarGroup, AvatarIcon} from "@nextui-org/avatar";

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";

const skillsglobe: FC = () => {
  return (
    <div
    className="lg:col-span-2 text-center mb-8"
      
    >
      <motion.h1
        style={headerStyle}
        animate={{
          y: [0, -20, 0], // Animación de arriba hacia abajo
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="grid gap-4 p-4 grid-cols-5">
        <Avatar isBordered color="primary" src="https://es.react.dev/images/og-home.png" className="w-20 h-20 text-large" />
        <Avatar isBordered color="primary" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s" className="w-20 h-20 text-large" />
        <Avatar isBordered color="primary" src="https://pbs.twimg.com/profile_images/1255113654049128448/J5Yt92WW_400x400.png" className="w-20 h-20 text-large" />
        <Avatar isBordered color="primary" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzAxIzs2yRTPxONA1yBwMZdhkNwlqmIpxFug&s" className="w-20 h-20 text-large" />
        <Avatar isBordered color="primary" src="https://www.digitality.es/img-articulos/ampliadas/que-es-nextjs-y-para-que-sirve-1-1697560678.jpg" className="w-20 h-20 text-large" />
        </div>

      </motion.h1>
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  textAlign: "center",
};

const headerStyle: React.CSSProperties = {
  fontSize: "3rem",
  fontWeight: "bold",
};

export default skillsglobe;

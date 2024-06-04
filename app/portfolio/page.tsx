"use client"


import { title } from "@/components/primitives";
import Card from "@/components/cardportafolio";
import { motion } from "framer-motion";
import {Image} from "@nextui-org/image";

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible
};

const servicesData = [
  { title: "Agency Landing page", description: "Web/WordPress", src: "https://boston-react.vercel.app/assets/img/project-1.jpg" },
  { title: "NFT Art page", description: "Web/WordPress", src: "https://boston-react.vercel.app/assets/img/project-2.jpg" },
  { title: "RAYKO", description: "Web/WordPress", src: "https://boston-react.vercel.app/assets/img/project-3.jpg" },
  { title: "Browser Game Landing page", description: "Web/WordPress", src: "https://boston-react.vercel.app/assets/img/project-4.jpg" },
  { title: "Complete Plataform page", description: "Web/WordPress", src: "https://boston-react.vercel.app/assets/img/project-5.jpg" },
];

export default function ServicesPage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      className="grid gap-4 p-4 sm:grid-cols-1"
    >
      {servicesData.map((service, index) => (
        <motion.div key={index} variants={itemVariants}>
               <h1 className="text-2xl md:text-2xl lg:text-2xl font-bold mb-4">{service.title}</h1>
           <Image
      isBlurred
      width={540}
      src={service.src}
      alt="NextUI Album Cover"
    />
    <br></br>
    <br></br>
        </motion.div>
      ))}
    </motion.div>
  );
}

"use client"


import { title } from "@/components/primitives";
import Card from "@/components/cardservicies";
import { motion } from "framer-motion";

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible
};

const servicesData = [
  { title: "Web Design", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", src: "/service/desing.png" },
  { title: "Development", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", src: "service/skills.png" },
  { title: "SEO Marketing", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", src: "service/goals.png" },
  { title: "Service Four", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", src: "service/location.png" },
  { title: "Service Five", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", src: "service/duplicate.png" },
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
          <Card
            title={service.title}
            description={service.description}
            src={service.src}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

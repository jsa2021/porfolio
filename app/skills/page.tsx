"use client"

import { title } from "@/components/primitives";
import Image from "next/image";
import  FloatingHeader  from "../../components/skillscard"
import  SkillsGlobe  from "../../components/skillsglobe"
import { motion } from "framer-motion";

import React from "react";

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible
};

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell
} from "@nextui-org/table";


export default function SkillsPage() {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    exit={{ opacity: 0, transition: { duration: 1 } }}
    variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    className="grid gap-4 p-4 sm:grid-cols-1"
  >
    <div className="min-h-screen flex flex-col items-center p-4 md:p-2 lg:p-2">
    <section className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Componente de Título y Texto */}
      <motion.div variants={itemVariants} className="lg:col-span-2 text-center mb-8">
    
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Skills and Experience</h1>
        <p className="text-base md:text-lg lg:text-xl">
        I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.
        </p>
   
      </motion.div>
      {/* Componente de Tabla */}
      <motion.div variants={itemVariants} className="lg:col-span-2 text-center mb-8">
      <h2 className="text-2xl md:text-3xl lg:text-2xl font-bold mb-4">Work History</h2>
      <FloatingHeader></FloatingHeader>
  
  </motion.div>

      {/* Componente de Imagen */}
   
     
      <SkillsGlobe></SkillsGlobe>
    
     


    </section>
  </div>
  </motion.div>
  );
}

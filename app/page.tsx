"use client"

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import Image from "next/image";

import Card from "@/components/cvcard";
import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";



const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible
};

const floatVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop"
    }
  }
};


export default function Home() {
  return (

    
    <motion.article
    initial="hidden"
    animate="visible"
    exit={{ opacity: 0, transition: { duration: 1 } }}
    variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
  >
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      
      <div className="inline-block max-w-lg text-center justify-center">
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible
        }}
        
      >
        <Card></Card>
        <br />
        </motion.h1>
        <motion.div variants={itemVariants}>
        <h1 className={title()}>We Have&nbsp;</h1>
        </motion.div>
        <motion.div variants={itemVariants}>
        <h1 className={title({ color: "blue" })}>Design&nbsp;</h1>
        </motion.div>

        <motion.div variants={itemVariants}>
        <h1 className={title()}>Experience</h1>
        </motion.div>
        <motion.div variants={itemVariants}>
        <h2 className={subtitle({ class: "mt-4" })}>
        I design and develop services for customers of all sizes.
        </h2>
        </motion.div>
      </div>
      <motion.div variants={itemVariants}>
      <div className="mt-8">
        <Image
            src="/general.png"
            width={400}
            height={560}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
      </div>
      </motion.div>
    </section>
    </motion.article>
  );
}

"use client"

import { title } from "@/components/primitives";
import { motion } from "framer-motion";
import { Textarea } from "@nextui-org/input";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import emailjs from 'emailjs-com';
import React, { useState } from 'react';

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible
};

export default function ContactPage() {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send('service_x693eyq', 'template_rm66xy4', {
      from_name: formState.fullName,
      from_email: formState.email,
      subject: formState.subject,
      message: formState.message
    }, '9GJvao9Rjy2NWKLHh')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Correo enviado exitosamente');
      }, (err) => {
        console.error('FAILED...', err);
        alert('Hubo un error al enviar el correo');
      });

    setFormState({
      fullName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      className="grid gap-4 p-4 sm:grid-cols-1"
    >
      <div>
        <motion.div variants={itemVariants}>
          <h1 className="text-2xl font-bold text-white mb-6">Contact</h1>
        </motion.div>
        <form onSubmit={handleSubmit} method="post">
          <motion.div variants={itemVariants}>
            <div className="mb-4">
              <Input
                type="text"
                color="primary"
                label="FullName"
                placeholder="Enter your full name"
                className="max-w-[220px]"
                name="fullName"
                value={formState.fullName}
                onChange={handleChange}
                required
              />
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <div className="mb-4">
              <Input
                type="email"
                color="primary"
                label="Email"
                placeholder="Enter your email"
                className="max-w-[220px]"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <div className="mb-4">
              <Input
                type="text"
                color="primary"
                label="Subject"
                placeholder="Enter the subject"
                className="max-w-[220px]"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                required
              />
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <div className="mb-4">
              <Textarea
                label="Your message"
                color="primary"
                placeholder="Enter your message"
                className="max-w-xs"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
              />
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <div className="flex justify-center">
              <Button type="submit" color="primary">
                Send
              </Button>
            </div>
          </motion.div>
        </form>
      </div>
    </motion.div>
  );
}

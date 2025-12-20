"use client"

import { Service } from "@/public/data/services";
import React from "react";
import { motion } from "framer-motion";

export default function ServiceCard(service: Service) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: service.id * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="border border-primary p-5 rounded-md space-y-3 text-white/70"
    >
      <h2 className="text-primary font-bold text-xl">{service.title}</h2>
      <p>{service.description}</p>
      <h3 className="text-primary">Includes:</h3>
      <ul className="list-disc list-inside">
        {service.includes.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}

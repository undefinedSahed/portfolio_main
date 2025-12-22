"use client";

import { Service } from "@/public/data/services";
import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function ServiceCard(service: Service) {
  // Mouse tracking for the spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: service.id * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-2xl border border-white/5 bg-[#111111] p-8 overflow-hidden cursor-default"
    >
      {/* Spotlight Hover Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(253, 180, 0, 0.1),
              transparent 80%
            )
          `,
        }}
      />

      {/* Card Header */}
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <span className="text-4xl font-black text-white/5 group-hover:text-primary/20 transition-colors duration-500 italic">
            {service.id < 10 ? `0${service.id}` : service.id}
          </span>
          <div className="h-10 w-10 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300">
            <span>
              <ArrowDown className="w-4 h-4" />
            </span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform">
          {service.title}
        </h2>

        <p className="text-white/50 text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-px w-8 bg-primary/50" />
            <h3 className="text-[10px] uppercase tracking-[3px] text-primary font-bold">
              Service Scope
            </h3>
          </div>

          <ul className="space-y-2">
            {service.includes.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-sm text-white/70 group-hover:text-white/90 transition-colors"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary shadow-[0_0_8px_#fdb400]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

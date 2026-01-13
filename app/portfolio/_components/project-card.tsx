"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMobile } from "@/hooks/use-mobile";
import { Project } from "@/public/data/works";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobile();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{
        rotateX: isMobile ? 0 : rotateX,
        rotateY: isMobile ? 0 : rotateY,
        perspective: 1000,
      }}
      className="group relative h-full"
    >
      {/* Background Glow Effect */}
      <div className="absolute -inset-2 rounded-4xl bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#161616] transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-2xl">
        {/* Floating Image Section */}
        <div className="relative aspect-video overflow-hidden m-3 rounded-xl">
          <Link
            href={project.liveLink}
            target="_blank"
            className="cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="h-full w-full"
            >
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#161616] via-transparent to-transparent opacity-60" />
            </motion.div>
          </Link>
        </div>

        {/* Content Section */}
        <div className="flex flex-col grow p-5 pt-2">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <Link
              href={`/projects/${project.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="p-2 rounded-full bg-white/5 hover:bg-primary hover:text-black transition-all"
            >
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="text-sm text-white/50 line-clamp-4 mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Glassmorphism Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStacks.map((tech) => (
              <span
                key={tech}
                className="text-[10px] uppercase tracking-wider font-medium px-3 py-1 rounded-md bg-white/3 border border-white/5 text-white/70"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-auto flex items-center gap-3">
            <Link
              href={project.liveLink}
              target="_blank"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-black transition-transform hover:scale-[1.02] active:scale-95"
            >
              <Globe className="h-4 w-4" />
              Live Demo
            </Link>

            {project.githubLink && (
              <Link
                href={project.githubLink}
                target="_blank"
                className="p-2.5 rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

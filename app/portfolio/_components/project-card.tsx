"use client";

import { useState, useRef } from "react";
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
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobile();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true, margin: "-50px" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: isMobile ? 0 : rotateX,
          rotateY: isMobile ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        className="h-full"
      >
        <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-background transition-colors duration-300 hover:border-primary/50">
          {/* Image */}
          <div
            className="relative aspect-video overflow-hidden"
            style={{ transform: "translateZ(50px)" }}
          >
            <div className="absolute inset-0 z-10 bg-linear-to-b from-transparent to-background/80" />
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer cursor-pointer"
            >
              <Image
                src={project.thumbnail || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={500}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
              />
            </Link>
          </div>

          {/* Header */}
          <div className="p-4">
            <div className="flex items-center justify-between gap-2">
              <Link href={project.liveLink} target="_blank" rel="noopener">
                <h3 className="text-xl font-semibold transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
              </Link>

              <Link
                href={`/projects/${project.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="opacity-0 transition-opacity group-hover:opacity-100"
              >
                <ArrowUpRight className="h-5 w-5" />
                <span className="sr-only">Project details</span>
              </Link>
            </div>
            <p className="mt-2 line-clamp-2 text-sm text-white/70">
              {project.description}
            </p>
          </div>

          {/* Content */}
          <div className="grow px-4">
            <div className="mb-4 flex flex-wrap gap-2">
              {project.techStacks.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-secondary/10 px-3 py-1 text-xs transition-colors hover:bg-secondary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-auto flex justify-between gap-2 p-4">
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md border border-white/10 px-3 py-1.5 text-sm transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Globe className="h-4 w-4" />
              Demo
            </Link>
            {project.githubLink ? (
              <Link
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-md border border-white/10 px-3 py-1.5 text-sm transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Github className="h-4 w-4" />
                Code
              </Link>
            ) : (
              <span className="inline-flex cursor-not-allowed items-center gap-1 rounded-md border px-3 py-1.5 text-sm opacity-50">
                <Github className="h-4 w-4" />
                Private
              </span>
            )}
          </div>
        </div>
      </motion.div>

      {/* Optional modal placeholder */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setIsOpen(false)}
        >
          <div className="w-full max-w-3xl rounded-lg bg-background p-6">
            {/* Modal content here */}
          </div>
        </div>
      )}
    </>
  );
}

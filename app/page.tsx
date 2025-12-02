import Hero from "@/app/_components/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sahed Rahman - Full Stack Developer",
  description: "Portfolio of Sahed Rahman, a skilled full stack developer specializing in modern web applications using Next.js, React, Node.js, and more.",
}

export default function Home() {
  return (
    <div className="flex min-h-screen items-center">
      <Hero />
    </div>
  );
}

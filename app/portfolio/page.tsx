import { Metadata } from "next";
import React from "react";
import PortfolioHeader from "./_components/portfolio_header";
import Works from "./_components/works";

export const metadata: Metadata = {
  title: "Portfolio - Sahed Rahman",
  description:
    "Learn more about Sahed Rahman, a professional Full Stack Developer specializing in MERN stack development, React.js, Node.js, Express.js, and MongoDB.",
};

export default function Portfolio() {
  return (
    <>
      <PortfolioHeader />
      <Works />
    </>
  );
}

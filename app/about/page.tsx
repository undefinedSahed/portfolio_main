import { Metadata } from "next";
import React from "react";
import PersonalInfo from "./_components/personal-info";
import MySkill from "./_components/my-skills";
import ExpandEdu from "./_components/exp-edu";
import PageHeader from "../_components/page-header";

export const metadata: Metadata = {
  title: "About Me - Sahed Rahman",
  description:
    "Learn more about Sahed Rahman, a professional Full Stack Developer specializing in MERN stack development, React.js, Node.js, Express.js, and MongoDB.",
};

export default function page() {
  return (
    <>
      <PageHeader backgroundText="Resume" headOne="About" headTwo="Me" />
      <PersonalInfo />
      <MySkill />
      <ExpandEdu />
    </>
  );
}

import { Metadata } from "next";
import React from "react";
import PageHeader from "../_components/page-header";

export const metadata: Metadata = {
  title: "Services - Sahed Rahman",
  description:
    "I provide full stack IT services in web devlopment, custom website, UI/UX design, SEO, PPC Campaign and more.",
};

export default function ServicePage() {
  return (
    <>
      <PageHeader backgroundText="Service" headOne="What I" headTwo="Provide"/>
    </>
  );
}

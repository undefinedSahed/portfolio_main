import { Metadata } from "next";
import React from "react";
import PageHeader from "../_components/page-header";
import { Service, services } from "@/public/data/services";
import ServiceCard from "./_components/service-card";

export const metadata: Metadata = {
  title: "Services - Sahed Rahman",
  description:
    "I provide full stack IT services in web devlopment, custom website, UI/UX design, SEO, PPC Campaign and more.",
};

export default function ServicePage() {
  return (
    <div className="max-w-7xl mx-auto px-2 lg:px-0">
      <PageHeader backgroundText="Service" headOne="What I" headTwo="Build" />
      <div className="grid frid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-20">
        {services.map((service: Service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            includes={service.includes}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
}

import React from "react";
import ContactForm from "./_components/contact-form";
import PageHeader from "../_components/page-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Sahed Rahman",
  description:
    "Feel free to reach out for collaborations, inquiries, or just to say hello. I'm always open to connecting with new people and opportunities.",
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-2 lg:px-0">
      <PageHeader backgroundText="Contact" headOne="Get" headTwo="In Touch" />
      <ContactForm />
    </div>
  );
}

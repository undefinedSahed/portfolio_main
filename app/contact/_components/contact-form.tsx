"use client";

import React, { useState, useEffect } from "react";
import { Mail, Phone, Send, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setToast({ message: "Message sent successfully!", type: "success" });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error();
      }
    } catch (err) {
      setToast({ message: `Something went wrong: ${err}`, type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // Removed "bg-black" so it inherits your specific background color
    <section id="contact" className="pb-20 text-white relative">
      <div className="relative z-10 px-2">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h4 className="text-4xl font-bold">
                Let&apos;s build <span className="text-primary">together.</span>
              </h4>
              <p className="text-white/40 text-lg leading-relaxed">
                I’m open to freelance and full-time opportunities, partnering
                with teams to turn complex challenges into clear, engaging, and
                user-friendly digital experiences that balance strong visual
                design with seamless usability.
              </p>
            </div>

            <div className="lg:space-y-10 space-y-8">
              <ContactInfoItem
                icon={<Mail />}
                label="Mail me"
                value="sahedrahmanshakil@gmail.com"
                href="mailto:sahedrahmanshakil@gmail.com"
                subtext="I usually respond within 24 hours."
              />
              <ContactInfoItem
                icon={<Phone />}
                label="Call me"
                value="+880 1619-778199"
                href="tel:+8801619778199"
                subtext="Available Saturday-Friday for calls."
              />
            </div>
            <div className="lg:hidden flex justify-center items-center gap-4">
              <Link
                href="https://github.com/undefinedSahed"
                target="_blank"
                className="h-10 w-10 rounded-full bg-secondary hover:bg-primary flex justify-center items-center cursor-pointer"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mern-sahed"
                target="_blank"
                className="h-10 w-10 rounded-full bg-secondary hover:bg-primary flex justify-center items-center cursor-pointer"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://x.com/sahed_rahman_15"
                target="_blank"
                className="h-10 w-10 rounded-full bg-secondary hover:bg-primary flex justify-center items-center cursor-pointer"
              >
                <Image
                  src="/twitter1.png"
                  alt="Twitter"
                  width={18}
                  height={18}
                />
              </Link>
              <Link
                href="mailto:sahedrahmanshakil@gmail.com"
                target="_blank"
                className="h-10 w-10 rounded-full bg-secondary hover:bg-primary flex justify-center items-center cursor-pointer"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Transparent/Seamless Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <form onSubmit={handleSubmit} className="lg:space-y-8 space-y-5">
              <div className="grid md:grid-cols-2 gap-8">
                <FormInput
                  name="name"
                  label="Full Name"
                  placeholder="John Doe"
                />
                <FormInput
                  name="email"
                  label="Email Address"
                  type="email"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-3">
                <label className="text-xs uppercase tracking-widest font-black text-white/30">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="What's on your mind?"
                  className="w-full bg-white/3 border border-white/10 rounded-md p-6 text-white outline-none focus:border-primary/50 transition-all placeholder:text-white/10"
                />
              </div>

              <button
                disabled={isSubmitting}
                className="w-full group relative flex items-center justify-center gap-3 bg-primary py-4 rounded-2xl font-bold uppercase text-black overflow-hidden transition-all active:scale-[0.98] disabled:opacity-50 cursor-pointer"
              >
                <span className="z-10">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
                {!isSubmitting && (
                  <Send
                    size={18}
                    className="z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                )}
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FormInput({
  name,
  label,
  type = "text",
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <div className="space-y-3">
      <label className="text-xs uppercase tracking-wider font-black text-white/30">
        {label}
      </label>
      <input
        name={name}
        required
        type={type}
        placeholder={placeholder}
        className="w-full bg-white/3 border border-white/10 rounded-md px-6 py-4 text-white outline-none focus:border-primary/50 transition-all placeholder:text-white/10"
      />
    </div>
  );
}

function ContactInfoItem({
  icon,
  label,
  value,
  href,
  subtext,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  label: string;
  value: string;
  href: string;
  subtext: string;
}) {
  return (
    <div className="flex items-center gap-6 group">
      <div className="text-primary bg-secondary p-3 rounded-lg">
        {React.cloneElement(icon, { size: 24, strokeWidth: 2 })}
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">
          {label}
        </p>
        <a
          href={href}
          className="text-lg text-white hover:text-primary transition-colors font-bold block"
        >
          {value}
        </a>
        <p className="text-sm text-white/30">{subtext}</p>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BriefcaseBusiness,
  Home,
  Mail,
  Menu,
  Settings,
  User,
  X,
} from "lucide-react";

const navLinks = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/about", icon: User, label: "About" },
  { href: "/portfolio", icon: BriefcaseBusiness, label: "Portfolio" },
  { href: "/service", icon: Settings, label: "Service" },
  { href: "/contact", icon: Mail, label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden lg:block fixed right-5 top-1/2 -translate-y-1/2 z-50 mr-2">
        <ul className="flex flex-col gap-4">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-secondary text-white transition-all duration-300 ease-out hover:bg-primary"
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />

                  <div className="absolute right-full mr-3 px-4 py-2 bg-primary rounded-full whitespace-nowrap text-sm font-medium opacity-0 -translate-x-2 transition-all duration-300 ease-out pointer-events-none group-hover:opacity-100 group-hover:translate-x-0">
                    {link.label}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-5 z-50 p-2 rounded-md bg-secondary border border-secondary/30 text-white transition-colors duration-200 hover:bg-primary"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      <nav
        className={`lg:hidden fixed inset-0 top-16 left-0 right-0 bg-background/95 backdrop-blur-sm z-40 transition-all duration-500 ease-out",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )`}
      >
        <ul className="flex flex-col pt-4 px-6 gap-0">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 px-4 py-4 text-lg font-medium text-foreground/80 transition-all duration-200 ease-out hover:text-primary hover:bg-primary/10 rounded-lg border-b border-border/30 last:border-b-0"
                >
                  <Icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                  <span>{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 top-16 bg-black/20 z-30 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}

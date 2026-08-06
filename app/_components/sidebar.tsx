"use client";

import Link from "next/link";
import { BriefcaseBusiness, Home, Mail, Settings, User } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/about", icon: User, label: "About" },
  { href: "/portfolio", icon: BriefcaseBusiness, label: "Portfolio" },
  { href: "/services", icon: Settings, label: "Service" },
  { href: "/contact", icon: Mail, label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

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
                  className={`group relative flex items-center justify-center w-14 h-14 rounded-full text-white transition-all duration-300 ease-out hover:bg-primary ${
                    pathname === link.href ? "bg-primary" : "bg-secondary"
                  }`}
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />

                  <div className="absolute right-full mr-3 px-4 py-2 bg-primary rounded-lg whitespace-nowrap text-sm font-medium opacity-0 -translate-x-2 transition-all duration-300 ease-out pointer-events-none group-hover:opacity-100 group-hover:translate-x-2">
                    {link.label}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Menu */}

      {/* Mobile Menu Backdrop */}
      <div
        className="fixed lg:hidden left-1/2 bottom-4 z-40 pointer-events-none"
        style={{ transform: "translateX(-50%)" }}
      >
        <div
          className="w-[min(calc(100vw-2rem),28rem)] pointer-events-auto rounded-full border border-secondary bg-[#0c0c0c]/95 backdrop-blur-md px-4 py-3 overflow-hidden"
          style={{
            paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))",
          }}
        >
          <ul className="flex gap-x-3 items-center justify-center">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`group relative flex items-center justify-center w-10 h-10 rounded-full text-white transition-all duration-300 ease-out ${
                      pathname === link.href ? "bg-primary" : "bg-secondary"
                    }`}
                    aria-label={link.label}
                    title={link.label}
                  >
                    <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

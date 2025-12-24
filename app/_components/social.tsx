import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SocialLinks() {
  return (
    <div className="fixed left-14 bottom-12 hidden lg:block">
      <div className="space-y-4">
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
          <Image src="/twitter1.png" alt="Twitter" width={18} height={18} />
        </Link>
        <Link
          href="mailto:sahedrahmanshakil@gmail.com"
          target="_blank"
          className="h-10 w-10 rounded-full bg-secondary hover:bg-primary flex justify-center items-center cursor-pointer"
        >
          <Mail className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}

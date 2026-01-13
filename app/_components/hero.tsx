"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="container">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center space-y-4 lg:space-y-0">
        <div className="fixed bg-primary h-[200%] w-[105%] -left-[83%] -top-[5%] -rotate-15 -z-10 hidden lg:block"></div>
        <div className="lg:w-1/2">
          <Image
            src="/msr.png"
            width={5000}
            height={5000}
            alt="Sahed - Full Stack Developer"
            className="lg:h-[calc(100vh-80px)] h-56 max-w-56 rounded-full object-cover lg:max-w-5/7 lg:rounded-4xl border-4 border-secondary"
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-start">
          <div className="">
            <h1 className='text-primary lg:text-6xl text-[25px] font-bold relative after:absolute after:top-[50%] after:left-[-60px] after:translate-y-[-50%] after:bg-[#ffb400] after:h-[5px] after:w-[50px] after:content-[""] after:rounded-xl after:hidden after:lg:block'>
              I&apos;M SAHED RAHMAN.
            </h1>
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                1000,
                "Full Stack Developer",
                1000,
                "React.js Developer",
                1000,
                "Node.js Developer",
                1000,
                "Express.js Developer",
                1000,
                "MongoDB Specialist",
                1000,
                "DevOPS Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="lg:text-[49px] text-[25px] text-white font-semibold"
              repeat={Infinity}
            />
            <p className="text-white text-sm lg:text-xl lg:font-normal font-light lg:leading-10 leading-6 lg:pb-10 pb-7 lg:pt-5 pt-2 lg:pr-20">
              A Full Stack Developer experienced in building and shipping
              production-ready web applications — from development to
              deployment. I work with React, Next.js, Tailwind CSS, Node.js,
              Express.js, MongoDB, and I&apos;m familiar with DevOps practices
              such as CI/CD pipelines, environment configuration,
              containerization, and cloud deployments.
            </p>
            <Link href={{ pathname: "/about" }}>
              <button className='relative z-30 overflow-hidden lg:pl-10 pl-6 lg:pr-20 pr-14 lg:py-4 py-3 border border-[#ffb400] rounded-[40px] after:absolute after:content-[""] after:top-0 after:-right-[250px] after:h-full after:w-full after:bg-[#ffb400] after:-z-10 after:duration-500 after:ease-in-out hover:after:right-0 cursor-pointer'>
                <span className="text-[15px] text-white font-bold uppercase">
                  More About Me
                </span>
                <ArrowRight className="absolute z-30 h-[50px] w-[50px] lg:h-[60px] lg:w-[60px] text-white rounded-full bg-[#ffb400] flex justify-center items-center top-1/2 -right-1 -translate-y-1/2 px-3.5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

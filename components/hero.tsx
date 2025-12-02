"use client";

import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <div className="container">
      <div className="flex justify-between items-center">
        <div className="fixed bg-primary h-[200%] w-[105%] -left-[83%] -top-[5%] -rotate-15 -z-10"></div>
        <div className="w-1/2">
          <Image
            src="/me/sahed.png"
            width={1000}
            height={1000}
            alt="Sahed - Full Stack Developer"
            className="h-[calc(100vh-80px)] object-cover max-w-5/7 rounded-4xl"
          />
        </div>
        <div className="w-1/2">
          <div className="">
            <h1 className='text-primary lg:text-[49px] text-[25px] font-bold relative after:absolute after:top-[50%] after:left-[-60px] after:translate-y-[-50%] after:bg-[#ffb400] after:h-[5px] after:w-[50px] after:content-[""] after:rounded-xl after:hidden after:lg:block'>
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
              ]}
              wrapper="span"
              speed={50}
              className="lg:text-[49px] text-[25px] text-white font-semibold"
              repeat={Infinity}
            />
            <p className="text-white text-[15px] lg:text-2xl lg:font-normal font-light lg:leading-10 leading-6 lg:pb-10 pb-7 lg:pt-5 pt-2 lg:pr-20">
              I&apos;m a professional <b>Front-End Developer</b> and focused on
              crafting clean & user-friendly experiences. With expertise in
              Bootstrap, Tailwind CSS, React JS and Next JS. I bring innovative
              web solutions to life. Let&apos;s build something great together!
            </p>
            <button className='relative z-30 overflow-hidden lg:pl-10 pl-6 lg:pr-20 pr-14 lg:py-4 py-3 border border-[#ffb400] rounded-[40px] after:absolute after:content-[""] after:top-0 after:-right-[250px] after:h-full after:w-full after:bg-[#ffb400] after:-z-10 after:duration-500 after:ease-in-out hover:after:right-0 cursor-pointer'>
              <span className="text-[15px] text-white font-bold uppercase">
                More About Me
              </span>
              <MoveRight className="absolute z-30 h-[50px] w-[50px] lg:h-[60px] lg:w-[60px] text-white rounded-full bg-[#ffb400] flex justify-center items-center top-1/2 -right-1 -translate-y-1/2 px-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

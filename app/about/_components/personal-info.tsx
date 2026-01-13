import React from "react";
import { Download } from "lucide-react";

export default function PersonalInfo() {
  return (
    <>
      <section className="max-w-7xl px-2 lg:px-0 mx-auto">
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-[50%] w-full">
            <div className="pb-8">
              <h2 className="font-bold lg:text-[26px] text-[20px] text-white tracking-wider">
                PERSONAL INFOS
              </h2>
            </div>
            <div className="flex justify-between">
              <div className="">
                <ul className="flex flex-col gap-6">
                  <li className="lg:text-[18px] text-[15px] text-white lg:flex gap-x-2">
                    {" "}
                    <p className="opacity-80">First Name : </p>
                    <span className="opacity-100 font-medium">Md. Sahed</span>
                  </li>
                  <li className="lg:text-[18px] text-[15px] text-white lg:flex gap-x-2">
                    {" "}
                    <p className="opacity-80">Last Name : </p>
                    <span className="opacity-100 font-medium">Rahman</span>
                  </li>
                  <li className="lg:text-[18px] text-[15px] text-white lg:flex gap-x-2">
                    {" "}
                    <p className="opacity-80">Age : </p>
                    <span className="opacity-100 font-medium">22 Years</span>
                  </li>
                  <li className="lg:text-[18px] text-[15px] text-white lg:flex gap-x-2">
                    {" "}
                    <p className="opacity-80">Nationality : </p>
                    <span className="opacity-100 font-medium">Bangladeshi</span>
                  </li>
                  <li className="lg:text-[18px] text-[15px] text-white lg:flex gap-x-2">
                    {" "}
                    <p className="opacity-80">Freelance : </p>
                    <span className="opacity-100 font-medium">Available</span>
                  </li>
                </ul>
              </div>
              <div className="">
                <ul className="flex flex-col gap-6">
                  <li className="lg:text-[18px] text-[15px] text-white lg:flex gap-x-2">
                    {" "}
                    <p className="opacity-80">Address : </p>
                    <span className="opacity-100 font-medium">Dhaka</span>
                  </li>
                  <li className="lg:text-[18px] text-[15px] text-white lg:flex gap-x-2">
                    {" "}
                    <p className="opacity-80">Phone : </p>
                    <a
                      href="tel:+8801619778199"
                      target="blank"
                      className="opacity-100 font-medium"
                    >
                      +880 1619-778199
                    </a>
                  </li>
                  <li className="lg:text-[18px] text-[15px] text-white lg:flex gap-x-2">
                    {" "}
                    <p className="opacity-80">Email : </p>
                    <a
                      href="mailto:sahedrahmanshakil@gmail.com"
                      target="blank"
                      className="opacity-100 font-medium"
                    >
                      contact@sahed.com
                    </a>
                  </li>
                  <li className="lg:text-[18px] text-[15px] text-white lg:flex gap-x-2">
                    {" "}
                    <p className="opacity-80">LinkedIn : </p>
                    <a
                      href="https://www.linkedin.com/in/mern-sahed/"
                      target="blank"
                      className="opacity-100 font-medium"
                    >
                      Md. Sahed Rahman
                    </a>
                  </li>
                  <li className="lg:text-[18px] text-[15px] text-white lg:flex gap-x-2">
                    {" "}
                    <p className="opacity-80">Language : </p>
                    <span className="opacity-100 font-medium">
                      English, Bengali
                    </span>
                  </li>
                </ul>
              </div>
              <div className=""></div>
            </div>
            <button className='relative lg:mt-12 my-10 z-30 overflow-hidden lg:pl-10 pl-6 lg:pr-20 pr-14 lg:py-4 py-3 border border-primary rounded-full cursor-pointer after:absolute after:content-[""] after:top-0 after:-right-[300px] after:h-full after:w-full after:bg-primary after:-z-10 after:duration-500 after:ease-in-out hover:after:right-0'>
              <a
                href="/resume.pdf"
                download="Resume of Frontend Developer Sahed"
              >
                <span className="text-[15px] font-bold text-white uppercase">
                  Download Resume
                </span>
                <Download className="absolute z-30 lg:h-[55px] lg:w-[55px] h-[50px] w-[50px] text-white rounded-full bg-primary flex justify-center items-center top-1/2 right-0 -translate-y-1/2 px-4" />
              </a>
            </button>
          </div>
          <div className="lg:w-[50%] w-full flex gap-y-5 justify-between flex-wrap lg:-mt-12">
            <div className="w-[48%] border border-secondary rounded-lg py-2 lg:py-6 lg:px-7 px-4">
              <h2 className="font-bold lg:text-[50px] text-[40px] lg:pb-6 text-primary">
                02+
              </h2>
              <h3 className='font-normal text-[16px] lg:pl-9 uppercase text-white relative after:absolute after:top-1/2 after:-translate-y-1/2 after:left-0 after:content-[""] after:h-0.5 after:w-8 after:hidden after:lg:block after:bg-white after:opacity-60'>
                Years of Experience
              </h3>
            </div>
            <div className="w-[48%] border border-secondary rounded-lg py-2 lg:py-6 lg:px-7 px-4">
              <h2 className="font-bold lg:text-[50px]  text-[40px] lg:pb-6 text-primary">
                40+
              </h2>
              <h3 className='font-normal text-[16px] lg:pl-9 uppercase text-white relative after:absolute after:top-1/2 after:-translate-y-1/2 after:left-0 after:content-[""] after:h-0.5 after:w-8 after:hidden after:lg:block after:bg-white after:opacity-60'>
                Projects Done
              </h3>
            </div>
            <div className="w-[48%] border border-secondary rounded-lg py-2 lg:py-6 lg:px-7 px-4">
              <h2 className="font-bold lg:text-[50px] text-[40px] lg:pb-6 text-primary">
                30+
              </h2>
              <h3 className='font-normal text-[16px] lg:pl-9 uppercase text-white relative after:absolute after:top-1/2 after:-translate-y-1/2 after:left-0 after:content-[""] after:h-0.5 after:w-8 after:hidden after:lg:block after:bg-white after:opacity-60'>
                Happy Clients
              </h3>
            </div>
            <div className="w-[48%] border border-secondary rounded-lg py-2 lg:py-6 lg:px-7 px-4">
              <h2 className="font-bold lg:text-[50px] text-[40px] lg:pb-6 text-primary">
                03+
              </h2>
              <h3 className='font-normal text-[16px] lg:pl-9 uppercase text-white relative after:absolute after:top-1/2 after:-translate-y-1/2 after:left-0 after:content-[""] after:h-0.5 after:w-8 after:hidden after:lg:block after:bg-white after:opacity-60'>
                Awards Won
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

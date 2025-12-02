// src/CircularProgress.js
import Image from "next/image";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgress = ({
  percentage,
  imageSrc,
  topic,
}: {
  percentage: number;
  imageSrc: string;
  topic: string;
}) => {
  return (
    <div className="relative lg:w-32 lg:h-32 w-[90px] h-[90px]">
      {/* Circular Progress Bar */}
      <CircularProgressbar
        value={percentage}
        styles={buildStyles({
          pathColor: "#ffb400",
          trailColor: "#ffffff12",
          strokeLinecap: "butt",
        })}
      />
      {/* Image inside the progress bar */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={imageSrc}
          alt="progress-label"
          width={40}
          height={40}
          className="lg:w-10 w-7"
        />
      </div>
      <div className="text-center lg:pt-6 pt-2">
        <span className="text-white lg:text-[15px] text-[13px] uppercase font-normal">
          {topic}
        </span>
      </div>
    </div>
  );
};

export default CircularProgress;

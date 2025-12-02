import React from "react";
import Html from "../assets/html.png";
import css from "../assets/css.png";
import JS from "../assets/javascript.png";
import Boot from "../assets/bootstrap.png";
import TW from "../assets/tailwind.svg";
import react from "../assets/react.svg";
import Next from "../assets/next.svg";
import GitHub from "../assets/github.png";
import CircularProgress from "./circular-progress";

export default function MySkill() {
  const data = [
    { percentage: 75, label: "", imaeSrc: Html, topic: "HTML" },
    { percentage: 70, label: "", imaeSrc: css, topic: "CSS" },
    { percentage: 60, label: "", imaeSrc: JS, topic: "Javascript" },
    { percentage: 90, label: "", imaeSrc: Boot, topic: "Bootstrap" },
    { percentage: 90, label: "", imaeSrc: TW, topic: "Tailwind css" },
    { percentage: 70, label: "", imaeSrc: react, topic: "React" },
    { percentage: 40, label: "", imaeSrc: Next, topic: "Next JS" },
    { percentage: 50, label: "", imaeSrc: GitHub, topic: "GitHub" },
  ];
  return (
    <>
      <div className="lg:py-36 py-12">
        <div className="text-center lg:pb-12 pb-8">
          <h3 className="lg:text-[26px] text-[20px] text-white font-bold uppercase font-pops">
            My Skills
          </h3>
        </div>
        <div className="flex justify-between flex-wrap lg:gap-y-28 gap-y-16">
          {data.map((item, index) => (
            <div key={index} className="lg:w-[23%] w-[48%] flex justify-center">
              <CircularProgress
                percentage={item.percentage}
                imageSrc={item.imaeSrc}
                topic={item.topic}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

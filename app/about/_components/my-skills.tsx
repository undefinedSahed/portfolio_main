"use client";

import CircularProgress from "./circular-progress";
import Html from "@/public/stacks/html.png";
import Css from "@/public/stacks/css.png";
import JS from "@/public/stacks/javascript.png";
import TW from "@/public/stacks/tailwind.svg";
import ReactLogo from "@/public/stacks/react.svg";
import NextLogo from "@/public/stacks/next.svg";
import Git from "@/public/stacks/git.png";
import Redux from "@/public/stacks/redux.png";
import ReactQuery from "@/public/stacks/react-query.png";
import GSAP from "@/public/stacks/gsap.png";
import FramerMotion from "@/public/stacks/framer-motion.png";
import NodeJS from "@/public/stacks/node-js.png";
import ExpressJS from "@/public/stacks/express-js.png";
import SocketIO from "@/public/stacks/socket.png";
import MongoDB from "@/public/stacks/mongodb.png";
import Firebase from "@/public/stacks/firebase.png";
import Nginx from "@/public/stacks/nginx.png";
import AWS from "@/public/stacks/aws.png";

export default function MySkill() {
  const data = [
    { percentage: 75, imageSrc: Html, topic: "HTML" },
    { percentage: 70, imageSrc: Css, topic: "CSS" },
    { percentage: 60, imageSrc: JS, topic: "Javascript" },
    { percentage: 90, imageSrc: TW, topic: "Tailwind CSS" },
    { percentage: 70, imageSrc: ReactLogo, topic: "React.js" },
    { percentage: 75, imageSrc: NextLogo, topic: "Next.js" },
    { percentage: 60, imageSrc: Redux, topic: "Redux" },
    { percentage: 80, imageSrc: ReactQuery, topic: "React Query" },
    { percentage: 60, imageSrc: GSAP, topic: "GSAP" },
    { percentage: 80, imageSrc: FramerMotion, topic: "Framer Motion" },
    { percentage: 50, imageSrc: NodeJS, topic: "Node.js" },
    { percentage: 75, imageSrc: ExpressJS, topic: "Express.js" },
    { percentage: 40, imageSrc: SocketIO, topic: "Socket.io" },
    { percentage: 85, imageSrc: MongoDB, topic: "MongoDB" },
    { percentage: 80, imageSrc: Firebase, topic: "Firebase" },
    { percentage: 30, imageSrc: Nginx, topic: "Nginx" },
    { percentage: 30, imageSrc: AWS, topic: "AWS" },
    { percentage: 80, imageSrc: Git, topic: "Git" },
  ];

  return (
    <section className="lg:py-36 py-12 max-w-7xl px-2 lg:px-0 mx-auto">
      <div className="text-center lg:pb-12 pb-8">
        <h3 className="lg:text-[26px] text-[20px] text-white font-bold uppercase font-pops">
          My Skills
        </h3>
      </div>

      <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 justify-between lg:gap-y-28 gap-y-16">
        {data.map((item, index) => (
          <div key={index} className="flex justify-center">
            <CircularProgress
              percentage={item.percentage}
              imageSrc={item.imageSrc}
              topic={item.topic}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

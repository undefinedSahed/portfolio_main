import React from "react";
import ProjectCard from "./project-card";
import { Projects } from "@/public/data/works";

export default function Works() {
  return (
    <div className="pb-20 max-w-7xl px-2 lg:px-0 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Projects.map((item, index) => (
          <ProjectCard key={index} project={item} index={index} />
        ))}
      </div>
    </div>
  );
}

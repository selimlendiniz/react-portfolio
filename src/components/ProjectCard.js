import React from "react";
import demoPng from "../assets/storyset/appImageDemo.png";
import UsedTechCard from "./UsedTechCard";

export default function ProjectCard({
  title,
  description,
  usedTech,
  link,
  className,
}) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={demoPng} alt="project image" />
      <p>{description}</p>

      <ul>
        {usedTech.map((tech, index) => (
          <UsedTechCard key={index} tech={tech} />
        ))}
      </ul>
    </div>
  );
}

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
    <div
      className={
        "flex flex-col px-4 py-4 bg-blueSoft w-max rounded-xl " + className
      }
    >
      <h1 className="w-max mb-4 text-s">{title}</h1>
      <img className="mb-4" src={demoPng} alt="project image" />
      <p className="inline max-w-max mb-4 text-p opacity-50 italic">
        {description}
      </p>

      <ul className="w-max">
        {usedTech.map((tech, index) =>
          index < 5 ? (
            <UsedTechCard className={"mb-4"} key={index} tech={tech} />
          ) : null
        )}
      </ul>
    </div>
  );
}

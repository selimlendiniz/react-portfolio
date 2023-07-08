import React from "react";
import SkillCard from "./SkillCard";

export default function SkillsContainer({ skillArray, title, className }) {
  return (
    <div
      className={
        "flex flex-wrap flex-col relative pt-10 px-5 border border-dashed rounded-3xl " +
        className
      }
    >
      <div className="left-0 top-0 absolute">
        <h2 className="absolute left-7 -top-2 transform bg-pageBackground px-4 w-max">
          {title}
        </h2>
      </div>

      <div className="flex flex-wrap">
        {skillArray.map((skill, index) => (
          <SkillCard
            className={"mr-4  mb-10 items-center"}
            key={index}
            icon={skill.icon}
            title={skill.title}
            description={skill.description}
            status={skill.status}
          />
        ))}
      </div>
    </div>
  );
}

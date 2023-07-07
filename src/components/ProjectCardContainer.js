import React from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectCardContainer({ projects }) {
  return (
    <div className="flex flex-wrap justify-center">
      {projects.map((project, index) => (
        <ProjectCard
          className={"mb-4 mr-4"}
          title={project.title}
          description={project.description}
          usedTech={project.usedTech}
          link={project.link}
        />
      ))}
    </div>
  );
}

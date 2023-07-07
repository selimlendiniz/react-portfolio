import React from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectCardContainer({ projects }) {
  return (
    <>
      {projects.map((project, index) => (
        <ProjectCard
          title={project.title}
          description={project.description}
          usedTech={project.usedTech}
          link={project.link}
        />
      ))}
    </>
  );
}

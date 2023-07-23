import React from "react";
import AboutCard from "../components/AboutCard";
import SkillsSvg from "../assets/storyset/Skills.svg";
import SkillsContainer from "../components/SkillsContainer";
import { programmLinganguages } from "../variables/programmingLanguages";
import { libariesFrameworks } from "../variables/libariesFrameworks";
import { skills } from "../variables/skills";

export default function Skills() {
  document.title = "Skills & Tools";
  return (
    <main className="grid grid-cols-12">
      <div className="col-start-2 col-end-12 flex flex-col justify-between">
        <AboutCard header={"Skills & Tools"} svg={SkillsSvg} />
        <SkillsContainer
          className={"mb-4"}
          skillArray={programmLinganguages}
          title="Programming Languages"
        />
        <SkillsContainer
          className={"mb-4"}
          skillArray={libariesFrameworks}
          title="Libaries & FrameWorks"
        />

        <SkillsContainer
          className={"mb-4"}
          skillArray={skills}
          title="Skills"
        />
      </div>
    </main>
  );
}

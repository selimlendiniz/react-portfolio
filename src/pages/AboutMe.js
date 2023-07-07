import React from "react";
import AboutMeSvg from "../assets/storyset/AboutMe.svg";
import EducationSvg from "../assets/storyset/Education.svg";
import SwimmingSvg from "../assets/storyset/Swim.svg";
import AboutCard from "../components/AboutCard";

export default function AboutMe() {
  const aboutmeText = [
    "Hello, I'm Selim I have been interested in technology and cosince I was little. And as I got older, I found that my interestincreased. In order to do the job I love, I entered SakaryaUniversity Computer Engineering Department in 2020. I startedprogramming with java in 2020. Since I started programming I havetried many programming languages to find which one is right for me.Java Python JavaScript C++ C#... In 2022, I found frontenddevelopment suitable for myself and focused on javascript. Sincethen I have been working on javascript and its libraries.",
  ];

  const educationText = [
    "High School: Odemis Sinav Koleji ",
    " University: Sakarya University Computer Engineering",
  ];

  const hobbiesText = [
    "Swimming",
    "Playing Chess",
    "Basketball",
    "Computer Games",
  ];

  return (
    <>
      <main className="grid grid-cols-12 gap-y-24 py-16">
        <section className="flex justify-center items-center col-start-2 col-end-12 h-max ">
          <div className="flex flex-col w-2/4 mr-8">
            <h1 className="text-xxl mb-4 inline">So, Who Am I?</h1>
            <h2 className="text-m inline">
              I'm a front-end developer studying computer science. My job is to
              make simple or advanced web applications that will help you. My
              goals are to write clean, SOLID, readable, redeveloped, testable
              high quality code.
            </h2>
          </div>
          <img
            src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
            alt="Selim Arda Cevik"
            className="h-auto w-1/4"
          />
        </section>
        <div className="col-start-2 col-end-12">
          <AboutCard header={"About Me"} svg={AboutMeSvg} text={aboutmeText} />
          <AboutCard
            header={"Education"}
            svg={EducationSvg}
            text={educationText}
          />
          <AboutCard
            header={"My Hobbies"}
            svg={SwimmingSvg}
            text={hobbiesText}
          />
        </div>
      </main>
    </>
  );
}

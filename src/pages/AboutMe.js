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

  const whoAmIText = [
    "I'm a front-end developer studying computer science. My job is to make simple or advanced web applications that will help you. My  goals are to write clean, SOLID, readable, redeveloped, testable  high quality code.",
  ];

  document.title = "About Me";
  return (
    <>
      <main className="grid grid-cols-12 gap-y-24 py-16">
        <section className="flex flex-wrap justify-center items-center col-start-2 col-end-12">
          <div className="flex flex-col mr-8  text-center lg:text-left">
            <h1 className="lg:text-xxl text-l mb-4 text-center">
              So, Who Am I?
            </h1>
            <h2 className="text-s mb-4 lg:text-m text-center">{whoAmIText}</h2>
          </div>
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

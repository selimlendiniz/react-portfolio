import React from "react";
import AboutCard from "../components/AboutCard";
import myProjectsSvg from "../assets/storyset/MyProjects.svg";

export default function MyProjects() {
  return (
    <main className="grid grid-cols-12">
      <div className="col-start-2 col-end-12 flex flex-col justify-between">
        <AboutCard header={"My MyProjects"} svg={myProjectsSvg} />
      </div>
    </main>
  );
}

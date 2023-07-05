import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="grid grid-cols-12">
      <main className="col-start-2 col-end-12 flex flex-row justify-evenly items-center h-min mt-4">
        <div className="text-center">
          <h1 className="text-xxl mb-4">Selim Arda Cevik</h1>
          <h2 className="text-s">
            Software Engineer,Front End & App Developer
          </h2>
        </div>
        <img
          src="https://i.ibb.co/0jZ3Q0L/IMG-20210606-162751.jpg"
          alt="Selim Arda Cevik"
          className="rounded-full w-96 h-96"
        />
      </main>
    </div>
  );
}

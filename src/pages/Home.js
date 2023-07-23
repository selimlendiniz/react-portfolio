import React from "react";
import Navbar from "../components/Navbar";
import myPicture from "../assets/photos/myPhoto.png";

export default function Home() {
  document.title = "Home";
  return (
    <div className="grid grid-cols-12 my-auto">
      <main className="col-start-2 col-end-12 flex flex-row flex-wrap-reverse justify-evenly items-center h-min mt-4">
        <div className="text-center">
          <h1 className="text-xxl mb-4">Selim Arda Çevik</h1>
          <h2 className="text-s">
            Software Engineer,Front End & App Developer
          </h2>
        </div>
        <img
          src={myPicture}
          alt="Selim Arda Cevik"
          className="rounded-md w-96"
        />
      </main>
    </div>
  );
}

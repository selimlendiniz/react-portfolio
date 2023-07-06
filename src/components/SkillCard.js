import React from "react";

export default function SkillCard({ title, icon, alt, description, status }) {
  const calculatedWidth = status + "%";
  const calculatedBackgroundColor =
    status === 100 ? "bg-yellow-500" : "bg-green-400";

  return (
    <div className="flex justify-center items-center bg-blueSoft w-max py-2 px-4 rounded-2xl">
      <img src={icon} alt={alt} className="h-4/5 mr-4" />
      <div className="flex flex-col justify-evenly">
        <div className="flex flex-col mb-3">
          <h4 className="text-m">{title}</h4>
          <p className="text-p">{description}</p>
        </div>
        <div className="w-28">
          <div className="h-2 w-full bg-gray-400 rounded-2xl">
            <div
              className={
                "h-full w-full rounded-2xl " + calculatedBackgroundColor
              }
              style={{
                width: calculatedWidth,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

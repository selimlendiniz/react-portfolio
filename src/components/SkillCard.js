import React from "react";

export default function SkillCard({
  title,
  icon,
  alt,
  description,
  status,
  className,
}) {
  const calculatedWidth = status + "%";
  const calculatedBackgroundColor =
    status === 100 ? "bg-green-400" : "bg-yellow-500";

  return (
    <div
      className={
        "flex justify-center items-center bg-blueSoft w-max py-2 px-4 rounded-2xl " +
        className
      }
    >
      <img src={icon} alt={alt} className="h-14 mr-4 rounded-lg " />
      <div className="flex flex-col justify-evenly">
        <div className="flex flex-col mb-3 w-max">
          <h4 className="text-m">{title}</h4>
          <p className="text-p opacity-50 italic ">{description}</p>
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

import React from "react";
import techIcons from "../assets/icons/iconTech.svg";

export default function UsedTechCard({ tech }) {
  return (
    <li className="flex">
      <img src={techIcons} className="h-4" alt="tech icon" />
      <p>{tech}</p>
    </li>
  );
}

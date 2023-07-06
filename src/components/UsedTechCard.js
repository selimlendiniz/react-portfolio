import React from "react";
import techIcons from "../assets/icons/iconTech";

export default function UsedTechCard({ tech }) {
  return (
    <li>
      <img src={techIcons} alt="tech icon" />
      <p>{tech}</p>
    </li>
  );
}

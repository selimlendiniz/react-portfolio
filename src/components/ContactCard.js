import React from "react";

export default function ContactCard({ title, icon, link, className }) {
  return (
    <li className={"flex items-center " + className}>
      <a href={link} className="flex items-center">
        <img src={icon} className="w-6 mr-2" alt="tech icon" />
        <p className="text-center">{title}</p>
      </a>
    </li>
  );
}

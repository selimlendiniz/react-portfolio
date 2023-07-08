import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBarButton({
  title,
  to,
  isActive,
  onClick,
  className,
}) {
  return (
    <NavLink
      className={({ isActive, isPending }) =>
        (isActive ? "bg-blueNormal" : "") +
        " px-8 py-4 rounded-xl h-min text-paragraph text-center " +
        className
      }
      to={to}
      onClick={onClick}
    >
      {title}
    </NavLink>
  );
}

import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import NavBarButton from "./NavBarButton";

export default function Navbar() {
  return (
    <div>
      <nav className="grid grid-cols-12 h-min">
        <div className="flex items-center justify-between col-start-2 col-end-12  py-4">
          <h2 className="font-mono text-s h-min">Selim Arda Cevik</h2>
          <div className="flex justify-between">
            <NavBarButton to="/" title="Home" />
            <NavBarButton to="/aboutme" title="About me" />
            <NavBarButton to="/skills" title="Skills & Tools" />
            <NavBarButton to="/myprojects" title="My Projects" />
            <NavBarButton to="/contactme" title="Contact Me" />
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import NavBarButton from "./NavBarButton";
import barSvg from "../assets/icons/iconBar.svg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div>
      <nav className="grid grid-cols-12 h-min">
        <div className="flex items-center justify-between col-start-2 col-end-12  py-4">
          <h2 className="font-mono text-s h-min">Selim Arda Cevik</h2>
          <button className="sm:hidden">
            <img
              src={barSvg}
              className="h-4"
              alt="menu button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            />
          </button>
          <div className="hidden sm:flex justify-between">
            <NavBarButton to="/" title="Home" />
            <NavBarButton to="/aboutme" title="About me" />
            <NavBarButton to="/skills" title="Skills & Tools" />
            <NavBarButton to="/myprojects" title="My Projects" />
            <NavBarButton to="/contactme" title="Contact Me" />
          </div>
        </div>
      </nav>
      {/*Mobile menu*/}
      {isMenuOpen && (
        <div className="flex flex-col items-center">
          <NavBarButton
            onClick={() => setIsMenuOpen(false)}
            to="/"
            title="Home"
            className="mt-4 w-1/2"
          />
          <NavBarButton
            onClick={() => setIsMenuOpen(false)}
            to="/aboutme"
            title="About me"
            className="mt-4 w-1/2"
          />
          <NavBarButton
            onClick={() => setIsMenuOpen(false)}
            to="/skills"
            title="Skills & Tools"
            className="mt-4 w-1/2"
          />
          <NavBarButton
            onClick={() => setIsMenuOpen(false)}
            to="/myprojects"
            title="My Projects"
            className="mt-4 w-1/2"
          />
          <NavBarButton
            onClick={() => setIsMenuOpen(false)}
            to="/contactme"
            title="Contact Me"
            className="mt-4 w-1/2"
          />
        </div>
      )}
      {/*Mobile menu end*/}
      {!isMenuOpen && <Outlet />}
    </div>
  );
}

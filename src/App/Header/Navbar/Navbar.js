import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ArrowSVG from "../../../assets/ArrowSVG";
import "./Navbar.css";

export default function NavBar({ props }) {
  const {
    modules,
    currentModule,
    setCurrentModule,
    showMobileNav,
    setShowMobileNav,
  } = props;

  return (
    <nav className={!showMobileNav && "hide-mobile-nav"}>
      <ul className={!showMobileNav && "hide-mobile-nav-ul"}>
        <li
          onClick={() => setShowMobileNav((prev) => !prev)}
          className="mobile-nav-btn"
        >
          {currentModule}
          <ArrowSVG
            viewBox={"0 0 24 24"}
            fill={"white"}
            transform={showMobileNav ? "rotate(180)" : "rotate(0)"}
          />
        </li>
        {modules &&
          modules.map((module) => (
            <li
              key={module.name}
              className={`
                ${module.name === "Admin" && "admin-button"}
                ${currentModule === module.name ? "active-page" : undefined}
              `}
            >
              <Link
                to={module.routeProps.path}
                onClick={() => {
                  setCurrentModule(module.name);
                  setShowMobileNav(false);
                }}
              >
                {module.name}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}

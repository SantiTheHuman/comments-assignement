import React, { useState } from "react";
import ArrowDownSVG from "./ArrowDownSVG";
import "./Navbar.css";

export default function NavBar({ props }) {
  const { currentPage, setCurrentPage } = props;
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <nav className={!showMobileNav && "hide-mobile-nav"}>
      <ul className={!showMobileNav && "hide-mobile-nav-ul"}>
        <button
          onClick={() => setShowMobileNav((prev) => !prev)}
          className="mobile-nav-btn"
        >
          {currentPage}
          <ArrowDownSVG />
        </button>
        <li onClick={() => setCurrentPage("Map")}>Map</li>
        <li onClick={() => setCurrentPage("Tasks")}>Tasks</li>
        <li onClick={() => setCurrentPage("Dashboard")}>Dashboard</li>
        <li onClick={() => setCurrentPage("Comments")}>Comments</li>
        <li onClick={() => setCurrentPage("Admin")} className="admin-button">
          Admin
        </li>
      </ul>
    </nav>
  );
}

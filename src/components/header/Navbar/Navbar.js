import React from "react";
import ArrowSVG from "../../../assets/ArrowSVG";
import "./Navbar.css";

export default function NavBar({ props }) {
  const {
    currentPage,
    setCurrentPage,
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
          {currentPage}
          <ArrowSVG
            viewBox={"0 0 24 24"}
            fill={"white"}
            transform={showMobileNav ? "rotate(180)" : "rotate(0)"}
          />
        </li>
        <li
          className={currentPage === "Map" ? "active-page" : undefined}
          onClick={() => {
            setCurrentPage("Map");
            showMobileNav && setShowMobileNav(false);
          }}
        >
          Map
        </li>
        <li
          className={currentPage === "Tasks" ? "active-page" : undefined}
          onClick={() => {
            setCurrentPage("Tasks");
            showMobileNav && setShowMobileNav(false);
          }}
        >
          Tasks
        </li>
        <li
          className={currentPage === "Dashboard" ? "active-page" : undefined}
          onClick={() => {
            setCurrentPage("Dashboard");
            showMobileNav && setShowMobileNav(false);
          }}
        >
          Dashboard
        </li>
        <li
          className={currentPage === "Comments" ? "active-page" : undefined}
          onClick={() => {
            setCurrentPage("Comments");
            showMobileNav && setShowMobileNav(false);
          }}
        >
          Comments
        </li>
        <li
          className={
            currentPage === "Admin"
              ? "admin-button active-page"
              : "admin-button"
          }
          onClick={() => {
            setCurrentPage("Admin");
            showMobileNav && setShowMobileNav(false);
          }}
        >
          Admin
        </li>
      </ul>
    </nav>
  );
}

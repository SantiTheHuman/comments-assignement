import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

export default function Header({ props }) {
  const { modules, currentModule, setCurrentModule } = props;
  const { user } = useAuth();
  const userInitial = user.charAt(0);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const forNavbar = {
    modules,
    currentModule,
    setCurrentModule,
    showMobileNav,
    setShowMobileNav,
  };

  return (
    <header>
      <Link
        to="/Homepage"
        onClick={() => {
          setCurrentModule("Homepage");
          showMobileNav && setShowMobileNav(false);
        }}
      >
        <h1>LiveEO</h1>
      </Link>
      <Navbar props={forNavbar} />
      <Link
        to="/Account"
        onClick={() => {
          setCurrentModule("Account");
          showMobileNav && setShowMobileNav(false);
        }}
      >
        <button className="account-button">{userInitial}</button>
      </Link>
      <div className="horizontal-line"></div>
    </header>
  );
}

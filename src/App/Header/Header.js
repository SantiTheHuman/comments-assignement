import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import { useAuth } from "../../contexts/auth-context";

import "./Header.css";

export default function Header({ props }) {
  const { modules, currentModule, setCurrentModule } = props;
  const [showMobileNav, setShowMobileNav] = useState(false);
  const { user } = useAuth();
  const userInitial = user.charAt(0);

  return (
    <header>
      <h1>
        <Link
          to="/Homepage"
          onClick={() => {
            console.log("hi");
            setCurrentModule("Homepage");
            showMobileNav && setShowMobileNav(false);
          }}
        >
          LiveEO
        </Link>
      </h1>
      <Navbar
        props={{
          modules,
          currentModule,
          setCurrentModule,
          showMobileNav,
          setShowMobileNav,
        }}
      />

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

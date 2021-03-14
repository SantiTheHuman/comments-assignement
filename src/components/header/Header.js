import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import { useAuth } from "../../contexts/auth-context";

import "./Header.css";

export default function Header({ props }) {
  const { currentPage, setCurrentPage } = props;
  const [showMobileNav, setShowMobileNav] = useState(false);
  const { user } = useAuth();
  const userInitial = user.charAt(0);

  return (
    <header>
      <h1
        onClick={() => {
          setCurrentPage("Homepage");
          showMobileNav && setShowMobileNav(false);
        }}
      >
        LiveEO
      </h1>
      <Navbar
        props={{ currentPage, setCurrentPage, showMobileNav, setShowMobileNav }}
      />
      <button
        className="account-button"
        onClick={() => {
          setCurrentPage("Account");
          showMobileNav && setShowMobileNav(false);
        }}
      >
        {userInitial}
      </button>
      <div className="horizontal-line"></div>
    </header>
  );
}

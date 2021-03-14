import React from "react";
import Navbar from "./Navbar/Navbar";
import { useAuth } from "../../contexts/auth-context";

import "./Header.css";

export default function Header({ props }) {
  const { setCurrentPage } = props;
  const { user } = useAuth();
  const userInitial = user.charAt(0);

  return (
    <header>
      <h1 onClick={() => setCurrentPage("Homepage")}>LiveEO</h1>
      <Navbar props={props} />
      <button
        onClick={() => setCurrentPage("Account")}
        className="account-button"
      >
        {userInitial}
      </button>
      <div className="horizontal-line"></div>
    </header>
  );
}

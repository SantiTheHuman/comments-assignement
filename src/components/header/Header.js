import React from "react";
import Navbar from "./Navbar/Navbar";

import "./Header.css";

export default function Header({ setCurrentPage }) {
  return (
    <header>
      <h1 onClick={() => setCurrentPage("Homepage")}>LiveEO</h1>
      <Navbar setCurrentPage={setCurrentPage} />
    </header>
  );
}

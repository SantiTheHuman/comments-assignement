import React from "react";
import Navbar from "./Navbar/Navbar";
import { useNav } from "../../contexts/nav-context";

import "./Header.css";

export default function Header() {
  const { setCurrentPage } = useNav();
  return (
    <header>
      <h1 onClick={() => setCurrentPage("Homepage")}>LiveEO</h1>
      <Navbar />
    </header>
  );
}

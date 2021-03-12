import React from "react";
import { useAuth } from "../../../contexts/auth-context";
import { useNav } from "../../../contexts/nav-context";
import "./Navbar.css";

export default function NavBar() {
  const { user } = useAuth();
  const { currentPage, setCurrentPage } = useNav();

  return (
    <nav>
      <ul>
        <li onClick={() => setCurrentPage("Comments")}>Comments</li>
      </ul>
    </nav>
  );
}

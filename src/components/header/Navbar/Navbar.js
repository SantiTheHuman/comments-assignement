import React from "react";
import { useAuth } from "../../../contexts/auth-context";
import { useNav } from "../../../contexts/nav-context";
import "./Navbar.css";

export default function NavBar() {
  const { user } = useAuth();
  const { currentPage, setCurrentPage } = useNav();
  const userInitial = user.charAt(0);

  return (
    <nav>
      <ul>
        <li onClick={() => setCurrentPage("Map")}>Map</li>
        <li onClick={() => setCurrentPage("Tasks")}>Tasks</li>
        <li onClick={() => setCurrentPage("Dashboard")}>Dashboard</li>
        <li onClick={() => setCurrentPage("Comments")}>Comments</li>
        <li onClick={() => setCurrentPage("Admin")} className="admin-button">
          Admin
        </li>
        <li
          onClick={() => setCurrentPage("Account")}
          className="account-button"
        >
          {userInitial}
        </li>
      </ul>
    </nav>
  );
}

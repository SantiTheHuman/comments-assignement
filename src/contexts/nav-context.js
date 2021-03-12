import React, { useState } from "react";

const NavContext = React.createContext();

function NavProvider({ children }) {
  const [currentPage, setCurrentPage] = useState("Comments");

  return (
    <NavContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </NavContext.Provider>
  );
}

const useNav = () => React.useContext(NavContext);
export { NavProvider, useNav };

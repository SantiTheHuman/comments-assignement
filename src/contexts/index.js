import * as React from "react";
import { AuthProvider } from "./auth-context";
import { NavProvider } from "./nav-context";

function ContextProvider({ children }) {
  return (
    <AuthProvider>
      <NavProvider>{children}</NavProvider>
    </AuthProvider>
  );
}
export default ContextProvider;

import * as React from "react";
import { AuthProvider } from "./auth-context";
import { NavProvider } from "./nav-context";
import { CommentsProvider } from "./comments-context";

function ContextProvider({ children }) {
  return (
    <CommentsProvider>
      <AuthProvider>
        <NavProvider>{children}</NavProvider>
      </AuthProvider>
    </CommentsProvider>
  );
}
export default ContextProvider;

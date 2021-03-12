import React, { useState, useEffect } from "react";

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser("Lauren");
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => React.useContext(AuthContext);
export { AuthProvider, useAuth };

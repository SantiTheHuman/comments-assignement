import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Routes from "./Routes";
import { AuthProvider } from "../contexts/auth-context";
import modules from "../modules";

function App() {
  const [currentModule, setCurrentModule] = useState("Comments");

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header props={{ modules, currentModule, setCurrentModule }} />
          <Routes modules={modules} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

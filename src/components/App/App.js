import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "../../contexts/auth-context";
import Header from "../Header/Header";
import Routes from "./Routes";
import modules from "../../modules";
import "./App.css";

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

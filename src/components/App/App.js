import React from "react";
import "./App.css";
import ContextProvider from "../../contexts/index";
import Header from "../Header/Header";
import Content from "../Content/Content";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Header />
        <Content />
      </ContextProvider>
    </div>
  );
}

export default App;

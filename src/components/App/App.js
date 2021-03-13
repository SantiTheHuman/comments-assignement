import React, { useState} from "react";
import "./App.css";
import Header from "../Header/Header";
import Content from "../Content/Content";
import { AuthProvider } from "../../contexts/auth-context";

function App() {
  const [currentPage, setCurrentPage] = useState("Comments");
  return (
    <div className="App">
      <AuthProvider>
        <Content currentPage={ currentPage}/>
        <Header setCurrentPage={ setCurrentPage} />
      </AuthProvider>
    </div>
  );
}

export default App;

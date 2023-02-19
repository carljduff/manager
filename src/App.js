import React, { useContext } from "react";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import "./css/nav.css";
import { GlobalProvider } from "./GlobalState";
import { Routes, Route, } from 'react-router-dom';
import Home from "./pages/Home";
import Project from "./components/Project";

function App() {
  

  return (
    <GlobalProvider>
          <NavBar/>
   
          <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="projects" element={<Projects/>} />
          <Route path="project/:title" element={<Project/>} />
        </Routes>
          </div>
     
    </GlobalProvider>
  );
}

export default App;

import React, { useContext } from "react";
import Dash from "./components/Dash";
import Projects from "./components/Projects";
import "./css/dash.css";
import { GlobalProvider } from "./GlobalState";

function App() {
  

  return (
    <GlobalProvider>
    {/* <Dash/> */}
    <Projects/>
    </GlobalProvider>
  );
}

export default App;

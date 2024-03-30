import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Welcome } from "./Components/Welcome";

/* 
-Create an index.css file and import it within the index.jsx file.
-Add a .welcome class to the Welcome component that sets its background color and adds a border
*/
function App() {

  return (
    <>
    <Welcome></Welcome>
    </>
  );
}

export default App;

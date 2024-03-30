import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { UncontrolledLogin } from "./Components/UncontrolledLogin";
/* 
-Implementare un UncontrolledLogin componente che implementa tutte le operazioni del Login componente,
 ma lo fa utilizzando componenti non controllati. Tentare di accedere ai valori del modulo utilizzando 
 l'API DOM leggendo il event.target del onSubmit gestore eventi. */

function App() {
  return (
  <>
   <UncontrolledLogin></UncontrolledLogin>
  </>
  );
}

export default App;

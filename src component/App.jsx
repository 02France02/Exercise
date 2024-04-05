import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Container } from "./Component/Container";
import "./Component/Container.css";

/*     -Crea un componente Container che rende i suoi figli all'interno di un tag div. 
       -Fai in modo che il tag div utilizzi uno sfondo bianco e un bordorosso. 
       -Aggiungi una prop chiamata title che conterrà il valore del titolo da visualizzare prima dei figli. 
       -Rendi il container espandibile, in modo che quando viene cliccato il titolo, i figli vengano nascosti o mostrati di nuovo. 
       -Utilizza il hook useState per tenere traccia dello stato di espansione. */

function App() {
  return (
    <Container title={<h1>Bello il titolo</h1>}>
      <ul>
        <li>ciao</li>
        <li>ciao</li>
        <li>ciao</li>
        <li>ciao</li>
      </ul>
    </Container>
  );
}

export default App;

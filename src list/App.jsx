import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Color } from "./Components/Color";
import { Colors } from "./Components/Colors";
/* 
Creare un componente chiamato Color che riceve un oggetto chiamato 'color' come prop, che avrà 2 proprietà, 
'id' e 'name', e restituisce un tag 'li' che visualizza la proprietà 'name'. Creare un secondo componente 
chiamato Colors, che prende un array di oggetti come prop, dove le proprietà sono sempre 'name' e 'id', e 
visualizza un elenco non ordinato di componenti Color. */

function App() {
  const color = {
    id: 15,
    name: "verde",
  };
  const colors = [
    { id: 1, name: "giallo" },
    { id: 2, name: "arancio" },
    { id: 3, name: "grigio" },
    { id: 4, name: "Azzurro" },
  ];
  return (
    <>
      <Color obj={color}></Color>
      <Colors arr={colors}></Colors>
    </>
  );
}

export default App;

/* LIST:
-Serve Per renderizzare singoli elementi dell'elenco, separando i problemi e rendendo la base di codice più gestibile. 
-Possiamo usare il metodo MAP() per stampare delle liste
-L'attributo KEY, è necessario per React per identificare univocamente ciascun elemento della lista.*/

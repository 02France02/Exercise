import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import { GithubUsers } from "./Component/GithubUsers";

function App() {

  return (
    <>
      <GithubUsers></GithubUsers>
    </>
  );
}

export default App;

/* 
-Crea un componente GithubUser che riceve una prop username e recupera i dati dell'utente corrispondente su Github dall'API di Github.
-Il componente dovrebbe renderizzare il nome, il login e l'avatar dell'utente.
-crea un nuovo componente chiamato GithubUsers che contenga un modulo con un input di testo e un pulsante di invio.
-L'input verrà utilizzato per cercare un utente fornendo il suo nome utente.
-Ogni utente sarà visualizzato in una lista, dove ogni elemento della lista è un componente GithubUser.
-Questi componenti prenderanno username come prop. 
*/

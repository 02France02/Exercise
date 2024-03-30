import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { TodoList } from "./Components/TodoList";
/* 
-Crea un componente TodoList che renderizza un tag ul con un tag li per ogni elemento contenuto nella variabile di stato todos.
-La variabile di stato todos dovrebbe essere un array di stringhe.
-Il componente TodoList dovrebbe anche contenere un tag input e un pulsante.
-Quando viene cliccato il pulsante, l'event handler dovrebbe aggiungere il valore del tag input all'array todos. 
-Modifica il componente TodoList in modo che l'input venga cancellato ogni volta che viene aggiunto un Todo all'array todos. 
-Aggiungi un pulsante "reset" che cancella l'array todos quando viene cliccato.


-Modifica il componente TodoList aggiungendo un pulsante "rimuovi" a ciascun tag li.
-Quando viene cliccato, l'event handler dovrebbe rimuovere l'elemento corrispondente dall'array todos.
*/

function App() {

  return (
    <>

      <TodoList></TodoList>
    </>
  );
}

export default App;

/* LIST:
-Serve Per renderizzare singoli elementi dell'elenco, separando i problemi e rendendo la base di codice più gestibile. 
-Possiamo usare il metodo MAP() per stampare delle liste
-L'attributo KEY, è necessario per React per identificare univocamente ciascun elemento della lista.*/

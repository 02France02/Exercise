/* 
-Crea un nuovo ramo a partire dal primo esercizio sulle props.
-Modifica il componente App che incapsula un componente Routes e aggiungi una singola Route al percorso,
 che rende il componente Welcome, passandogli una prop nome. 
-Rendi il componente App all'interno di un componente BrowserRouter.
-Aggiungi una nuova Route al percorso /counter che rende il componente Counter dall'esercizio sullo stato iniziale.
-Aggiungi una nuova Route al percorso users/:username che rende un componente ShowGithubUser che riceve lo username 
 come parametro di percorso e rende il componente GithubUser dall'esercizio di recupero dati con fetch ed useEffect,
 passandogli lo username ricevuto.
-Aggiungi tre Link all'interno di App  e utilizzali per navigare verso tutte e tre le rotte.
-Aggiungi un percorso non trovato che APPARE quando un utente naviga verso un percorso che non esiste.

-Crea un componente GithubUserList che, recuperando l'URL API https://api.github.com/users, mostri un elenco di link di nomi utente di GitHub.
-Cliccando su un nome utente, verrà visualizzato il componente ShowGithubUser. 
-Aggiungi una Route al percorso users che mostri il componente GithubUserList. 
-In tal modo, rimuovi la route /users/:username dal componente App e aggiungi una nuova route annidata all'interno del percorso /users.

-Aggiungi una route index alla route GithubUserList che mostra il messaggio "Aggiungi un utente e selezionalo".
*/
import "./App.css";

import { Counter } from "./Components/Counter";
import Welcome from "./Components/Welcome";
import { Routes, Route, Link } from "react-router-dom";
import { ShowGithubUser } from "./Components/ShowGithubUser";
import GithubUserList from "./Components/GithubUserList";

function App() {

  return (
    <div>
      <Routes>
        <Route path="*" element={<div><p>Not found</p></div>} /> 
        <Route path="/" element={<Welcome name="Francesco"></Welcome>}></Route>
        <Route path="counter" element={<Counter />}></Route>
        <Route path="users/:username" element={<ShowGithubUser />}></Route>
        <Route path="users" element={<GithubUserList />}>
          <Route index element={<div>Aggiungi un utente e selezionalo</div>}></Route>
        </Route>
        

      </Routes>
      <div>
        <h2>MY LINK</h2>
        <Link to="/" >HOME</Link> / 
        <Link to="/counter" >COUNTER</Link> / 
        <Link to="users" >GITHUB LIST</Link>

      </div>
    </div>
  );
}

export default App;

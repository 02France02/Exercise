// App.jsx
import React from "react";
import "./App.css";
import { useGithubUser } from "./customHook/useGithubUser";

function App() {
  const { user, error, isLoading } = useGithubUser("02France02");

  console.log("user data:", user);
  console.log("error:", error);
  console.log("isLoading:", isLoading);

  return (
    <>
      {isLoading && <h1>Caricamento...</h1>}
      {error && <h1>Si è verificato un errore</h1>}
      {user == null ? <h1>nessuna richiesta</h1> : (
        <div>
          <div className="card-profile">
            <h1>{user.login}</h1>
            <h3>{user.name}</h3>
            <div className="img-container">
              <img src={user.avatar_url} alt="img_profile" />
            </div>
            <p>{user.bio}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default App;


/* 
-Modifica l'hook personalizzato useGithubUser per utilizzare l'hook useSWR  per recuperare i dati di un utente Github.
-Modifica l'hook `useGithubUser` in modo che, se il nome utente è null, non venga effettuata nessuna richiesta. */
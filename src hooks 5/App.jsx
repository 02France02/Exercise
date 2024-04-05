import "./App.css";
import React from "react";
import { useCurrentLocation } from "./Component/useCurrentLocation";

function App() {
  const [location, getLocation, loading, error] = useCurrentLocation();

  if (loading) {
    return <p>Caricamento...</p>;
  }
  if (error) {
    return <p>error {error.message}...</p>;
  }

  if (location) {
    const lat = location.latitude;
    const lon = location.longitude;
    return (
      <>
        <h2>LONGITUDINE: {lon}</h2>
        <h2>LATITUDINE: {lat}</h2>
      </>
    );
  }
}

export default App;

/* 
-Scrivi il custom hook useCurrentLocation che utilizza l'API navigator.geolocation del browser per ottenere
 la posizione corrente dell'utente tramite il metodo integrato getCurrentPosition.
-L'hook dovrebbe restituire la posizione corrente, una funzione per ottenere la posizione corrente e gli stati
 di errore e caricamento.

*/

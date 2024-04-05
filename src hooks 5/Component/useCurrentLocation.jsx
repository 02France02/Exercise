import { useState, useEffect } from "react";



export function useCurrentLocation() {
 
  const [location, setLocation] = useState(null); // Stato per la posizione corrente
  const [loading, setLoading] = useState(false); // Stato per il caricamento
  const [error, setError] = useState(null); // Stato per gli errori

  // Funzione per ottenere la posizione corrente
  function getLocation(params) {
    // Imposta lo stato del caricamento su true e resetta eventuali errori
    setLoading(true);
    setError(null);
  }

  // Ottiene la posizione corrente utilizzando l'API del geolocalizzatore del browser
  // imposta lo stato della posizione corrente
  navigator.geolocation.getCurrentPosition(
    //  successo
    (position) => {
      setLocation(position.coords); // Imposta la posizione corrente
      setLoading(false); // Imposta lo stato del caricamento su false
    },
    // errore
    (error) => {
      setError(error); // Imposta l'errore
      setLoading(false); // Imposta lo stato del caricamento su false
    }
  );

  useEffect(() => {
    getLocation(); // Ottiene la posizione corrente
  }, []);

  return [location, getLocation, loading, error];
}

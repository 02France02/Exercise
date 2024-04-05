import { useState, useEffect } from "react";


// Definizione del custom hook useCurrentLocation
export function useCurrentLocation() {
  // Definizione dello stato per la posizione corrente, il caricamento e gli eventuali errori
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
  // e imposta lo stato della posizione corrente, del caricamento e degli errori
  navigator.geolocation.getCurrentPosition(
    // Callback di successo: la posizione corrente è stata ottenuta con successo
    (position) => {
      setLocation(position.coords); // Imposta la posizione corrente
      setLoading(false); // Imposta lo stato del caricamento su false
    },
    // Callback di errore: si è verificato un errore durante il recupero della posizione corrente
    (error) => {
      setError(error); // Imposta l'errore
      setLoading(false); // Imposta lo stato del caricamento su false
    }
  );

  // Utilizza useEffect per chiamare la funzione getLocation quando il componente viene montato
  // in modo da ottenere la posizione corrente subito dopo il rendering iniziale del componente
  useEffect(() => {
    getLocation(); // Ottiene la posizione corrente
  }, []);

  // Restituisce la posizione corrente, la funzione per ottenere la posizione, lo stato del caricamento e gli eventuali errori
  return [location, getLocation, loading, error];
}

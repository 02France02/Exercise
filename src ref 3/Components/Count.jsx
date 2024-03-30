import { useState, useRef, useEffect } from "react";

export function Count({ initialValue }) {
  const [num, setNum] = useState(initialValue);
  const prevNumRef = useRef(initialValue);

  useEffect(() => {
    // Determina la direzione del cambiamento rispetto al valore precedente
    const direction = num > prevNumRef.current ? "su" : "giù";
    // Aggiorna il valore del ref con il nuovo valore di num
    prevNumRef.current = num;

    // Stampa il valore del ref sulla console solo se è diverso dal valore precedente
    if (direction !== prevNumRef.current) {
      console.log(direction);
    }
  }, [num]);

  function handleCountPlus() {
    setNum((prev) => prev + 1);
  }

  function handleCountLoss() {
    setNum((prev) => prev - 1);
  }

  return (
    <>
      <h1>{num}</h1>
      <button onClick={handleCountPlus}>INCREMENTA</button>
      <button onClick={handleCountLoss}>DECREMENTA</button>
    </>
  );
}

import { useEffect, useState } from "react";

export function Clock() {
  /*   function printDate() {
    const calendary = new Date();
    const date = calendary.getDate();
    const hour = calendary.getHours();
    const minutes = calendary.getMinutes();
    const fullDate = `Day: ${date} Hour: ${hour} minute: ${minutes}`;
    return fullDate;
  } */

  /* useEffect(() => {}, []); */
  const [hour, setHour] = useState(new Date().toLocaleTimeString());

  //Ora aggiorna l'ora in tempo reale
  useEffect(() => {
    setInterval(() => {
      setHour(new Date().toLocaleTimeString());
    }, 1000);
  }, [hour]);

  return (
    <>
      <h2>{hour}</h2>
    </>
  );
}

/* 
-Il luckyDraw la funzione restituisce una promessa. 
-Crea una catena di promesse in cui è richiesta la funzione per ciascuno dei giocatori: Joe, Caroline e Sabrina

-Esci dal valore risolto per ogni promessa e gestisci eventuali rifiuti di promessa nella catena. */



function luckyDraw(player) {
  // Restituisce una Promise che simula un'estrazione a sorte per ogni giocatore:
  return new Promise((resolve, reject) => {
      // Simula l'esito dell'estrazione (vittoria o sconfitta) in modo casuale:
      const win = Boolean(Math.round(Math.random()));

      // Utilizza process.nextTick per evitare il blocco dell'esecuzione principale:
      process.nextTick(() => {
          if (win) {
              // Risolve la Promise con un messaggio di vittoria:
              resolve(`${player} won a prize in the draw!`);
          } else {
              // Respinge la Promise con un errore di sconfitta:
              reject(new Error(`${player} lost the draw.`));
          }
      });
  });
}



luckyDraw("joe")
  .then((res1) => console.log(res1));
luckyDraw("Caroline")
  .then((res2) => console.log(res2));
luckyDraw("Sabrina")
  .then((res3) => console.log(res3))
  .catch((err) => console.error(err));




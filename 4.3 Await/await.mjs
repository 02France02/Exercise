/* 
Creare ungetResults funzione che utilizza async e await. 
All'interno della funzione, chiamare il luckyDraw funzione per ciascuno dei giocatori: Tina, Jorge, Julien

Esci dal valore risolto per ogni promessa e gestisci eventuali rifiuti di promessa.
 */

function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

async function ungetResults() {
    try {
        const data1 = await luckyDraw("Tina")
        const data2 = await luckyDraw("Jorge")
        const data3 = await luckyDraw("Julien")

        console.log(data1, data2, data3);
    } catch (error) {
        console.error(error);
    }
}
ungetResults()
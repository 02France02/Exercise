/* 
-Creare un AlertClock componente di funzione che esegue il rendering di un pulsante. Quando si fa clic sul pulsante, 
 è necessario visualizzare un avviso con l'ora corrente.
-Render the AlertClock componente all'interno del App componente. Fai in modo che il gestore dell'evento venga ricevuto 
 come supporto dal AlertClock componente, invece di essere implementato all'interno del componente stesso.
 */

import { AlertClock } from "./AlertClock";
function App() {
  const hour = new Date().getHours();
  return (
    <>
      <AlertClock hour={hour}></AlertClock>
    </>
  );
}

export default App;

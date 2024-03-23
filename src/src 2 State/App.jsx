/* 
-Estrarre il h2 tag che mostra il counter variabile di stato in un nuovo componente chiamato CounterDisplay e 
 rendilo all'interno del Counter componente, passandolo il count stato variabile come prop.
-Aggiungi un pulsante di decremento e un pulsante di ripristino al Counter componente. Il pulsante di decremento
 dovrebbe decretare il contatore in base all'importo passato come prop e il pulsante di ripristino dovrebbe 
 ripristinare il contatore al valore iniziale passato come prop.
 */

import Counter from "./Counter";

function App() {

  return (
    <>
      <Counter></Counter>
    </>
  );
}

export default App;

/* 
Modifica il Welcome componente in modo che il Age il componente viene reso 5 volte. Per ogni tempo utilizzare il rendering condizionale con una delle seguenti condizioni:
- Il Age il componente viene reso solo se age prop è maggiore di 18.
- Il Age il componente viene reso solo se age prop è presente.
- Il Age il componente viene reso solo se age prop è maggiore di 18 e meno di 65.
- Il Age il componente viene reso solo se age prop è maggiore di 18, meno di 65 e il name prop è uguale a "John". */

import Welcome from "./Welcome";
function App() {
  const age = 20;
  return (
    <>
      <Welcome 
      name="Jhon"
      age={age}
      >
      </Welcome>
    </>
  );
}

export default App;

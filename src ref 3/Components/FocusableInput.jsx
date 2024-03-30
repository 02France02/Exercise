import { useEffect, useRef, useState } from "react";
import { Count } from "./Count";
export function FocusableInput() {
  // Creiamo una variabile di stato con 3 chiavi all'interno
  const [data, setUsername] = useState({
    username: "",
    password: "",
    session: false,
  });

  // Creiamo un ref per il montaggio del componente e uno per l'input
  const mountedRef = useRef(false);
  const inputRef = useRef(null);

  // Aggiungiamo un useEffect che si attiva solo al primo montaggio del componente
  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      console.log("Montaggio per la prima volta");
    } else {
      console.log("Montaggio di nuovo");
    }
    // Chiamiamo il metodo focus sull'input corrente
    inputRef.current?.focus();
  }, []);

  // Funzione per gestire il cambiamento dell'input
  function handlerInputChange(e) {
    const { value, name, checked, type } = e.target;

    //Aggiorna lo stato 'data' quando avviene un cambiamento in un input.
    setUsername((prevState) => {
      // Copiamo lo stato precedente in una nuova variabile 'updatedData'
      const updatedData = { ...prevState };

      // Se l'input è di tipo checkbox, impostiamo il valore di 'name' a 'checked', altrimenti a 'value'
      updatedData[name] = type === "checkbox" ? checked : value;
      return updatedData;
    });
  }

  // Funzione per resettare il form
  function handlerResetForm() {
    setUsername({
      username: "",
      password: "",
      session: false,
    });
  }

  console.log(inputRef); 

  return (
    <>
      <form>
        <h1>Il mio Form</h1>
        {/* Utilizziamo il prop speciale "ref={}" per collegare l'inputRef */}
        <input
          ref={inputRef} // Collega l'elemento di input a inputRef
          name="username"
          type="text"
          value={data.username}
          onChange={handlerInputChange}
        />
        <input
          name="password"
          type="password"
          value={data.password}
          onChange={handlerInputChange}
        />
        <button type="reset" onClick={handlerResetForm}>
          Reset
        </button>
        <input
          name="session"
          type="checkbox"
          checked={data.session}
          onChange={handlerInputChange}
        />
        {/* Disabilitiamo il bottone se username o password sono vuoti */}
        <button disabled={!data.username || !data.password}>Login</button>
        {/* Stampiamo a schermo l'oggetto modificato dagli input */}
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </form>
        <Count initialValue={0}></Count>
    </>
  );
}

/* 
L'uso del React Ref hook serve per accedere direttamente agli elementi DOM, al di fuori del Gestore degli Eventi.
- Un ref si crea usando useRef hook, e serve a collegare un elemento di input per ottenere il suo focus.
- Un Ref è un puntatore, un riferimento al nodo DOM che viene renderizzato da React per un input.
- Può essere fatto nella forma controllata e non controllata.
*/

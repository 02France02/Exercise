import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FocusableInput } from './Components/FocusableInput'
/* 
-Creare un FocusableInput componente che rende un input etichetta. Non appena il componente rende,
 il input il tag dovrebbe essere focalizzato automaticamente. 

-Usare StrictMode, creare un componente con un effetto che stampa un messaggio solo quando il componente
 è montato per la prima volta. Usa a ref tenere traccia del fatto che il componente sia montato o meno.

-Modifica il componente Contatore in modo che ogni volta che il valore del contatore cambia, il valore 
 di un ref venga aggiornato per contenere la direzione del cambiamento (ossia "su" o "giù") rispetto alla
 prop initialValue.
-Stampa il valore del ref sulla console solo quando è diverso dal valore precedente.

*/

function App() {

  return (
    <>
      <FocusableInput></FocusableInput>
    </>
  )
}

export default App

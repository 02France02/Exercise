/* 
-Aggiungi un "login" button al Login componente. Questo pulsante deve essere disabilitato fino a 
 quando username e password gli input sono vuoti.
 
-Quando si fa clic, il gestore eventi allegato al pulsante dovrebbe chiamare un onLogin funzione 
 passata come sostegno al Login componente, passandolo allo stato, che stamperà il valore dello stato.*/




import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InteractiveWelcome } from './Components/InteractiveWelcome'
function App() {


  return (
    <>
      <InteractiveWelcome/>
    </>
  )
}

export default App

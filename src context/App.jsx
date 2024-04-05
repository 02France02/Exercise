import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Clock } from "./Component/Clock";
import React from "react";

export const LanguageContext = React.createContext();

function App() {
  const [language, setLanguage] = useState("Ora corrente")

  return (
    <LanguageContext.Provider value={{language, setLanguage}}>
      <Clock ></Clock>
    </LanguageContext.Provider>
  );
}

export default App;
/*     
-Crea un LanguageContext e avvolgi il componente Clock nel suo provider.
-Aggiungi un tag select al componente in cui è renderizzato il componente Clock che permette all'utente di selezionare
 la lingua e passala come valore al Provider.
-Consuma il LanguageContext all'interno del componente Clock utilizzando il hook useContext e mostra il messaggio 
 "current time" nella lingua corretta. */

/* 

-Aggiungi un'immagine all'interno del pulsante e aggiungi un gestore di eventi onClick che stampi l'attributo src 
 dell'immagine nella console.
-Come puoi evitare che l'attributo name del pulsante venga stampato nella console quando si clicca sull'immagine? */

import MouseClicker from "./MouseClicker";
const image = "https://png.pngtree.com/png-clipart/20190516/original/pngtree-check-mark-icon-png-image_3566317.jpg"
function App() {
  return (
    <>
        <MouseClicker name="One"><img style={{width: "100%"}} src={image} alt="icon"/></MouseClicker>
    </>
  );
}

export default App;

export function UncontrolledLogin() {
  function handleFormSubmit(e) {
    e.preventDefault();
    //1. Print the content nel nostro form tramite DOM API
    // const username = e.target.elements.namedItem("name").value;
    // const password = e.target.elements.namedItem("password").value;
    // const session = e.target.elements.namedItem("session").checked;

    //2. Print the content nel nostro form tramite Form Data OBJ
    const formData = new FormData(e.target);

    //Mettiamo i valori uin un oggetto
    const data = {
      username: formData.get("name"),
      password: formData.get("password"),
      session : formData.get("session") === "on" ? true : false, //se è uguale ad on allora cambia in true,  altrimenti in false
    };
    console.log(data);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h1>My uncontrolledForm</h1>
      <input name="name" />
      <input name="password" type="password" />
      <input name="session" type="checkbox" />
      <button>Login</button>
      <button type="reset">reset</button>
    </form>
  );
}

/* 
-Piu semplice, non si tiene traccia degli input con useState
-Non sono necessari gestori degli eventi per poter gestire le modificghe che si verificano all'interno degli input
-COMPROMESSO: non vi è nessun controllo sugli input stessi
PASSAGGI:
1. creazione form con input, button e checkbox
2. assegnare al form un handler 
3. dentro l'handler, usare il metodo FORM tramite DOM API (sintassi: e.target.elements.namedItem("name").value;)
4. creare un OBJ che prenderà i valori estratti con il DOM API*/
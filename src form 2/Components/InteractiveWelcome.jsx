import { useState } from "react";
import { Welcome } from "./Welcome";


export function InteractiveWelcome() {
  //state degli input
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  function handleInputChange(e) {
    //variabili di target
    const name = e.target.name;
    const value = e.target.value;

    const checked = e.target.checked;
    const type = e.target.type;

    //al succedere dell evento restituisce tupla con valori inseriti negli input
    setData((dataCopy) => {
      return {
        ...dataCopy,
        [name]: type === "checkbox" ? checked : value,
      };
    });

  }

  function onLogin() {
    console.log(JSON.stringify(data, null, 2))
  }


  return (
    <>
      <Welcome name={data.username}></Welcome>
      <input
        type="text"
        name="username"
        value={data.username}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        value={data.password}
        onChange={handleInputChange}
      />
      <input
        type="checkbox"
        name="remember"
        checked={data.check}
        onChange={handleInputChange}
      />
      <button disabled={!data.username || !data.password} onClick={onLogin}>Login</button>


    </>
  );
}

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
    console.log(data);
  }

  function onLogin(e) {
    e.preventDefault();
    console.log(JSON.stringify(data, null, 2));
  }

  function handleReset(e) {
    return setData({
      password: "",
      username: "",
    });
  }

  return (
    <>
      <Welcome name={data.username}></Welcome>
      <form onSubmit={onLogin} >
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
      <button type="submit" disabled={!data.username || !data.password}>
        Login
      </button>
      <button onClick={handleReset}>reset</button>
      </form>
      
    </>
  );
}

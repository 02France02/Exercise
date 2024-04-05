import { GithubUser } from "./GithubUser";
import { useState } from "react";

export function GithubUsers() {
  const [userInput, setUserInput] = useState("");
  const [users, setUsers] = useState([]);

  const getData = async (e) => {
    e.preventDefault();
    try {
      const searchUser = userInput.trim();
      if (searchUser) {
        const resp = await fetch(`https://api.github.com/search/users?q=${searchUser}`);
        const data = await resp.json();
        setUsers(data.items);
      } else {
        setUsers([]);
      }

      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={getData}>
        <input
          type="text"
          id="input-user"
          name="userInput"
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {users.length > 0 ? (
          <ul>
            {users.map((u) => (
              <li key={u.id}>
                <GithubUser username={u.login}  image={u.avatar_url} />
              </li>
            ))}
          </ul>
        ) : (
          <p>Nessun utente trovato</p>
        )}
      </div>
    </>
  );
}

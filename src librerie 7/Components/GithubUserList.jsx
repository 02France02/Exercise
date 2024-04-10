import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const GithubUserList = () => {
  const [dataGit, setDataGit] = useState([]);

  const fetchGit = async () => {
    try {
      const resp = await fetch(`https://api.github.com/users`);
      const userData = await resp.json();
      if (resp.ok) {
        setDataGit(userData);
      } else {
        console.error("Errore nel fetch");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchGit();
    console.log(dataGit);
  }, []);

  return (
    <>
      <Outlet />
      <h2>My List</h2>
      <Link to="/">HOME</Link>
      <ul>
        {dataGit.map((u) => (
          <li key={u.id}>
            <Link to={`/users/${u.login}`}>{u.login}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default GithubUserList;

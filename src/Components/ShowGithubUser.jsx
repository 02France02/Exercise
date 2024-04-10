import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"
import { GithubUser } from "./GithubUser";
export function ShowGithubUser() {
  const [dataGit, setDataGit] = useState({});
  const { username } = useParams();

  const fetchGit = async () => {
    try {
      const resp = await fetch(`https://api.github.com/users/${username}`);
      if (resp.ok) {
        const userData = await resp.json();
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
  }, [username]);

  return (
    <>
      {dataGit ? (
        <GithubUser dataGit={dataGit} />
        

      ) : (
        <p>Caricamento...</p>
      )}
      <Link to="/">HOME</Link>

    </>
  );
}

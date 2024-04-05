import "./App.css";
import { useGithubUser } from "./customHook/useGithubUser";

function App() {
  const user = useGithubUser("02France02");

  return (
    <>
      <div className="card-profile">
        <h1>{user.login}</h1>
        <h3>{user.name}</h3>
        <div className="img-container">
          <img src={user.avatar_url} alt="img_profile" />
        </div>
        <p>{user.bio}</p>
      </div>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </>
  );
}

export default App;

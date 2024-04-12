import { useGithubUser } from "../customHook/useGithubUser";

export const GithubUser = () => {
  const { user, error, isLoading, refetchData } = useGithubUser("02France02");
  return (
    <>
      {isLoading && <h1>Caricamento...</h1>}
      {error && <h1>Si è verificato un errore</h1>}
      {user && (
        <div>
          <div className="card-profile">
            <h1>{user.login}</h1>
            <h3>{user.name}</h3>
            <div className="img-container">
              <img src={user.avatar_url} alt="img_profile" />
            </div>
            <p>{user.bio}</p>
          </div>
        </div>
      )}
      <button onClick={refetchData}>REFRESH</button>
    </>
  );
};

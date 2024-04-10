export function GithubUser({ dataGit }) {
  return (
    <>
      <div>
        <h2>{dataGit.login}</h2>
        <img src={dataGit.avatar_url} alt="" />
      </div>
    </>
  );
}

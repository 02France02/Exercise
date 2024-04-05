import "./GithubUser.css";
export function GithubUser({ username, image }) {
  return (
    <>
      
        <div className="single-card">
          <h2>{username}</h2>
          <div className="img-card">
            <img src={image} alt="profile" />
          </div>
        </div>

    </>
  );
}

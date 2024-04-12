import React, { useState, useEffect } from "react";

export const GithubUser = ({ username }) => {
  const [user, setUser] = useState(null);

  async function fetchAPI() {
    const fetchURL = await fetch(`https://api.github.com/users/${username}`);
    const data = await fetchURL.json();
    console.log(data);
    setUser(data);
  }

  useEffect(() => {
    fetchAPI();
  }, [username]);

  if (!user) {
    return <h1>Loading fetch...</h1>;
  }

  return (
    <div className="card-profile">
      <h1>{user.login}</h1>
      <h3>{user.name}</h3>
      <div className="img-container">
        <img src={user.avatar_url} alt="img_profile" />
      </div>
      <p>{user.bio}</p>
    </div>
  );
};

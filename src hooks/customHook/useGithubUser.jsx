import { useEffect, useState } from "react";

export function useGithubUser(username) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const userData = await response.json();
      setUser(userData);
    };

    fetchUser();
  }, [username]);

  return user;
}

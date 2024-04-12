import useSWR from "swr";

const fetcher = (url) => fetch(url).then((resp) => resp.json());

export function useGithubUser(username) {
  const { data, error, mutate } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  const refetchData = () => {
    mutate();
  };

  return {
    user: data,
    error,
    isLoading: !data && !error,
    refetchData,
  };
}

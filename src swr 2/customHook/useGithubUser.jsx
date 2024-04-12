import useSWR from 'swr'

const fetcher = url => fetch(url).then(resp => resp.json())

export function useGithubUser(username) {
  const { data: user, error, isValidating: isLoading } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  return {
    user,
    error,
    isLoading
  };
}

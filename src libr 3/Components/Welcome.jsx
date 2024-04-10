import { useNavigate, Link } from "react-router-dom";

function Welcome({ name = "guest"}) {
  const navigateCount = useNavigate();
  const navigateGitHub = useNavigate();

  function handleMoveCounter() {
    navigateCount("/counter");
  }

  return (
    <>
      <h1>{name}</h1>
      <button onClick={handleMoveCounter}>Counter</button>
      <Link to={"users/02France02"}>GITHUB</Link>


    </>
  );
}

export default Welcome;

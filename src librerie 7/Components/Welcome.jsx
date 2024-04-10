import { useNavigate, Link } from "react-router-dom";

function Welcome({ name = "guest"}) {
  const navigateCount = useNavigate();

  function handleMoveCounter() {
    navigateCount("/counter");
  }

  return (
    <>
      <h1>{name}</h1>
      <button onClick={handleMoveCounter}>Counter</button>
      <Link to={"users/02France02"}>GITHUB CARD</Link> /
      <Link to="users" >GITHUB LIST</Link>


    </>
  );
}

export default Welcome;

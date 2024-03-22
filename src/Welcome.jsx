import { Age } from "./Age";

function Welcome({ name = "guest",  age}) {
  return (
    <>
      <h2>Welcome</h2>
      <p> <strong>{name}</strong>,</p>
      <span>your age is </span> 
      {/* TUTTO in UNA */}
      {age > 18 && age < 65 && name === "Jhon" && <Age>{age}</Age>}
      
      {/* SINGOLARMENTE */}
      {/* {age > 18 &&  <Age>{age}</Age>}
      {age > 18 && age < 65 && <Age>{age}</Age>}
      {age && <Age>{age}</Age>}
      {age > 18 && age < 65 && name === "Jhon" && <Age>{age}</Age>} */}
    </>
  );
}

export default Welcome;

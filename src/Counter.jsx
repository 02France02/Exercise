import { useState } from "react";
import "./Counter.css"
import { CounterDisplay } from "./CounterDisplay";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="container">
        <CounterDisplay counter={counter}></CounterDisplay>        
        <button
          type="button"
          onClick={() => setCounter((counter) => counter + 1)}
        >
          COUNT+
        </button>

        <button
          type="button"
          onClick={() => setCounter((counter) => counter - 1)}
        >
          COUNT-
        </button>

        <button
          type="button"
          onClick={() => setCounter((counter) => counter = 0)}
        >
          RESET
        </button>
      </div>
    </>
  );
}
export default Counter;

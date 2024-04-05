import { useState } from "react";

export function Container({ title, children }) {
  const [espand, setEspand] = useState(false);
  function handleEspand() {
    setEspand((t) => !t)
  }
  return (
    <>
      <div className="div-child">
        {title}
        <button onClick={handleEspand}>Click</button>
      </div>
      {espand && children}
    </>
  );
}

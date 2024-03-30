import { useRef, useState } from "react";
import "./TodoList.css";
export function TodoList() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  function handleSubmit() {
    if (inputRef.current.value !== "") {
      setTodos([...todos, inputRef.current.value]);
      console.log(todos);
      inputRef.current.value = "";
    }
    /*     inputRef.current.value = ""; */
  }

  function handleRemove() {
    setTodos([]);
  }

  function handlerSingleItemRemove(index) {
    const newArr = [...todos];
    newArr.splice(index, 1);
    setTodos(newArr);
  }

  return (
    <div id="container-list">
      <input type="text" name="todos" ref={inputRef} />
      <button onClick={handleSubmit}>ADD</button>
      <button onClick={handleRemove}>REMOVE</button>

      <ul className="unOrdered">
        {todos.map((item, index) => (
          <div>
            <li key={index}>{item}</li>
            <button onClick={() => handlerSingleItemRemove(index)}>X</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

import { useState } from "react"
import { Link } from "react-router-dom";

export function Counter() {
    const [count, setCount] = useState(0);
    function handleUp() {
        setCount(c => c + 1)
    }
    function handleDown() {
        setCount(c => c - 1)
    }
    function handleReset() {
        setCount(0)
    }
    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleUp}>UP</button>
            <button onClick={handleDown}>DOWN</button>
            <button onClick={handleReset}>RESET</button>
            <Link to="/">HOME</Link>
        </>
    )
}
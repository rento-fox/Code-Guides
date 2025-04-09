// Solution
    // To fix this, we can use the useCallback hook to prevent the function from being recreated unless necessary.
    // Use the useCallback Hook to prevent the Todos component from re-rendering needlessly.
    // Now the Todos component will only re-render when the todos prop changes:

import { useState, useCallback } from "react";
import Todos from "./Todos";

const AppWithCallBack = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    };

    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
    }, [todos]);

    return (
        <>
        <h1>With callBack</h1>
        <Todos todos={todos} addTodo={addTodo} />
        <hr />
        <div>
            Count: {count} <button onClick={increment}>+</button>
        </div>
        </>
    );
};

export default AppWithCallBack

// EOF

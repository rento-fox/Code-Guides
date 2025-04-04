// Problem
    // In this example, the Todos component re-renders even when the todos have not changed.
    // When you click the increment button, the Todos component re-renders.
    // If this component was complex, it could cause performance issues.

import { useState } from "react";
import NonMemoTodos from "./NonMemoTodos";

const NonMemoApp = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["todo 1", "todo 2"]);

    const increment = () => {
        setCount((c) => c + 1);
    };

    return (
        <>
        <NonMemoTodos todos={todos} />
        <hr />
        <div>
            Count: {count} <button onClick={increment}>+</button>
            <br />
            On the console you can see that todos re-renders everytime the button is clicked.
            <br />
            <br />
        </div>
        </>
    );
};

export default NonMemoApp

// EOF

// Solution
    // To fix this, we can use memo.
    // Use memoto keep the Todos component from needlessly re-rendering.
    // Wrap the Todos component export in memo:

import { useState } from "react";
import MemoTodos from "./MemoTodos";

const MemoApp = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["todo 1", "todo 2"]);

    const increment = () => {
        setCount((c) => c + 1);
    };

    return (
        <>
        <MemoTodos todos={todos} />
        <hr />
        <div>
            Count: {count} <button onClick={increment}>+</button>
            <br />
            Here todos are NOT re-rendered on each click
        </div>
        </>
    );
};

export default MemoApp

// EOF

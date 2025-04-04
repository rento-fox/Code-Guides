// React Memo
    // Using memo will cause React to skip rendering a component if its props have not changed.
    // This can improve performance.
    // This section uses React Hooks. See 'React Hooks' for more information on Hooks.

// Problem
    // In this example, the Todos component re-renders even when the todos have not changed.
    // index.js:
        // import { useState } from "react";
        // import Todos from "./Todos";
        // const App = () => {
        //     const [count, setCount] = useState(0);
        //     const [todos, setTodos] = useState(["todo 1", "todo 2"]);
        //     const increment = () => {
        //         setCount((c) => c + 1);
        //     };
        //     return (
        //         <>
        //         <Todos todos={todos} />
        //         <hr />
        //         <div>
        //             Count: {count}
        //             <button onClick={increment}>+</button>
        //         </div>
        //         </>
        //     );
        // };

    // Todos.js:
        // const Todos = ({ todos }) => {
        //     console.log("child render");
        //     return (
        //         <>
        //         <h2>My Todos</h2>
        //         {todos.map((todo, index) => {
        //             return <p key={index}>{todo}</p>;
        //         })}
        //         </>
        //     );
        // };
        // export default Todos;

    // When you click the increment button, the Todos component re-renders.
    // If this component was complex, it could cause performance issues.

// Solution
    // To fix this, we can use memo.
    // Use memo to keep the Todos component from needlessly re-rendering.
    // Wrap the Todos component export in memo:
    // index.js:
        // import { useState } from "react";
        // import ReactDOM from "react-dom/client";
        // import Todos from "./Todos";
        // const App = () => {
        //     const [count, setCount] = useState(0);
        //     const [todos, setTodos] = useState(["todo 1", "todo 2"]);
        //     const increment = () => {
        //         setCount((c) => c + 1);
        //     };
        //     return (
        //         <>
        //         <Todos todos={todos} />
        //         <hr />
        //         <div>
        //             Count: {count}
        //             <button onClick={increment}>+</button>
        //         </div>
        //         </>
        //     );
        // };

    // Todos.js:
        // import { memo } from "react";
        // const Todos = ({ todos }) => {
        //     console.log("child render");
        //     return (
        //         <>
        //         <h2>My Todos</h2>
        //         {todos.map((todo, index) => {
        //             return <p key={index}>{todo}</p>;
        //         })}
        //         </>
        //     );
        // };
        // export default memo(Todos);

    // Now the Todos component only re-renders when the todos that are passed to it through props are updated.

// EOF

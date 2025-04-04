import { memo } from "react";

const MemoTodos = ({ todos }) => {
    console.log("child render");
    return (
        <>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
        })}
        </>
    );
};

// Now the Todos component only re-renders when the todos that are passed to it through props are updated.
export default memo(MemoTodos);

// EOF

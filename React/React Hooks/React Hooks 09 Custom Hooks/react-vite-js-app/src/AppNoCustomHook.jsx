// In the following code, we are fetching data in our Home component and displaying it.
// We will use the JSONPlaceholder service to fetch fake data.
// This service is great for testing applications when there is no existing data.

import { useState, useEffect } from "react";

const AppNoCustomHook = () => {
    const [data, setData] = useState(null);
    let x = 0

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);

    return (
        <>
        <h1>No Custom Hook</h1>
        {data &&
            data.map((item) => {
                if (x < 5) {
                    x++
                    return <p key={item.id}>{item.title}</p>;
                }
            })
        }
        <br />
        </>
    );
};

export default AppNoCustomHook

// EOF

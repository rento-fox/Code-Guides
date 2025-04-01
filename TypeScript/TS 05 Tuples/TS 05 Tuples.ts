// TypeScript Tuples
    // A tuple is a typed array with a pre-defined length and types for each index.
    // Tuples are great because they allow each element in the array to be a known type of value.
    // To define a tuple, specify the type of each element in the array:
        // define our tuple
        let ourTuple: [number, boolean, string];
        // initialize correctly
        ourTuple = [5, false, 'Coding God was here'];
        console.log(ourTuple); // [ 5, false, 'Coding God was here' ]

    // As you can see we have a number, boolean and a string.
    // But what happens if we try to set them in the wrong order:
        // define our tuple
        let ourTuple2: [number, boolean, string];
        // initialize incorrectly, throws an error
        // ourTuple2 = [false, 'Coding God was mistaken', 5]; // Error: (Tuple values are in the wrong order)

    // Even though we have a boolean, string, and number the order matters in our tuple and will throw an error.

// Readonly Tuple
    // A good practice is to make your tuple readonly.
    // Tuples only have strongly defined types for the initial values:
        // define our tuple
        let myTuple: [number, boolean, string];
        // initialize correctly
        myTuple = [5, false, 'Coding God was here'];
        // We have no type safety in our tuple for indexes 3+
        myTuple.push('Something new and wrong');
        console.log(myTuple); // [ 5, false, 'Coding God was here', 'Something new and wrong' ]

    // You see the new valueTuples only have strongly defined types for the initial values:
        // define our tuple
        let myTuple2: [number, boolean, string];
        // initialize correctly
        myTuple2 = [5, false, 'Coding God was here'];
        // We have no type safety in our tuple for indexes 3+
        myTuple2.push('Something new and wrong');
        // instead use our readonly tuple
        const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
        // throws error as it is readonly.
        // ourReadonlyTuple.push('Coding God took a day off'); // Error: Property 'push' does not exist on type 'readonly [number, boolean, string]'.

    // If you have ever used React before you have worked with tuples more than likely.
    // useState returns a tuple of the value and a setter function.
    // const [firstName, setFirstName] = useState('Dylan') is a common example.
    // Because of the structure we know our first value in our list
    // will be a certain value type in this case a string and the second value a function.

// Named Tuples
    // Named tuples allow us to provide context for our values at each index.
        const graph: [x: number, y: number] = [55.2, 41.3];
        console.log(graph) // [ 55.2, 41.3 ]

    // Named tuples provide more context for what our index values represent.

// Destructuring Tuples
    // Since tuples are arrays we can also destructure them.
        const graph2: [number, number] = [55.2, 41.3];
        const [x, y] = graph;
        console.log(x, y) // 55.2 41.3

// EOF

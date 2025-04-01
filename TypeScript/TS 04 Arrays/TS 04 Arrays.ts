// TypeScript Arrays
    // TypeScript has a specific syntax for typing arrays.
        const names: string[] = [];
        names.push("Dylan"); // no error
        names.push("John"); // no error
        // names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
        console.log(names); // [ 'Dylan', 'John' ]

// Readonly
    // The readonly keyword can prevent arrays from being changed.
    const names2: readonly string[] = ["Dylan"];
    // names2.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
    console.log(names2); // [ 'Dylan' ]

// Type Inference
    // TypeScript can infer the type of an array if it has values.
        const numbers = [1, 2, 3]; // inferred to type number[]
        numbers.push(4); // no error
        // numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
        console.log(numbers); // [ 1, 2, 3, 4 ]
        let head: number = numbers[0]; // no error
        console.log(head); // 1

// EOF

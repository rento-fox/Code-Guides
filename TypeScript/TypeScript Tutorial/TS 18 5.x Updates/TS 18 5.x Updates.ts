// TypeScript 5.x Updates
    // TypeScript is actively maintained and updated by Microsoft.
    // In version 5.x a lot of utility and quality of life updates were made.
    // This chapter covers the most popular updates to allow stricter and more flexible type safety.

    // As a reminder these features will only be available in 5.x+

// Template Literal Types
    // Template Literal Types now allows us to create more precise types using template literals.
    // We can define custom types that depend on the actual values of strings at compile time.
        type Color = "red" | "green" | "blue"; 
        type HexColor<T extends Color> = `#${string}`;
        let myColor: HexColor<"blue"> = "#0000FF";
        console.log(myColor); // #0000FF
        // let myColor2: HexColor<"red"> = "red" // Error: Type '"red"' is not assignable to type '`#${string}`'.
        let myColor2: HexColor<"red"> = "#red";
        console.log(myColor2); // #red

// Index Signature Labels
    // Index Signature Labels allows us to label index signatures using computed property names.
    // It helps in providing more descriptive type information when working with dynamic objects.
        type DynamicKey = `dynamic_${string}`; // Enforce key naming pattern
        type DynamicObject = { [key in DynamicKey]: string };
        let obj: DynamicObject = {
            dynamic_name: "Alice",
            dynamic_age: "25",
            dynamic_city: "New York",
            // work: "Google" // Error: Object literal may only specify known properties, and 'work' does not exist in type 'DynamicObject'.
        };
        console.log(obj); // { dynamic_name: 'Alice', dynamic_age: '25', dynamic_city: 'New York' }

// EOF

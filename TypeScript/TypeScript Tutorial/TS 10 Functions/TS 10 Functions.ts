// TypeScript Functions
    // TypeScript has a specific syntax for typing function parameters and return values.

// Return Type
    // The type of the value returned by the function can be explicitly defined.
        // the `: number` here specifies that this function returns a number
        function getSum(): number {
            return 10 + 5;
        }
        console.log(getSum()); // 15

    // If no return type is defined, TypeScript will attempt to infer it through the types of the variables or expressions returned.

// Void Return Type
    // The type void can be used to indicate a function doesn't return any value.
        function printHello(): void {
            console.log('Hello!');
        }  
        printHello(); // Hello!

// Parameters
    // Function parameters are typed with a similar syntax as variable declarations.
        function multiply(a: number, b: number) {
            return a * b;
        }
        console.log(multiply(2, 5)) // 10

    // If no parameter type is defined, TypeScript will default to using any,
    // unless additional type information is available as shown in the Default Parameters and Type Alias sections below.

// Optional Parameters
    // By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.
        // the `?` operator here marks parameter `c` as optional
        function add(a: number, b: number, c?: number) {
            return a + b + (c || 0);
        }
        console.log(add(2, 5)) // 7

// Default Parameters
    // For parameters with default values, the default value goes after the type annotation:
        function pow(value: number, exponent: number = 2) {
            return value ** exponent;
        }
        // Calculates 10^2 = 100
        console.log(pow(10)); // 100

    // TypeScript can also infer the type from the default value.

// Named Parameters
    // Typing named parameters follows the same pattern as typing normal parameters.
        function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
            return dividend / divisor;
        }
        // Calculates 10 / 2 = 5
        console.log(divide({dividend: 10, divisor: 2})); // 5

// Rest Parameters
    // Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
        function add2(a: number, b: number, ...rest: number[]) {
            return a + b + rest.reduce((previous_total, current_element) => previous_total + current_element, 0);
        }
        console.log(add2(10, 10, 10, 10, 10)); // 50

// Type Alias
    // Function types can be specified separately from functions with type aliases.
    // These types are written similarly to arrow functions.
        // Takes a value with type number, and returns a number
        type Negate = (value: number) => number;
        // in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
        const negateFunction: Negate = (value) => value * -1;
        console.log(negateFunction(10)); // -10

// EOF

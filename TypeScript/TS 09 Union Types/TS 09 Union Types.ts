// TypeScript Union Types
    // Union types are used when a value can be more than a single type.
    // Such as when a property would be string or number.

// Union | (OR)
    // Using the | we are saying our parameter is a string or number:
        function printStatusCode(code: string | number) {
            console.log(`My status code is ${code}.`)
        }
        // number
        printStatusCode(404); // My status code is 404.
        // string
        printStatusCode('404'); // My status code is 404.

// Union Type Errors
    // Note: you need to know what your type is when union types are being used to avoid type errors:
        function printStatusCode2(code: string | number) {
            // console.log(`My status code is ${code.toUpperCase()}.`) // Error: Property 'toUpperCase' does not exist on type 'string | number'. Property 'toUpperCase' does not exist on type 'number'
        }

    // In our example above we are having an issue invoking toUpperCase() as its a string method and number doesn't have access to it.

// EOF

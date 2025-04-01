// TypeScript Object Types
    // TypeScript has a specific syntax for typing objects.
        // Try playing around with modifying properties and adding ones to see what happens
        const car: { type: string, model: string, year: number } = {
            type: "Toyota",
            model: "Corolla",
            year: 2009
        };  
        console.log(car); // { type: 'Toyota', model: 'Corolla', year: 2009 }

    // Object types like this can also be written separately, and even be reused.

// Type Inference
    // TypeScript can infer the types of properties based on their values.
        const car2 = {
            type: "Toyota",
        };
        car2.type = "Ford"; // no error
        // car2.type = 2; // Error: Type 'number' is not assignable to type 'string'.  
        console.log(car2); // { type: 'Ford' }

// Optional Properties
    // Optional properties are properties that don't have to be defined in the object definition.
        // Example without an optional property
            // const car3: { type: string, mileage: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
            //     type: "Toyota",
            // };

        // Example with an optional property
            // no error on optional property, remove it and see what happens
            const car4: { type: string, mileage?: number } = {
                type: "Toyota"
            };
            car4.mileage = 2000;
            console.log(car4); // { type: 'Toyota', mileage: 2000 }

// Index Signatures
    // Index signatures can be used for objects without a defined list of properties.
        const nameAgeMap: { [index: string]: number } = {};
        nameAgeMap.Jack = 25; // no error
        // nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
        console.log(nameAgeMap); // { Jack: 25 }

    // Index signatures like this one can also be expressed with utility types like Record<string, number>.

// EOF

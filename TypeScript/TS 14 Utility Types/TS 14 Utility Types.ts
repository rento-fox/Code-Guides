// TypeScript Utility Types
    // TypeScript comes with a large number of types that can help with some common type manipulation,
    // usually referred to as utility types.
    // This chapter covers the most popular utility types.

// Partial
    // Partial changes all the properties in an object to be optional.
        interface Point {
            x: number;
            y: number;
        }
        let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
        pointPart.x = 10;
        console.log(pointPart); // { x: 10 }
        pointPart.y = 5;
        console.log(pointPart); // { x: 10, y: 5 }

// Required
    // Required changes all the properties in an object to be required.
        interface Car {
            make: string;
            model: string;
            mileage?: number; // Normally '?' makes the property optional
        }
        let myCar: Required<Car> = {
            make: 'Ford',
            model: 'Focus',
            mileage: 12000 // `Required` forces mileage to be defined
        };
        console.log(myCar); // { make: 'Ford', model: 'Focus', mileage: 12000 }

// Record
    // Record is a shortcut to defining an object type with a specific key type and value type.
        const nameAgeMap: Record<string, number> = {
            'Alice': 21,
            'Bob': 25
        };
        console.log(nameAgeMap); // { Alice: 21, Bob: 25 }

    // Record<string, number> is equivalent to { [key: string]: number }
        const nameAgeMap2: { [key: string]: number } = {
            'Alice': 21,
            'Bob': 25
        };
        console.log(nameAgeMap2); // { Alice: 21, Bob: 25 }

// Omit
    // Omit removes keys from an object type.
        interface Person {
            name: string;
            age: number;
            location?: string;
        }
        const bob: Omit<Person, 'age' | 'location'> = {
            name: 'Bob'
            // `Omit` has removed age and location from the type and they can't be defined here
        };
        console.log(bob); // { name: 'Bob' }

// Pick
    // Pick removes all but the specified keys from an object type.
        interface Person {
            name: string;
            age: number;
            location?: string;
        }
        const bob2: Pick<Person, 'name' | 'age'> = {
            name: 'Bob',
            age: 25
            // `Pick` has only kept name and age, so location is removed from the type and can't be defined here
        };
        console.log(bob2); // { name: 'Bob', age: 25 }

// Exclude
    // Exclude removes types from a union.
        type Primitive = string | number | boolean;
        const value: Exclude<Primitive, string> = true;
        // a string cannot be used here since Exclude removed it from the type.
        // const value2: Exclude<Primitive, string> = 'Hello'; // Error: Type '"Hello"' is not assignable to type 'number | boolean'.
        console.log(typeof value); // boolean

// ReturnType
    // ReturnType extracts the return type of a function type.
        type PointGenerator = () => { x: number; y: number; };
        const point: ReturnType<PointGenerator> = {
            x: 10,
            y: 20
        };
        console.log(point) // { x: 10, y: 20 }

        type FetchData = (type: string) => { data: string; status: number };
        const fetchData: FetchData = (type) => {
        return { data: `Fetched ${type}`, status: 200 };
        };
        // Instead of manually typing the return type here,
        // we can use ReturnType to ensure it matches the type returned by `fetchData`
        const result: ReturnType<FetchData> = fetchData("posts");
        console.log(result); // { data: 'Fetched posts', status: 200 }

        function makeMultiplier(factor: number) {
            return (value: number) => value * factor;
        }
        // Using ReturnType to capture the return type of the function returned by makeMultiplier
        const multiplyByTwo: ReturnType<typeof makeMultiplier> = makeMultiplier(2);
        console.log(multiplyByTwo(5)); // 10

// Parameters
    // Parameters extracts the parameter types of a function type as an array.
        type PointPrinter = (p: { x: number; y: number; }) => void;
        const point2: Parameters<PointPrinter>[0] = {
            x: 10,
            y: 20
        };
        console.log(point2) // { x: 10, y: 20 }

        type manyParameters = (p1: number, p2: string) => void
        type firstParameterType = Parameters<manyParameters>[0]
        type secondParameterType = Parameters<manyParameters>[1]
        const age: Parameters<manyParameters>[0] = 5
        const user: secondParameterType = "John"
        console.log(user, age) // John 5

        type Human = (p0: {name: string, age: number}, adult: boolean) => void
        const human: Parameters<Human>[0] = {
            name: "John",
            age: 23,
        }
        console.log("Human:", human) // Human: { name: 'John', age: 23 }
        const humanStatus: Parameters<Human>[1] = true
        console.log("This human is an adult:", humanStatus) // This human is an adult: true

// Using ReturnType and Parameters simultaneously (example by ChatGPT)
    // Function that takes a number and a string and returns a boolean
    type ProcessInput = (num: number, str: string) => boolean;
    
    // Extract the parameters of the function
    type ParameterTypes = Parameters<ProcessInput>; // [number, string]
    
    // Extract the return type of the function
    type ReturnTypeOfProcessInput = ReturnType<ProcessInput>; // boolean
    
    // Now, we use these types
    const processArgs: ParameterTypes = [42, "hello"];  // This is a valid tuple [number, string]
    const output: ReturnTypeOfProcessInput = true;      // This is valid because the return type is 'boolean'
    
    // Function that accepts the parameter types and return type
    function processAndReturn(parameters: ParameterTypes): ReturnTypeOfProcessInput {
        const [num, str] = parameters;
        // Calculates if the number is bigger than the length of the string
        return num > str.length; // This returns a boolean
    }
    console.log(processAndReturn([42, "Hello"])); // true

// Readonly
    // Readonly is used to create a new type where all properties are readonly,
    // meaning they cannot be modified once assigned a value.
    // Keep in mind TypeScript will prevent this at compile time,
    // but in theory since it is compiled down to JavaScript you can still override a readonly property.
        interface Person {
            name: string;
            age: number;
        }
        const person: Readonly<Person> = {
            name: "Dylan",
            age: 35,
        };
        // person.name = 'Edward'; // Error: Cannot assign to 'name' because it is a read-only property.

// Using multiple TypeScript utility types (examples by ChatGPT)
    // Using Partial with Pick
        // Original interface
        interface User {
            name: string;
            age: number;
            email: string;
        }
        // Create a new type that only has the 'name' and 'email' fields, and make them optional
        type PartialUserContact = Partial<Pick<User, 'name' | 'email'>>;
        const userContact: PartialUserContact = {
            name: "John", // email is optional now
        };
        console.log(userContact); // { name: 'John' }

    // Combining Omit and Partial
        interface Product {
            id: number;
            name: string;
            price: number;
            description: string;
        }
        // Omit 'id' and 'price' from Product and make the remaining properties optional
        type EditableProduct = Partial<Omit<Product, 'id' | 'price'>>;
        const editableProduct: EditableProduct = {
            name: "New Product", // id and price are omitted and optional
        };
        console.log(editableProduct); // { name: 'New Product' }

    // Using Required with Pick
        interface Task {
            id: number;
            title?: string;
            description?: string;
            completed: boolean;
        }
        // Create a new type that only includes the 'title' and 'completed' fields and make them required
        type RequiredTask = Required<Pick<Task, 'title' | 'completed'>>;
        const task: RequiredTask = {
            title: "Finish homework",
            completed: false,  // Both title and completed are required now
        };
        console.log(task);  // { title: 'Finish homework', completed: false }

    // Using Record with keyof
        // Original interface
        interface somePerson {
            name: string;
            age: number;
        }
        // Create a new type that maps the keys of the 'Person' type to their corresponding types, but as a string
        type StringifiedPerson = Record<keyof somePerson, string>;
        const Person: StringifiedPerson = {
            name: "Alice",
            age: "30",  // Even though 'age' was a number, now it's a string due to Record
        };
        console.log(Person);  // { name: 'Alice', age: '30' }

    // Combining Exclude and ReturnType
        function getStatus(isActive: boolean): string | null {
            return isActive ? "active" : null;
        }
        // Get the return type of the function `getStatus`, but exclude `null` from it
        type Status = Exclude<ReturnType<typeof getStatus>, null>;
        const currentStatus: Status = "active";  // This is valid
        // const invalidStatus: Status = null; // Error: Type 'null' is not assignable to type 'string'.
        console.log(currentStatus);  // active

// EOF

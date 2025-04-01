// TypeScript Basic Generics
    // Generics allow creating 'type variables' which can be used to create
    // classes, functions & type aliases that don't need to explicitly define the types that they use.
    // Generics makes it easier to write reusable code.

// Functions
    // Generics with functions help make more generalized methods which more accurately represent the types used and returned.
        function createPair<type1, type2>(var1: type1, var2: type2): [type1, type2] {
            return [var1, var2];
        }  
        console.log(createPair<string, number>('hello', 42)); // [ 'hello', 42 ]
        console.log(createPair<boolean, string>(true, "world")); // [ true, "world" ]
        console.log(createPair<number, number>(5, 10)); // [ 5, 10 ]

    // TypeScript can also infer the type of the generic parameter from the function parameters.
        console.log(createPair('hello', 42)); // [ 'hello', 42 ]
        console.log(createPair(true, "world")); // [ true, "world" ]
        console.log(createPair(5, 10)); // [ 5, 10 ]

// Classes
    // Generics can be used to create generalized classes, like Map.
        class NamedValue<T> {
            private _value: T | undefined;
            constructor(private name: string) {}
            public setValue(value: T) {
                this._value = value;
            }
            public getValue(): T | undefined {
                return this._value;
            }
            public toString(): string {
                return `${this.name}: ${this._value}`;
            }
        }
        const intValue = new NamedValue<number>('myNumber');
        console.log(typeof intValue) // object
        console.log(intValue.getValue()); // undefined
        console.log(intValue.toString()); // myNumber: undefined
        intValue.setValue(10);
        console.log(intValue.toString()); // myNumber: 10

        const strValue2 = new NamedValue<string>('Name')
        console.log(strValue2.getValue()); // undefined
        console.log(strValue2.toString()); // Name: undefined
        strValue2.setValue("John")
        console.log(strValue2.toString()); // Name: John

    // TypeScript can also infer the type of the generic parameter if it's used in a constructor parameter.

// Type Aliases
    // Generics in type aliases allow creating types that are more reusable.
        type Wrapped<T> = { value: T };
        const wrappedValue: Wrapped<number> = { value: 10 };
        const wrappedValue2: Wrapped<string> = { value: "John"}
        console.log(wrappedValue)   // { value: 10 }
        console.log(wrappedValue2)  // { value: 'John' }

    // This also works with interfaces with the following syntax: interface Wrapped<T> {

// Default Value
    // Generics can be assigned default values which apply if no other value is specified or inferred.
        // Generic default value is string
        class NamedValue2<T = string> {
            private _value: T | undefined;
            constructor(private name: string) {}
            public setValue(value: T) {
                this._value = value;
            }
            public getValue(): T | undefined {
                return this._value;
            }
            public toString(): string {
                return `${this.name}: ${this._value}`;
            }
        }
        // Type not specified
        let value2 = new NamedValue2('myNumber');
        // setValue accepts strings
        value2.setValue('myValue');
        console.log(value2.toString()); // myNumber: myValue
        
        // Type specified as number
        let value2_2 = new NamedValue2<number>('myNumber');
        // setValue accepts numbers
        value2_2.setValue(42);
        console.log(value2_2.toString()); // myNumber: 42

// Extends
    // Constraints can be added to generics to limit what's allowed.
    // The constraints make it possible to rely on a more specific type when using the generic type.
        function createLoggedPair<S extends string | number, T extends boolean | number>(v1: S, v2: T): [S, T] {
            console.log(`creating pair: v1='${v1}', v2='${v2}'`);
            return [v1, v2];
        }
        createLoggedPair('hello', 42)   // creating pair: v1='hello', v2='42'
        createLoggedPair(10, 55)        // creating pair: v1='10', v2='55'
        // createLoggedPair(true, 5)    // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
        createLoggedPair('NOT', true)   // creating pair: v1='NOT', v2='true'

    // This can be combined with a default value.
        function loggedPairWithDefault<S extends string | number = string, T extends boolean | number = number>(v1: S, v2: T): [S, T] {
            console.log(`creating pair: v1='${v1}', v2='${v2}'`);
            return [v1, v2];
        }
        // Specified types
        let result1 = loggedPairWithDefault<string, boolean>('Hello', true); // creating pair: v1='Hello', v2='true'
        console.log(result1);  // [ 'Hello', true ]

        // Not specified types
        let result2 = loggedPairWithDefault('hello', 42);   // creating pair: v1='hello', v2='42'
        let result3 = loggedPairWithDefault(10, false);     // creating pair: v1='10', v2='false'
        console.log(result2); // [ 'hello', 42 ]
        console.log(result3); // [ 10, false ]

// EOF

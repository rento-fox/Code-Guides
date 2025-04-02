// TypeScript Casting
    // There are times when working with types where it's necessary to override the type of a variable,
    // such as when incorrect types are provided by a library.
    // Casting is the process of overriding a type.

// Casting with as
    // A straightforward way to cast a variable is using the as keyword,
    // which will directly change the type of the given variable.
        let x: unknown = 'hello';
        console.log(typeof x) // string
        console.log((x as string).length); // 5

    // Casting doesn't actually change the type of the data within the variable,
    // for example the following code will not work as expected since the variable x is still holds a number.
        let y: unknown = 4;
        console.log(typeof y) // number
        // prints undefined since numbers don't have a length
        console.log((y as string).length); // undefined

    // TypeScript will still attempt to typecheck casts to prevent casts that don't seem correct,
    // for example the following will throw a type error,
    // since TypeScript knows casting a string to a number doesn't makes sense without converting the data:
        // console.log((4 as string).length);   // Error: Conversion of type 'number' to type 'string' may be a mistake
                                                // because neither type sufficiently overlaps with the other.
                                                // If this was intentional, convert the expression to 'unknown' first.

    // The Force casting section below covers how to override this.

// Casting with <>
    // Using <> works the same as casting with as.
        let variable: unknown = 'hello';
        console.log(typeof variable) // string
        console.log((<string>variable).length); // 5

    // Note: This type of casting will not work with TSX, such as when working on React files.

// Force casting
    // To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type. 
        let x2 = 7;
        console.log(typeof x2) // number
        // x2 is not actually a string so this will return undefined
        console.log(((x2 as unknown) as string).length); // undefined

// EOF

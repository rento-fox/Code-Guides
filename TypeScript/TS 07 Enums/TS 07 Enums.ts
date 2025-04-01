// TypeScript Enums
    // An enum is a special "class" that represents a group of constants (unchangeable variables).
    // Enums come in two flavors string and numeric. Lets start with numeric.

// Numeric Enums - Default
    // By default, enums will initialize the first value to 0 and add 1 to each additional value:
        enum CardinalDirections {
            North,
            East,
            South,
            West
        };
        let currentDirection = CardinalDirections.North;
        // North is the first value so it logs '0'
        console.log(currentDirection); // 0
        // throws error when commented in as 'North' is not a valid enum
        // currentDirection = 'North'; // Error: Type '"North"' is not assignable to type 'CardinalDirections'.

// Numeric Enums - Initialized
    // You can set the value of the first numeric enum and have it auto increment from that:
    enum CardinalDirections2 {
        North = 1,
        East,
        South,
        West
    };
    // logs 1 since we initialized the first value to something other than '0'
    console.log(CardinalDirections2.North); // 1
    // logs 4 as it continued on from the initial '1' value
    console.log(CardinalDirections2.West); // 4

// Numeric Enums - Fully Initialized
    // You can assign unique number values for each enum value. Then the values will not incremented automatically:
    enum StatusCodes {
        NotFound = 404,
        Success = 200,
        Accepted = 202,
        BadRequest = 400
    };
    // logs 404
    console.log(StatusCodes.NotFound); // 404
    // logs 200
    console.log(StatusCodes.Success); // 200

// String Enums
    // Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.
        enum CardinalDirections3 {
            North = 'North',
            East = "East",
            South = "South",
            West = "West"
        };
        // logs "North"
        console.log(CardinalDirections3.North); // North
        // logs "West"
        console.log(CardinalDirections3.West); // West

    // Technically, you can mix and match string and numeric enum values, but it is recommended not to do so.

// EOF

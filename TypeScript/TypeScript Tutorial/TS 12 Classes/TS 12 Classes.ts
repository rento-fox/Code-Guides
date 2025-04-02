// TypeScript Classes
    // TypeScript adds types and visibility modifiers to JavaScript classes.

// Members: Types
    // The members of a class (properties & methods) are typed using type annotations, similar to variables.
        class Person {
            name!: string; // The '!' tells TypeScript "trust me, I will initialize this later"
        }
        const person = new Person();
        console.log(person) // Person { name: undefined }
        person.name = "Jane";
        console.log(person); // Person { name: 'Jane' }

// Members: Visibility
    // Class members also be given special modifiers which affect visibility.
    // There are three main visibility modifiers in TypeScript.
        // public - (default) allows access to the class member from anywhere
        // private - only allows access to the class member from within the class
        // protected - allows access to the class member from itself and any classes that inherit it,
        //              which is covered in the inheritance section below

        class Person2 {
            private name: string;
            public constructor(name: string) {
                this.name = name;
            }
            public getName(): string {
                return this.name;
            }
        }
        const person2 = new Person2("Jane");
        // person.name isn't accessible from outside the class since it's private
        // console.log(person2.name) // Error: Property 'name' is private and only accessible within class 'Person2'.
        // We use the public method getName
        console.log(person2.getName()); // Jane

    // The 'this' keyword in a class usually refers to the instance of the class.

// Parameter Properties
    // TypeScript provides a convenient way to define class members in the constructor, by adding visibility modifiers to the parameter.
    class Person3 {
        // name is a private member variable
        public constructor(private name: string) {}
        public getName(): string {
            return this.name;
        }
    }
    const person3 = new Person3("Jane");
    // console.log(person3.name) // Error: Property 'name' is private and only accessible within class 'Person3'.
    console.log(person3.getName()); // Jane

// Readonly
    // Similar to arrays, the readonly keyword can prevent class members from being changed.
    class Person4 {
        private readonly name: string;
        public constructor(name: string) {
            // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
            this.name = name;
        }
        public getName(): string {
            return this.name;
        }
        public changeName(newName: string): void {
            // this.name = newName // Error: Cannot assign to 'name' because it is a read-only property.
            console.log("Can't change read-only property \'name\'")
        }
    }
    const person4 = new Person4("Jane");
    console.log(person4.getName()); // Jane
    person4.changeName("John") // Can't change read-only property 'name'

// Inheritance: Implements
    // Interfaces can be used to define the type a class must follow through the implements keyword.
        interface Shape {
            // Everything here must be found in the Rectangle class
            getArea: () => number;
        }
        class Rectangle implements Shape {
            // Everything here is not necessarily found in the Shape interface
            public constructor(protected readonly width: number, protected readonly height: number) {}
            public getArea(): number {
                return this.width * this.height;
            }
            public someFunction(): void {
            }
        }
        const myRect = new Rectangle(10, 20);
        console.log(myRect.getArea()); // 200
    
    // A class can implement multiple interfaces by listing each one after implements,
    // separated by a comma like so: class Rectangle implements Shape, Colored {

// Inheritance: Extends
    // Classes can extend each other through the extends keyword. A class can only extend one other class.
        interface Shape2 {
            getArea: () => number;
        }
        class Rectangle2 implements Shape2 {
            public constructor(protected readonly width: number, protected readonly height: number) {}
            public getArea(): number {
                return this.width * this.height;
            }
        }
        class Square2 extends Rectangle2 {
            public constructor(sideLength: number) {
                super(sideLength, sideLength);
            }
            // getArea gets inherited from Rectangle
        }
        const mySq2 = new Square2(20);
        console.log(mySq2.getArea()); // 400

// Override
    // When a class extends another class, it can replace the members of the parent class with the same name.
    // Newer versions of TypeScript allow explicitly marking this with the override keyword.
        interface Shape3 {
            getArea: () => number;
        }
        class Rectangle3 implements Shape3 {
            // using protected for these members allows access from classes that extend from this class, such as Square
            public constructor(protected readonly width: number, protected readonly height: number) {}
            public getArea(): number {
                return this.width * this.height;
            }
            public toString(): string {
                return `Rectangle[width=${this.width}, height=${this.height}]`;
            }
        }
        class Square3 extends Rectangle3 {
            public constructor(width: number) {
                super(width, width);
            }
            // this toString replaces the toString from Rectangle
            public override toString(): string {
                return `Square[width=${this.width}]`;
            }
        }
        const myRect3 = new Rectangle3(10, 20)
        const mySq3 = new Square3(20);
        console.log(myRect3.toString()) // Rectangle[width=10, height=20]
        console.log(mySq3.toString());  // Square[width=20]

    // By default the override keyword is optional when overriding a method,
    // and only helps to prevent accidentally overriding a method that does not exist.
    // Use the setting noImplicitOverride to force it to be used when overriding.

// Abstract Classes
    // Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members.
    // This is done by using the abstract keyword. Members that are left unimplemented also use the abstract keyword. 
        abstract class Polygon4 {
            public abstract getArea(): number; // Abstract method (must be implemented in child class)
            public toString(): string {
                return `Polygon[area=${this.getArea()}]`;
            }
        }
        class Rectangle4 extends Polygon4 {
            public constructor(protected readonly width: number, protected readonly height: number) {
                super();
            }
            public getArea(): number {
                return this.width * this.height;
            }
        }
        const myRect4 = new Rectangle4(10, 20);
        console.log(myRect4.getArea()); // 200
        console.log(myRect4.toString()); // Polygon[area=200]

    // Abstract classes cannot be directly instantiated, as they do not have all their members implemented.
        // const polygon = new Polygon4() // Error: Cannot create an instance of an abstract class.

// EOF

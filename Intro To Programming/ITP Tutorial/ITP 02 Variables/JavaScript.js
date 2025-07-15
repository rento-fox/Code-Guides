// JavaScript

// Creating a variable
const favAnimal = 'turtles';
console.log('I like ' + favAnimal); // I like turtles

// Add a Variable to a String
const a = 'Jane';
console.log('My name is ' + a); // My name is Janes

// Add Two String Variables Together
const a2 = 'Jane';
const b2 = 'My name is ';
console.log(b2 + a2); // My name is Jane

// Add Two Number Variables
const a3 = 2;
const b3 = 3;
console.log(a3 + b3); // 5

// Divide Two Number Variables
const a4 = 12;
const b4 = 3;
console.log(a4 / b4); // 4

// Add Two Variables with Extra Variable c
const a5 = 2;
const b5 = 3;
console.log('a is ' + a5 + ', and b is ' + b5); // a is 2, and b is 3
const c5 = a5 + b5;
console.log('The sum a + b is ' + c5); // The sum a + b is 5

// Incrementing a Variable
let a6 = 2;
a6 = a6 + 1;
console.log(a6); // 3

// Incrementing a Variable Using Shorthand
let a7 = 2;
a7 += 1;
console.log(a7); // 3

// Decrementing a Variable Using Shorthand
let a8 = 5;
a8 -= 3;
console.log(a8); // 2

// Using a Variable in an if Statement
const temperature = 25;
console.log('Temperature: ' + temperature + '°C'); // Temperature: 25°C
if (temperature > 20) {
    console.log('It is warm'); // It is warm
} else {
    console.log('It is not warm');
}

// EOF

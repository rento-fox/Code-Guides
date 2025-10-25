// JavaScript
console.log('JavaScript')

// Creating a Variable
const favAnimal = 'turtles';
console.log(' 1 | I like ' + favAnimal); // I like turtles

// Add a Variable to a String
const a = 'Jane';
console.log(' 2 | My name is ' + a); // My name is Jane

// Add Two String Variables Together
const a2 = 'Jane';
const b2 = 'My name is ';
console.log(' 3 |', b2 + a2); // My name is Jane

// Add Two Number Variables
const a3 = 2;
const b3 = 3;
console.log(' 4 |', a3 + b3); // 5

// Divide Two Number Variables
const a4 = 12;
const b4 = 3;
console.log(' 5 |', a4 / b4); // 4

// Add Two Variables with Extra Variable c
const a5 = 2;
const b5 = 3;
console.log(' 6 | a is ' + a5 + ', and b is ' + b5); // a is 2, and b is 3
const c5 = a5 + b5;
console.log('   | The sum a + b is ' + c5); // The sum a + b is 5

// Incrementing a Variable
let a6 = 2;
a6 = a6 + 3;
console.log(' 7 |', a6); // 5

// Incrementing a Variable Using Shorthand (1)
let a7 = 2;
a7 += 3;
console.log(' 8 |', a7); // 5

// Incrementing a Variable Using Shorthand (2)
let a8 = 2;
a8++;
console.log(' 9 |', a8); // 3

// Decrementing a Variable
let a9 = 5;
a9 = a9 - 3;
console.log('10 |', a9); // 2

// Decrementing a Variable Using Shorthand (1)
let a10 = 5;
a10 -= 3;
console.log('11 |', a10); // 2

// Decrementing a Variable Using Shorthand (2)
let a11 = 5;
a11--;
console.log('12 |', a11); // 4

// Using a Variable in an if Statement
const temperature = 25;
console.log('13 | Temperature: ' + temperature + '°C'); // Temperature: 25°C
if (temperature > 20) {
    console.log('   | It is warm'); // It is warm
} else {
    console.log('It is not warm');
}

// EOF

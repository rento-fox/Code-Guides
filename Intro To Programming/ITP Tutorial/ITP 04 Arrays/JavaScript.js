console.log('Hello JavaScript.js'); // Hello JavaScript.js

// Creating an array
const myFruits = ['banana', 'apple', 'orange'];
console.log(myFruits); // [ 'banana', 'apple', 'orange' ]

// Read an array value
const myFruits2 = ['banana', 'apple', 'orange'];
console.log(myFruits2[0]); // banana

// Updating an array value
const myFruits3 = ['banana', 'apple', 'orange'];
myFruits3[0] = 'kiwi';
console.log(myFruits3); // [ 'kiwi', 'apple', 'orange' ]

// Insert a value into an array
const myFruits4 = ['banana', 'apple', 'orange'];
myFruits4.push('lemon');
console.log(myFruits4); // [ 'banana', 'apple', 'orange', 'lemon' ]

// Add a value to a specific position in an array
const myFruits5 = ['banana', 'apple', 'orange'];
myFruits5.splice(1, 0, 'coconut');
console.log(myFruits5); // [ 'banana', 'coconut', 'apple', 'orange' ]

// Remove value at index 1
const myFruits6 = ['banana', 'apple', 'orange'];
myFruits6.splice(1,1);
console.log(myFruits6); // [ 'banana', 'orange' ]

// Remove value from the end of an array
const myFruits7 = ['banana', 'apple', 'orange'];
myFruits7.pop();
console.log(myFruits7); // [ 'banana', 'apple' ]

// Length of an array
const myFruits8 = ['banana', 'apple', 'orange'];
console.log(myFruits8.length); // 3

// Loop through an array
const myFruits9 = ['banana', 'apple', 'orange'];
for (let fruit of myFruits9) {
    console.log(fruit); // (prints elements of the array vertically)
}

// Loop through an array with a counting variable
const myFruits10 = ['banana', 'apple', 'orange'];
for (let i = 0; i < myFruits10.length; i++) {
    console.log(myFruits10[i]); // (prints elements of the array vertically)
}

// Looping through an array of names, looking for "Bob"
const listOfNames = ['Jones', 'Jill', 'Bob', 'Alice'];
for (let i = 0; i < listOfNames.length; i++) {
    console.log(listOfNames[i]); // (prints names vertically, "Bob" is the last name printed)
    if (listOfNames[i] === 'Bob') {
        console.log('Found Bob!'); // Found Bob!
        break;
    }
}

// EOF

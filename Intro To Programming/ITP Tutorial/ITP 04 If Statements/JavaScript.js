console.log('Hello JavaScript.js'); // Hello JavaScript.js

// if else
const dice = Math.floor(Math.random() * 6) + 1;
console.log("You rolled a " + dice); // You rolled a (number between 1-6)
if (dice === 6) {
    console.log("You got 6!🥳"); // You got 6!🥳
} else {
    console.log("Try again"); // Try again
}

// else if
const age = 15;
console.log('Age: ' + age); // Age: 15
if (age < 13) {
    console.log('You are a child');
} else if (age < 20) {
    console.log('You are a teenager'); // You are a teenager
} else {
    console.log('You are an adult');
}

// Nested if statements
const age2 = 19;
console.log('Age: ' + age2); // Age: 19
if (age2 < 13) {
    console.log('You are a child');
} else if (age2 < 20) {
    console.log('You are a teenager'); // You are a teenager
    if (age2 > 17) {
        console.log('and an adult!'); // and an adult!
    }
} else {
    console.log('You are an adult');
}

// EOF

console.log('Hello JavaScript.js'); // Hello JavaScript.js

// while loop dice rolling program
let dice = Math.ceil(Math.random()*6);
console.log(dice); // (number between 1-6)
let count = 1;
while (dice != 6) {
    dice = Math.ceil(Math.random()*6);
    console.log(dice); // (number between 1-6)
    count += 1;
}
console.log('You got 6!'); // You got 6!
console.log('You rolled', count, 'times'); // You rolled (count) times

// for loop
for (let i = 5; i > 0; i--) {
    console.log(i); // (prints numbers 5 to 1 vertically)
}
console.log('Liftoff!'); // Liftoff!

// for-each loop
const myFruits = ['banana', 'apple', 'orange'];
for (let fruit of myFruits) {
    console.log(fruit); // (prints elements of the array vertically)
}

// for loop with a counting variable
for (let i = 0; i < myFruits.length; i++) {
    console.log(myFruits[i]); // (prints elements of the array vertically)
}

// do-while loop dice rolling program
let dice2;
let count2 = 0;
do {
    dice2 = Math.ceil(Math.random()*6);
    console.log(dice2); // (number between 1-6)
    count2 += 1;
} while (dice2 != 6);
console.log('You got 6!'); // You got 6!
console.log('You rolled', count2, 'times'); // You rolled (count2) times

// Nested loop (loop inside another loop)
let numExperiments = 1000;
let totalRolls = 0;
for (let i = 0; i < numExperiments; i++) {
    let count = 0;
    while (true) {
        let dice = Math.floor(Math.random() * 6) + 1;
        count++;
        if (dice === 6) {
            break;
        }
    }
    totalRolls += count;
}
console.log("Doing " + numExperiments + " experiments"); // Doing 1000 experiments
console.log("Average number of rolls to get 6 is " + totalRolls/numExperiments); // Average number of rolls to get 6 is (calculated average)

// EOF

// Challenge 1: Swap two variables
// Given two variables a and b, swap their values without using a third variable.
let a = 5;
let b = 10;

// Before swapping
console.log(`Before swapping: a = ${a}, b = ${b}`);

// Swapping logic
a = a + b;
b = a - b; // a is the total - b is the first b --> 15 - 10 = 5 = first a
a = a - b; // a is the total - b is the second b (first a) --> 15 - 5 = 10 = first b

console.log(`After swapping: a = ${a}, b = ${b}`);
// increment & decrement
let num = 5;

console.log(++num);
console.log(num++);

// Type coercion
// Implicit Conversion: Sometimes automatically converts data types
console.log('5' + 2); // "52" (number --> string)
console.log('5' - 3); // 2 (string --> number)
console.log('5' * '3'); // 15 (both strings --> numbers)
console.log("abc" * 3); // NaN (Not a Number)

// Explicit Conversion: manually convert data types
let n = "123";
console.log(Number(n)); // 123 (string --> number)
console.log(String(123)); // "123" (number --> string)
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean("")); // false
console.log(Boolean("Hi")); // true


// ============ Exercises ==============
// 1. Write a program to calculate the remainder of 17 divided by 4.
function remainderCal(dividend, divisor) {
    let remainderResult = dividend % divisor;
    return remainderResult;
};

// Call the function to calculate the remainder
let dividend = 13;
let divisor = 6;

console.log(`The remainder of ${dividend} divided by ${divisor} is ${remainderCal(dividend, divisor)}`);

// 2. Compare 10 == "10" vs 10 === "10" and explain the difference.
let comp1 = (10=="10");
let comp2 = (10==="10");

console.log(comp1); // true (because 10 => "10" and "10" == "10" --> true)
console.log(comp2); // false (because it's a strict equality --> no coercion --> 10 is a number, "10" is a string --> false)


// 3. Use logical operators to check if: A person is eligible to vote (age ≥ 18 and isCitizen = true).
let age = 17;
let isCitizen = true;

if (age >= 18 && isCitizen === true) {
    console.log("A person is eligible to vote");
} else {
    console.log("A person is NOT eligible to vote");
};

// 4. Convert "42" into a number and add 8.
function numConvert(num) {
    return Number(num) + 8;
};

let str = "10";
console.log(numConvert(str));

// 5. Convert 0 into a boolean and explain why it’s false.
let numb = 0;

function booleanConvert(n) {
    return Boolean(n);
};

console.log(booleanConvert(numb)); // false || 0 = false, 1 = true

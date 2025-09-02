// Strings
let name = "Thien";
let greeting = `Hello, ${name}!`;

console.log(greeting); // Hello Thien!
console.log(name.length); // 5
console.log(name[0]); // T
console.log(name.toUpperCase()); // THIEN
console.log(name.includes("hien")); // true
console.log("   extra spaces    ".trim()); // "extra spaces" , trim all white spaces both left and right side of the string

// Numbers
let x = 42.7;

console.log(Math.floor(x)); // 42
console.log(Math.ceil(x)); // 43
console.log(Math.round(x)); // 43
console.log(Math.random()); // random 0-1

console.log(Number("123")); // 123
console.log(parseInt("123.45")); // 123
console.log(parseFloat("123.45")); // 123.45

console.log(isNaN("abc")); // true
console.log(Number.isNaN(NaN)); // true

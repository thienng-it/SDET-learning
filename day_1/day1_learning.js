/* 
    * var -> old, function-scoped (avoid)
    * let -> block-scoped, reassignable
    * const -> block-scoped, cannot be reassigned
*/

// Varaibles declaration
var name = "Alice"; // avoid
let age = 25;
const country = "Vietnam";

age = 26; // allowed
// country = "USA"; // error, not allowed --> const cannot be reassigned

// Data types
// Primitive types: string, number, boolean, undefined, null, symbol, biglnt
let str = "Hello JS"; // string
let num = 42; // number
let isCool = true; //boolean
let notDefined; // undefined
let empty = null; // null
let sym = Symbol('id'); // symbol
let big = 123456789012345678901234567890n; // BigInt

// Non-primitive (reference) types: object, array, function
let person = {name: "Alice", age: 25}; // object
let colors = ["red", "green", "blue"]; // array
function greet() {
    return "Hello!"; // function
}

// =========== Exercises ===========

// 1. Declare variables using let and const. Try reassigning them.

let city = "Hanoi";
console.log("This is the first assignment:", city);
city = "Ho Chi Minh City";
console.log("This is a second assignment:", city);

// 2. Create variables for your name (string), age (number), isStudent (boolean).
let myName = "Joseph";
let myAge = 25;
let isStudent = false;

console.log("My name is", myName);
console.log("I am", myAge, "years old");
console.log("Am I a student?", isStudent);

// 3. Create an object car with brand, model, year.
let car = {
    brand: "Toyota"
    , model: "Camry"
    , year: 2020
}

console.log("Car details:", car);

// 4. Create an array fruits with 3 items.
let fruits = ["apple, banana, orange"];
console.log("Fruits:", fruits);

// 5. Print the type of each variable using typeof.
console.log("Type of myName:", typeof myName);
console.log("Type of myAge:", typeof myAge);
console.log("Type of isStudent:", typeof isStudent);
console.log("Type of car:", typeof car);
console.log("Type of fruits:", typeof fruits);
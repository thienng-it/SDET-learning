// Deep dive into Functions

// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Thien")); // Hello, Thien!

// 1. Function Expression
// Expression is stored in a variable and can be passed around.
// const greet = function(name) {
//     return `Hello, ${name}!`;
// };

// console.log(greet("Thien"));

// 2.  Arrow Functions (modern syntax)
// --> Shorter, cleaner syntax
// Use cases:
// Great for callbacks (map, filter, reduce)
// Do NOT bind their own this --> safer in async/testing code.
// const greet = (name) => `Hello, ${name}!`;

// 3. Parameters
// Default parameters
function multiply(a, b=1){
    return a * b;
}
console.log(multiply(5)); // 5 --> a = 5, b = 1 --> 5 * 1 = 5

// Rest parameters
function sum(...nums) {
    return nums.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// 4. Callbacks & Higher-Order Functions
function doMath(a, b, operation) {
    return operation(a, b);
}

const add = (x, y) => x + y;
console.log(doMath(3, 4, add)); // 7

// 5. Async Functions
// Normal async/await
async function fetchData() {
    return "Data received!";
}

fetchData().then(console.log); // Data received!

// with await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function run () {
    console.log("Start");
    await delay(1000);
    console.log("1 second later...");
}
run();

// Basic Example of Promises
const pizzaPromise = new Promise((resolve, reject) => {
    const pizzaReady = true;

    if(pizzaReady) {
        resolve("Your Pizza is ready!");
    } else {
        reject("Sorry, no pizza today.");
    }
});

// Use the promise
pizzaPromise
    .then(message => console.log(message)) // what to do if success
    .catch(error => console.error(error)); // what to do if failure

// Example of Promises function with Delay
function waitTwoSeconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Done waiting 2 seconds!");
        }, 2000);
    });
}

waitTwoSeconds().then(msg => console.log(msg));
// Write a function that checks if a number is even or odd.
// const prompt = require("prompt-sync")();

// let flag = true;

// Function
function isEvenOrOdd(n) {
    // if (n % 2 === 0) {
    //     console.log("This is an EVEN number");
    //     return n;
    // } else {
    //     console.log("This is an ODD number");
    //     return n;
    // };

    return n % 2 === 0 ? "Even" : "Odd";
};

module.exports = isEvenOrOdd;

// while (flag) {
//     let num = prompt("Input your number: ");
//     console.log(isEvenOrOdd(num));

//     let continuePrompting = prompt("Do you want to prompt again? (Y/N)");

//     if (continuePrompting.toLowerCase() === "y") {
//         continue;
//     } else {
//         console.log("Thank you to use my converter!");
//         flag = false;
//     };
// };






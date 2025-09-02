// const prompt = require("prompt-sync")();

// function checkTruthy(input){
//     if (input === 0 || input === "" || input === null || input === undefined || isNaN(input) || input === false){
//         console.log("Falsy");
//     }else {
//         console.log("Truthy");
//     };
// };

// // Call out the function
// checkTruthy(0);

function checkTruthy(value) {
    return Boolean(value) ? "Truthy" : "Falsy";
}

module.exports = checkTruthy;
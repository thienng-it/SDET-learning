function fizzBuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
    if (n % 3 === 0) return "Fizz";
    if (n % 5 === 0) return "Buzz";
    return n.toString();
}

module.exports = fizzBuzz;

// for (let n = 0; n < 20; n++) {

//     if (n % 3 === 0) {
//         console.log("Fizz");
//     }
//     if (n % 5 === 0) {
//         console.log("Buzz");
//     }
//     console.log(n);
// };
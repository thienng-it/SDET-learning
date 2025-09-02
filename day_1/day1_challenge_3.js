// Data Type checker

let name = "Joseph";
let age = 25;
let isSingle = true;
let hobbies = ["Coding", "Listening to music", "Watching movie"];

function checkType(t) {
    return typeof t;
};

console.log(`Type of name is ${checkType(name)}`); // Type of name
console.log(`Type of age is ${checkType(age)}`); // Type of age
console.log(`Type of isSingle is ${checkType(isSingle)}`); // Type of age
console.log(`Type of hobbies is ${checkType(hobbies)}`); // Type of age
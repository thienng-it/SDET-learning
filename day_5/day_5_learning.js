// Objects in JavaScript

// 1. Creating Objects

// Object literal
// const user = {
//     name: "Alice",
//     age: 25,
//     isAdmin: true,
// };

// Using constructor
const person = new Object();
person.name = "Bob";
person.age = 30;

// Using class (modern style)
class Car {
    constructor(brand) {
        this.brand = brand;
    }
}

const myCar = new Car("Toyota");

// 2. Accessing & Modifying Properties
const user = {
    name: "joseph",
    age: 25,
};

console.log(user.name); // dot notation -> Alice
console.log(user["age"]); // bracket notation -> 25

user.age = 26; // modify
user.email = "joseph@mail.com"; // add new property
delete user.email; // remove property

// 3. Methods & this
// Object can hold functions (called methods)
const user = {
    name: "joseph",
    greet: function () {
        console.log("Hi, I am " + this.name); // this refers to the object that owns the method
    },
};

user.greet(); // Hi, I am joseph

// 4. Object destructuring
// Destructuring lets you pull values out easily

const user = {
    name: "Alice",
    age: 25,
};

const { name, age } = user; // object destructuring here!
console.log(name); // Alice
console.log(age); // 25

// or we can also rename
const {name: userName} = user;
console.log(userName); // Alice


// Object Iteration
const user = {
    name: "Alice",
    age: 25,
};

for (let key in user) {
    console.log(key, user[key]);
}
// name Alice
// age 25

console.log(Object.keys(user)); // ['name', 'age]
console.log(Object.values(user)); // ['Alice, 25]
console.log(Object.entries(user)); // [ ['name', 'Alice'], ['age', 25] ]



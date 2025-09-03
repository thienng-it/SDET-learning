// Create an object book with properties title, author, and year.
// Add a method getSummary() that returns a string: "Title by Author, published in Year".

// 1
export const book = {
    title: "Harry Porter",
    author: "J.K.Rolling",
    year: 1997,
    getSummary: function () {
        return `${this.title} by ${this.author}, published in ${this.year}`;
    },
};

// Destructure the object to extract title and author into variables.
const { title, author } = book;
console.log(title); // Harry Porter
console.log(author); // J.K.Rolling

// 2
export class Book {
    constructor(title, author, year) {
        this.title = title,
        this.author = author,
        this.year = year
    };

    async getSummary() {
        console.log(`${this.title} by ${this.author}, published in ${this.year}`);
    };
}
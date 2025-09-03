import { Book, book } from "../day_5/day_5_challenge_1.js";

describe("Get summary of the book with properties title, author, and year", () => {
    
    // 1
    // Write a Jest test to verify that getSummary() returns the expected string.
    test("Verify the title, author, year - 1", () => {        
        expect(book.getSummary()).toBe("Harry Porter by J.K.Rolling, published in 1997");
    });

    // 2
    test("Verify the title, author, year - 2", async () => {
        const book = new Book("Harry Porter", "J.K.Rolling", 1997);
        await expect(book.title).toBe("Harry Porter");
        await expect(book.author).toBe("J.K.Rolling");
        await expect(book.year).toBe(1997);
    });
});
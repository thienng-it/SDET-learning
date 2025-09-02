const {extractNumbers} = require("../day_3/extractNumbers");

describe("extractNumbers", () => {
    test("Verify the actual result when extracts numbers", () => {
        expect(extractNumbers("Order #1234 has 56 items")).toEqual(["1234", "56"]);
    });

    test("Should return an empty array if no numbers found", () => {
        expect(extractNumbers("Hello World")).toEqual([]);
    });

    test("Should handle a string with only numbers", () => {
        expect(extractNumbers("100 200 300")).toEqual(["100", "200", "300"]);
    });

    test("Should handle mixed alphanumeric words", () => {
        expect(extractNumbers("abc123 xyz")).toEqual(["123"]);
    });
});



const { capitalize } = require("../day_3/capitalize.js"); // ESM --> Import, Export

test("Check the capitalized of first letter", () => {
    expect(capitalize("hello world")).toBe("Hello world");
    expect(capitalize("hi there!")).toBe("Hi there!");
    expect(capitalize("joseph thien")).toBe("Joseph thien");
});
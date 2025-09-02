const { isEvenAsync } = require("../day_4/isEvenAsyncFunction.js");

describe("Verify the function isEvenAsync(num) that returns a Promise correctly", () => {
    
    test("Resolves true for even numbers", async () => {
        await expect(isEvenAsync(10)).resolves.toBe(true); // test even number
    });

    test("Resolves true for odd numbers", async () => {
        await expect(isEvenAsync(11)).resolves.toBe(false); // test even number
    });

});
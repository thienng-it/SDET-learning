const {randomInt} = require("../day_3/randomInt");

test("Verify that the randomInt function should return a random integer between min and max correctly", () => {
    const num = randomInt(1, 10);
    expect(num).toBeGreaterThanOrEqual(1);
    expect(num).toBeLessThanOrEqual(10);
});
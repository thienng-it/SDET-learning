const {randomInt} = require("../day_3/randomInt");

test("Verify that the randomInt function should return a random integer between min and max correctly", () => {
    expect(randomInt(1, 10)).toBeGreaterThanOrEqual(1);
    expect(randomInt(1, 10)).toBeLessThanOrEqual(10);
});
const { sumAll } = require("../day_4/sumAllFunction.js");

test("Verify the function sumAll using rest params", () => {
    expect(sumAll(1,2,3,4)).toBe(10);
});
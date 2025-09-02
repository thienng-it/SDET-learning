const checkTruthy = require("../day_2/truthyFalsy");

test("Check truthy value", () => {
    expect(checkTruthy("Hello")).toBe("Truthy");
});

test("Check falsy value", () => {
    expect(checkTruthy(0)).toBe("Falsy");
});

test("Check falsy null", () => {
    expect(checkTruthy(null)).toBe("Falsy");
});
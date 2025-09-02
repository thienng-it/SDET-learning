const isEvenOrOdd = require("../day_2/evenOdd");

test("Check even numbers", () => {
    expect(isEvenOrOdd(10)).toBe("Even");
});

test("Check odd numbers", () => {
    expect(isEvenOrOdd(7)).toBe("Odd");
});
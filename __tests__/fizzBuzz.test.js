const fizzBuzz = require("../day_2/fizzBuzz");

test("Divisible by 3", () => {
    expect(fizzBuzz(9)).toBe("Fizz");
});

test("Divisible by 5", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
});

test("Divisible by both 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
});

test("Not divisible by 3 or 5", () => {
    expect(fizzBuzz(7)).toBe("7");
});
const isPalindrome = require("../day_3/palindromeChecker");

test("Palindrome checks", () => {
    expect(isPalindrome("madam")).toBe(true);
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("hello")).toBe(false);
});
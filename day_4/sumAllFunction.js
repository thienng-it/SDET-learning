// Write a function sumAll(...nums) using rest params.
// Test it with expect(sumAll(1,2,3,4)).toBe(10).

function sumAll(...nums) {
    return nums.reduce((total, n) => total + n, 0);
};

module.exports = {sumAll};
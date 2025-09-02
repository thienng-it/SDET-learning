async function isEvenAsync(num) {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(num % 2 === 0); // true if even, false if odd
        }, 500); // simulate async delay
    });
};

module.exports = { isEvenAsync };
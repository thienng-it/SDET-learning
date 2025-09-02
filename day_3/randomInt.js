function randomInt(min, max) {
    /*
        Math.random() --> 0 <= value < 1
        max - min + 1 --> stretch the range size --> know the range size between min and max
        Math.floor() --> round down the value
        + min at the end --> shift the range up
    */
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = {randomInt};
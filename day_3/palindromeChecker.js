// Write a function isPalindrome(str) that returns true if the string is the same forwards and backwards
function isPalindrome(str) {
    /* 
        Note:
        Input: madam (str)
        Output: true (boolean)
    */
    // for (let i = 0; i < Math.floor(str.length / 2); i++) {
    //     return str[i] !== str[str.length - 1 - i] ? false : true
    // }
    return str == str.split("").reverse().join("");
}

module.exports = isPalindrome;
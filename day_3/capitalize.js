// write capitalize(str) that makes "hello world" --> "Hello world".
function capitalize(str) {
    /*
        Input: string
        Ouput: string with uppercased first letter
    */
    return str[0].toUpperCase() + str.slice(1, str.length);
};

module.exports = {capitalize};
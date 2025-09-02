function extractNumbers(str) {
    // Use the regex to pull out just the digits --> more efficient and clear way to read
    let matches = str.match(/\d+/g); // find all continuous digit sequences
    return matches ? matches : [];
};

module.exports = {extractNumbers};
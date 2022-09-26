const palindromes = function (string) {
    
    let noPunctuation = "";
    let reverse = "";

    for (let i = 0; i < string.length; ++i) {
        if (string[i].toUpperCase() === string[i].toLowerCase()) {
            continue;
        } else {
            noPunctuation += string[i].toLowerCase();
            //reverse += string[string.length - i];
        }
    }
    for (let i = 0; i < noPunctuation.length; ++i) {
        reverse += noPunctuation[noPunctuation.length - 1 - i];
    }
    return noPunctuation === reverse;
};
// Do not edit below this line
module.exports = palindromes;

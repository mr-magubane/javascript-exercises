const reverseString = function(string) {
    const stringToArray = string.split('');
    const arrayLength = stringToArray.length;
    const newArray = [];

    for (let i = arrayLength; i > 0; --i) {
        newArray.push(stringToArray[i-1]);
    };
    const newText = newArray.join('');
    return newText
};

reverseString('cars are big');
// reverseString(1)
// reverseString('')
// reverseString(' ')
// Do not edit below this line
module.exports = reverseString;

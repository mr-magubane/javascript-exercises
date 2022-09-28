const caesar = function(cipher, shift) {
    if (shift < 0) { //To handle negative shifts
        shift += 26;
    };

    var message = ''; 

    for (let i = 0; i < cipher.length; ++i) {
        if (cipher[i].toUpperCase() !== cipher[i].toLowerCase()) { //Is the character a letter
            if (cipher[i] == cipher[i].toUpperCase()) {
                const charUnicode = cipher.charCodeAt(i) + shift;
                message += String.fromCharCode(((charUnicode - 65)%26) + 65);
                continue;
            };
            const charUnicode = cipher.charCodeAt(i) + shift;
                message += String.fromCharCode(((charUnicode - 97)%26) + 97);
                continue;
        };
        message += cipher[i];
    };

    return message;
};

// Do not edit below this line
module.exports = caesar;

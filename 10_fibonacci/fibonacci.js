const fibonacci = function(number) {
    number = parseInt(number);
    if (number < 0) {
        return "OOPS";
    };
    if (number === 1) {
        return 1;
    };
    if (number === 0) {
        return 0;
    };
    return fibonacci(number - 1) + fibonacci(number - 2);
};

// Do not edit below this line
module.exports = fibonacci;

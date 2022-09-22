const sumAll = function(start, end) {
    if ( start < 0 || !Number.isInteger(start) ||  end < 0 || !Number.isInteger(end)) {
        return 'ERROR';
    };
    
    if (start > end) {
        let placeholder = start;
        start = end;
        end = placeholder;
    }

    let sum = 0;
    for (let i = start; i < end + 1; ++i) {
        sum = sum + i;
    };

    return sum;
};

// Do not edit below this line
module.exports = sumAll;

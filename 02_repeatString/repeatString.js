const repeatString = function(string, num) {
    let str = ''
    if (!(num > -1)) {
        return 'ERROR'
    }
    for (let i = 0; i < num; ++i) {
        str += string;
    }
    return str
};
repeatString('hey', 0)
// Do not edit below this line
module.exports = repeatString;

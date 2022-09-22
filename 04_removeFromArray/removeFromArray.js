const removeFromArray = function() {

    let Array = arguments[0];
    for (let i = arguments.length-1; i > 0; --i) {
        let toRemove = arguments[i];
        
        Array = Array.filter(function (a) {
            return a !== toRemove;
        });
    };
    return Array;
};

removeFromArray([7,8,8], 7, 9, 6);
// Do not edit below this line
module.exports = removeFromArray;
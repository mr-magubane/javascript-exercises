const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(arrryToSum) {
  let sum = 0;
	for (let i = 0; i < arrryToSum.length; ++i ) {
    sum += arrryToSum[i];
  };
  return sum;
};

const multiply = function(arrayToMultiply) {
  let answer = 1;
  for (let i = 0; i < arrayToMultiply.length; ++i) {
    answer *= arrayToMultiply[i];
  }
  return answer;
};

const power = function(base, exponent) {
	return base **exponent;
};

const factorial = function(number) {
  if (number < 2) {
    return 1;
  };
  return factorial(number-1)*number;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

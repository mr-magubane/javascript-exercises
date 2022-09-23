const ftoc = function(fahrenheitTemp) {
  celciusTemp = (fahrenheitTemp-32)*(5/9);

  return parseFloat(celciusTemp.toFixed(1));
};

const ctof = function(celciusTemp) {
  fahrenheitTemp = celciusTemp * (9/5) + 32;
  return parseFloat(fahrenheitTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

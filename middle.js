const assertArraysEqual = require('./assertArraysEqual');

const middle = function(input) {
  //console.log('Input Length:', input.length)
  if (input.length === 1 || input.length === 2) {
    return []
  } else if (input.length % 2 === 1) {
    //console.log(input[Math.ceil(input.length / 2 - 1)])
    return [input[Math.ceil(input.length / 2 - 1)]]
  } else if (input.length % 2 === 0) {
    //console.log([input[input.length / 2 - 1],input[input.length / 2]])
    return [input[input.length / 2 - 1], input[input.length / 2]]
  };
};

module.exports = middle;


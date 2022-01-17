const flatten = function(input) {
  let flattenedArray = [];
  for (let i = 0; i < input.length; i++) {
    //console.log('For Loop Count:', i, 'input[i][0] value:', input[i][0]);
    if (input[i][0] === undefined) {
      flattenedArray.push(input[i]);
    } else {
      for (let j = 0; j < input[i].length; j++) {
        flattenedArray.push(input[i][j]);
      }
    }
  }
  return flattenedArray;
};

module.exports = flatten;

// console.log(flatten([1, 2, [3, 4], 5, [6]]));
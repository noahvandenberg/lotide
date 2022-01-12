const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1,array2) === false) {
    console.log('🛑🛑🛑 FAIL: The arrays aren\'t equal')
  } else if (eqArrays(array1,array2) === true) {
    console.log('✅✅✅ PASS: The arrays are equal')
  }
}

const eqArrays = function(testCaseOne, testCaseTwo) {
  for (let i = 0; i < testCaseOne.length; i++) {
    //console.log('type 1:',typeof testCaseOne[i], 'type 2:', typeof testCaseTwo[i]) // Type Checker
    if (testCaseOne[i] !== testCaseTwo[i] || typeof testCaseOne[i] !== typeof testCaseTwo[i]) {
      return false
    } 
  }
  return true
}

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

// middle([1]) // => []
// middle([1, 2]) // => []
// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]
// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

assertArraysEqual(middle([1]),[])
assertArraysEqual(middle([1, 2]),[])
assertArraysEqual(middle([1, 2, 3]),[2])
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3])
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4])


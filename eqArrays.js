const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function(testCaseOne, testCaseTwo) {
  for (let i = 0; i < testCaseOne.length; i++) {
    //console.log('type 1:',typeof testCaseOne[i], 'type 2', typeof testCaseTwo[i])
    if (testCaseOne[i] !== testCaseTwo[i] || typeof testCaseOne[i] !== typeof testCaseTwo[i]) {
    
      return false
    } 
  }
  return true
}


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false) // => false
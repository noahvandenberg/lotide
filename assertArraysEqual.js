const eqArrays = require('./eqArrays')

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1,array2) === false) {
    return false
    console.log('🛑🛑🛑 FAIL: The arrays aren\'t equal')
  } else if (eqArrays(array1,array2) === true) {
    return true
    console.log('✅✅✅ PASS: The arrays are equal')
  }
}

module.exports = assertArraysEqual
const assertEqual = require('./assertEqual')

const eqArrays = function(testCaseOne, testCaseTwo) {
  for (let i = 0; i < testCaseOne.length; i++) {
    //console.log('type 1:',typeof testCaseOne[i], 'type 2', typeof testCaseTwo[i])
    if (testCaseOne[i] !== testCaseTwo[i] || typeof testCaseOne[i] !== typeof testCaseTwo[i]) {
    
      return false
    } 
  }
  return true
}

module.exports = eqArrays
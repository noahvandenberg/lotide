const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual,expected) === false) {
    return false;
    // console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
  } else if (eqObjects(actual,expected) === true) {
    return true;
    // console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

//assertObjectsEqual({a:1,b:2},{a:1,b:2})
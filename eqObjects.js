const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let matchedKeyValuePairs = 0;
  for (const key in object1) {
    for (const cey in object2) {
      if (Array.isArray(object1[key]) === true && Array.isArray(object2[cey]) === true && eqArrays(object1[key],object2[cey]) === true) {
        matchedKeyValuePairs ++;
      }
      if (key === cey && object1[key] === object2[cey]) {
        matchedKeyValuePairs ++;
      }
    }
  }
  if (matchedKeyValuePairs === Object.keys(object1).length && matchedKeyValuePairs === Object.keys(object2).length) {
    return true;
  } else {
    return false;
  }
};

module.exports = eqObjects;

// assertEqual(eqObjects({ a: "1", b: "2" },{ a: "1", b: "2" }),true);
// assertEqual(eqObjects({ a: "1", b: [1,2] },{ a: "1", b: [1,2] }),true);
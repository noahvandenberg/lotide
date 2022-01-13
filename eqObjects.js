const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(testCaseOne, testCaseTwo) {
  for (let i = 0; i < testCaseOne.length; i++) {
    //console.log('type 1:',typeof testCaseOne[i], 'type 2:', typeof testCaseTwo[i]); // Type Checker
    if (testCaseOne[i] !== testCaseTwo[i] || typeof testCaseOne[i] !== typeof testCaseTwo[i]) {
      return false;
    }
  }
  return true;
};

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

assertEqual(eqObjects({ a: "1", b: "2" },{ a: "1", b: "2" }),true);
assertEqual(eqObjects({ a: "1", b: [1,2] },{ a: "1", b: [1,2] }),true);
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1,array2) === false) {
    console.log('🛑🛑🛑 FAIL: The arrays aren\'t equal');
  } else if (eqArrays(array1,array2) === true) {
    console.log('✅✅✅ PASS: The arrays are equal');
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

const letterPositions = function(sentence) {
  const results = {};
  const sentenceArray = sentence.split(' ').join('').split('');
  for (let i = 0; i < sentenceArray.length; i++) {
    results[sentenceArray[i]] = [];
  }
  //console.log('results before population:',results)
  for (const letter in results) {
    for (let i = 0; i < sentenceArray.length; i++) {
      if (letter === sentenceArray[i]) {
        results[letter].push(i);
      }
    }
  }
  return results;
};


console.log(letterPositions('hello'));
assertArraysEqual(letterPositions('hello')['l'],[2,3]);
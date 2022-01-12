const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const stringArray = string.split(' ').join('').split('');
  const stringObject = {};
  for (let i = 0; i < stringArray.length; i++) {
    stringObject[stringArray[i]] = 0;
  }
  //console.log('stringObject before population:',stringObject)
  for (const letter in stringObject) {
    for (let i = 0; i < stringArray.length; i++) {
      if (letter === stringArray[i]) {
        stringObject[letter] ++;
      }
    }
  }
  return stringObject;
};

console.log(countLetters("lighthouse in the house"));
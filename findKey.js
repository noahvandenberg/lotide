const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (const key in object) {
    //console.log('key',key,'callback(key)',callback(key))
    if (callback(object[key]) === true) {
      return key
    }
  } 
  return undefined
}

namesObj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

//console.log(findKey(namesObj, x => x.stars === 2)) // => "noma"

assertEqual(findKey(namesObj, x => x.stars === 2), 'noma')
assertEqual(findKey(namesObj, x => x.stars === 1), 'Blue Hill')
assertEqual(findKey(namesObj, x => x.stars === 3), 'Akaleri')
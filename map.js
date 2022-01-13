const map = function(arrayToMap, callbackFunction) {
  //console.log('array:', arrayToMap, 'callback:', callbackFunction)
  const results = [];

  arrayToMap.forEach(element => {
    results.push(callbackFunction(element))
  });

  

  return results
  
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

const assertArraysEqual = function(array1, array2) {
  let notEqualFlag = 0;
  for (let i = 0; i < array1.length; i++) {
    //console.log(notEqualFlag)
    //console.log('type 1:',typeof array1[i], 'type 2:', typeof array2[i],'value 1:', array1[i],'value 2:', array2[i])
    if (array1[i] !== array2[i] || typeof array1[i] !== typeof array2[i]) {
      notEqualFlag ++;
    } 
  }
  if (notEqualFlag > 0) {
    console.log('Array 1 is not equal to Array 2')
  } else if (notEqualFlag === 0) {
    console.log('Array 1 is equal to Array 2')
  }
}

assertArraysEqual(results1,['g', 'c', 't', 'm', 't'])
assertArraysEqual(map(words, word => word[word.length-1]),[ 'd', 'l', 'o', 'r', 'm' ])
assertArraysEqual(map(words, word => word.length),[6, 7, 2, 5, 3])
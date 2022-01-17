const map = function(arrayToMap, callbackFunction) {
  //console.log('array:', arrayToMap, 'callback:', callbackFunction)
  const results = [];
  arrayToMap.forEach(element => {
    results.push(callbackFunction(element));
  });
  return results;
};

module.exports = map;

// const words = ["ground", "control", "to", "major", "tom"];

// const results1 = map(words, word => word[0]);
// console.log(results1);

// assertArraysEqual(results1,['g', 'c', 't', 'm', 't'])
// assertArraysEqual(map(words, word => word[word.length-1]),[ 'd', 'l', 'o', 'r', 'm' ])
// assertArraysEqual(map(words, word => word.length),[6, 7, 2, 5, 3])
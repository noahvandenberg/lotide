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

module.exports = letterPositions;


// console.log(letterPositions('hello'));
// assertArraysEqual(letterPositions('hello')['l'],[2,3]);
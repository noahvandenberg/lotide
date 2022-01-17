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

module.exports = countLetters;

// console.log(countLetters("lighthouse in the house"));
// assertEqual(countLetters("lighthouse in the house")['h'],4)
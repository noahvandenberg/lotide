const titleCase = function(text) {
  //console.log(text)
  let sentence = text.split(' ');
  for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i].split('');
    //console.log('sentence[i]',sentence[i],'sentence[i][0]',sentence[i][0],'sentence[i][0].charCodeAt()',sentence[i][0].charCodeAt() )
    if (sentence[i][0].charCodeAt() >= 97 && sentence[i][0].charCodeAt() <= 122) {
      sentence[i][0] = String.fromCharCode(sentence[i][0].charCodeAt() - 32);
    }
    //console.log('sentence[i]',sentence[i],'sentence[i][0]',sentence[i][0],'sentence[i][0].charCodeAt()',sentence[i][0].charCodeAt() )
    sentence[i] = sentence[i].join('');
  }
  sentence = sentence.join(' ');
  return sentence;
};

// titleCase('The quick brown fox')
// console.log(titleCase('The quick brown fox'));

module.exports = titleCase;
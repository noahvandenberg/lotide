const titleCase = function(text) {
  if (text === '') {
    return ''
  }
  //console.log('text',text)
  let sentence = text.toLowerCase().split(' ');
  if (text.length === 1) {
    sentence = sentence.join(' ')
  }
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
//console.log(titleCase('The quick brown fox'));

// console.log(titleCase('AB'));
// console.log(titleCase('HI YO'));
// console.log(titleCase('hAndlE wEIrd vOwEl cAsE'));
// console.log(titleCase('ALL UPPER CASE WORDS'));
// console.log(titleCase('all lower case words'));
// console.log(titleCase('i r cool'));
console.log(titleCase(''));



module.exports = titleCase;
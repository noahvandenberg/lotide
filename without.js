const without = function(source,itemsToRemove) {
  //console.log('source:', source);
  //console.log('itemsToRemove:', itemsToRemove);
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      //console.log('source[i]:', source[i], 'itemsToRemove[j]', itemsToRemove[j], 'source[i] === itemsToRemove[j]?:', source[i] === itemsToRemove[j])
      if (source[i] === itemsToRemove[j]) {
        //console.log('A:', source.splice(i, 1), 'I:', i) *This shit messed me up, the splice in the console.log() was mutating the source array.
        source.splice(i, 1)
        //i --;
      }
    }
  }
  return 'ANSWER:' + source
}


console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
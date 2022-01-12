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

// let testArray1 = [1,3,5,7,9]
// let testArray2 = [1,3,5,7,9]

// assertArraysEqual(testArray1,testArray2)
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  // return object with the counts of the items in the passed object in the array
  // console.log(allItems)
  // console.log(itemsToCount)
  const countedItems = {};
  for (const item in itemsToCount) {
    // checks if item on itemstocount
    if (itemsToCount[item] === true) {
      countedItems[item] = 0
      // loops through all items
      for (let i = 0; i < allItems.length; i++) {
        if (allItems[i] === item) {
          countedItems[item] ++;
        }
      }
    }
    if (countedItems[item] === 0) {
      delete countedItems[item]
    }
  }
  return countedItems
  //console.log(countedItems)
};







// 🧪🧪🧪🧪 TESTS 🧪🧪🧪🧪
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

//console.log(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }))

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

//console.log(result1)

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
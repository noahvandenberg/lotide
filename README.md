# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by [me](https://github.com/noahvandenberg) as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @noahvandenberg/lotide`

**Require it:**

`const _ = require('@noahvandenberg/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1,array2)`: asserts true when array1 === array2.
* `assertEqual(a,b)`:  asserts true when a === b.
* `assertObjectsEqual(obj1,obj2)`:  returns true when obj1 === obj2.
* `countLetters(string)`:  returns a object with a count of the times a letter was in the string.
* `countOnly(allItems, ItemsToCount)`:  returns an object of the count of instances of the items in itemsToCount in Allitems.
* `eqArrays(array1,array2)`:  returns true when array1 === array2.
* `eqObjects(obj1,obj2)`:  returns true when a === b.
* `findKey(object, callback)`:  returns the first key to return true in the callback function.
* `findKeyByValue(key,value)`:  returns the first key to have a matching value with the value argument.
* `flatten(array)`: returns and array void of nesting. 
* `head(array)`:  returns the first value in an array.
* `letterPositions(string)`: returns and object where the keys are the letters in the string and the values are the index's of their locations.
* `map(array,callback)`:  returns and array modified by the callback function.
* `tail(array)`:  returns an array void of the first value in the array.
* `middle(array)`:  returns the value in the middle of the array.
* `takeUntil(array,callback)`:  returns an array of values up until the value equates to true in the callback function.
* `without(array, itemsToRemove)`: returns and array void of the values in the itemsToRemove array.
* `titleCase(string)`: returns string with title case applied
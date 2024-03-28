// Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.

const takeUntil = function(array, callback) {
  const collection = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      break;
    } else {
      collection.push(array[i]);
    }
  }
  return collection;
};

// TEST CODE
const eqArrays = function(firstArr, secondArr) {
  // Check if the arrays have the same length
  if (firstArr.length !== secondArr.length) {
    return false;
  }
  // Loop over first array and return false as soon as a mismatch is found
  for (let i = 0; i < firstArr.length; i++) {
    // Check if the item is equal for both arrays
    if (firstArr[i] !== secondArr[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  // Check that argument is true
  if (eqArrays(array1, array2)) {
    // If argument returns true
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    // Else print a message
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
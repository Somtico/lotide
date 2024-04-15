// Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.

const takeUntil = function(array, callback) {
  // Initialize the variable where the collection of items will be stored
  const collection = [];
  for (let i = 0; i < array.length; i++) {
    // If the callback returns a truthy value, end the loop
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

const data1 = [1, 3, 5, 7, 9];
const result1 = takeUntil(data1, (x) => x % 2 === 0);
assertArraysEqual(result1, [1, 3, 5, 7, 9]); // Expected output: [1, 3, 5, 7, 9]

console.log("---");

const data2 = [2, 4, 6, 1, 8];
const result2 = takeUntil(data2, (x) => x === 1);
assertArraysEqual(result2, [2, 4, 6]); // Expected output: [2, 4, 6]

console.log("---");

const data3 = [10, 20, 30, 40, 50];
const result3 = takeUntil(data3, (x) => x === 50);
assertArraysEqual(result3, [10, 20, 30, 40]); // Expected output: [10, 20, 30, 40]

console.log("---");

const data4 = [1, 2, 3, 4, 5];
const result4 = takeUntil(data4, (x) => x > 100);
assertArraysEqual(result4, [1, 2, 3, 4, 5]); // Expected output: [1, 2, 3, 4, 5]

console.log("---");

const data5 = [];
const result5 = takeUntil(data5, (x) => x === 0);
assertArraysEqual(result5, []); // Expected output: []

console.log("---");

const data6 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results6 = takeUntil(data6, (x) => x < 0);
assertArraysEqual(results6, [1, 2, 5, 7, 2]); // Expected output: [ 1, 2, 5, 7, 2 ]

console.log("---");

const data7 = [
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
const results7 = takeUntil(data7, (x) => x === ",");
assertArraysEqual(results7, [ 'I\'ve', 'been', 'to', 'Hollywood' ]); // Expected output: [ 'I\'ve', 'been', 'to', 'Hollywood' ]

module.exports = takeUntil;

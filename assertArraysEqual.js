const eqArrays = require("./eqArrays");

// Implement assertArraysEqual which will take in two arrays using the eqArrays function and console.log an appropriate message to the console.


// FUNCTION TO TEST USER INPUT
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

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // => should FAIL
assertArraysEqual(["Lighthouse", "Labs"], ["Lighthouse", "Labs"]); // => should PASS
assertArraysEqual(["Lighthouse", "Labs"], ["Lighthouse", "labs"]); // => should FAIL
assertArraysEqual([12, 3], [1, 23]); // => should FAIL
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => should FAIL
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should FAIL
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => should PASS

module.exports = assertArraysEqual;

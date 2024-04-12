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

module.exports = assertArraysEqual;
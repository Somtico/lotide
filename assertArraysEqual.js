// Implement assertArraysEqual which will take in two arrays using the eqArrays function and console.log an appropriate message to the console.


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


// FUNCTION TO TEST USER INPUT
const assertArraysEqual = function(arrays) {
  // Check that argument is true
  if (arrays) {
    // If argument returns true
    console.log(`✅✅✅ Assertion Passed: both arrays are identical`);
  } else {
    // Else print a message
    console.log(`🛑🛑🛑 Assertion Failed: both arrays are not identical`);
  }
};

// TEST CODE
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3, 4])); // => should FAIL
assertArraysEqual(eqArrays(["Lighthouse", "Labs"], ["Lighthouse", "Labs"])); // => should PASS
assertArraysEqual(eqArrays(["Lighthouse", "Labs"], ["Lighthouse", "labs"])); // => should FAIL
assertArraysEqual(eqArrays([12, 3], [1, 23])); // => should FAIL
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3])); // => should PASS
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1])); // => should FAIL
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => should FAIL
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => should PASS

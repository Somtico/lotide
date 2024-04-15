// Implement without which will return a subset of a given array, removing unwanted elements.

const without = function(source, itemsToRemove) {
  // Initialize an empty array
  let wantedElements = [];
  // Loop over both arrays and compare each element
  for (let i = 0; i < source.length; i++) {
    let shouldInclude = true; // Source array elements that should be included
    // Loop over the second array to check for a match
    for (let j = 0; j < itemsToRemove.length; j++) {
      // If there is a match, set shouldInclude to false and stop checking
      if (source[i] === itemsToRemove[j]) {
        shouldInclude = false;
        break;
      }
    }
    // After checking for a match using the second array, check whether shouldInclude is still true and add the current source element to the wantedElements array
    if (shouldInclude) {
      wantedElements.push(source[i]);
    }
  }
  return wantedElements;
};

// TEST CODE
console.log(without([1, 2, 3], [1, 8, 6, 7])); // => [2, 3]
console.log(without([1, 7, 6], [1, 8, 6, 7])); // => []



// FUNCTIONS TO TEST THAT THE without FUNCTION DOES NOT MODIFY ANY OF THE ORIGINAL ARRAYS
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

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;

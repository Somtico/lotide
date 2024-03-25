// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
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
      break;
    }
  }
  return true;
};

// FUNCTION TO TEST USER INPUT
const assertEqual = function(actual, expected) {
  // Use if...else statements to compare the two values it takes in
  if (actual === expected) {
    // Check if they match and print a message
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    // Else print a message
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true); // => should FAIL
assertEqual(eqArrays(["Lighthouse", "Labs"], ["Lighthouse", "Labs"]), true); // => should PASS
assertEqual(eqArrays(["Lighthouse", "Labs"], ["Lighthouse", "labs"]), true); // => should FAIL
assertEqual(eqArrays([12, 3], [1, 23]), true); // => should FAIL
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should FAIL
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), false); // => should FAIL
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should PASS

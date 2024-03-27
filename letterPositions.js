/*
  This challenge is similar to the countLetters activity and allows us to spend some more time solving problems with objects.

We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.

For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.
*/

const letterPositions = function(sentence) {
  const results = {}; // Final result
  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]]) {
      results[sentence[i]] = []; // Array to store the values for each key
    }
    results[sentence[i]].push(i);
  }
  delete results[' '];
  return results;
};

// console.log(letterPositions("hello"));
// console.log(letterPositions("lighthouse labs"));


// FUNCTION TO TEST CODE
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

// All these should PASS
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);
assertArraysEqual(letterPositions("practice makes perfect").p, [0, 15]);
assertArraysEqual(letterPositions("practice makes perfect").r, [1, 17]);
assertArraysEqual(letterPositions("practice makes perfect").a, [2, 10]);
assertArraysEqual(letterPositions("practice makes perfect").c, [3, 6, 20]);
assertArraysEqual(letterPositions("practice makes perfect").e, [7, 12, 16, 19]);

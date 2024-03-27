/*
  Challenge
Instruction
Create a function called countLetters.

The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

For example, countLetters('LHL') should return results indicating that L appears twice, and H once.
*/

// FUNCTION IMPLEMENTATION
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

const countLetters = function(string) {
  // Create an object to store the results in
  const result = {};
  // Loop over the string input
  for (let letter of string) {
    if (result[letter]) { // Check whether the letter already exists in the result object
      result[letter] += 1;
    } else if (letter !== ' ') { // Add the letter to the result object if it is not a space
      result[letter] = 1;
    }
  }
  return result;
};

const result2 = countLetters("lighthouse in the house");

assertEqual(result2["h"], 4); // Should PASS
assertEqual(result2["i"], 2); // Should PASS
assertEqual(result2["g"], 5); // Should FAIL
assertEqual(result2["e"], 0); // Should FAIL

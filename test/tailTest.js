const assertEqual = require("../assertEqual");
const tail = require("../tail");

// TAIL TEST CODE
// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail(words).length, words.length - 1); // tail should have one element less than its input

// Test Case 3: An array with only one element
assertEqual(tail([1]), 0); // ...should yield an empty array for its tail

// Test Case 4: An empty array...
assertEqual(tail([]), 0); // ...should yield an empty array for its tail
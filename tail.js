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

// A function that returns the tail of an array
const tail = function(array) {
  // Initialize the new array formed
  let newArr = [];
  // Loop over the array
  for (let i = 0; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr.slice(1);
};


// TEST CODE
// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case 3: An array with only one element
console.log(tail([1])); // ...should yield an empty array for its tail

// Test Case 4: An empty array...
console.log(tail([])); // ...should yield an empty array for its tail
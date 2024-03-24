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

// A function that returns the first element of an array
const head = function(array) {
  return array[0];
};

// TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([200]), "Thanks.");
assertEqual(head([]), 5);
assertEqual(head([true]), 5);
assertEqual(head([false]), 5);



// Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.

// FUNCTION IMPLEMENTATION
const eqObjects = function(object1, object2) {
  // Extract the keys into an array
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  // First of all, check whether they have the same length
  if (keys1.length !== keys2.length) {
    return false;
  }
  // Loop over the first array to check whether its elements match the key-value pairs in the second object input
  for (let key of keys1) {
    if (!object2[key] || object1[key] !== object2[key]) {
      return false;
    }
  }
  // Loop over the second array to check whether its elements match the key-value pairs in the first object input
  for (let key of keys2) {
    if (!object1[key] || object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// TEST CODE
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

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };

const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};

assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

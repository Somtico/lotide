// Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

// FUNCTION IMPLEMENTATION
const findKey = function(object, callback) {
  // Loop through the object
  for (let key1 in object) {
    // Check whether the value is truthy
    if (callback(object[key1])) {
      return key1;
    }
  }
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

const result1 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
);
assertEqual(result1, "noma"); // Expected output: "noma"

const result2 = findKey(
  {
    A: { value: 1 },
    B: { value: 2 },
    C: { value: 3 },
    D: { value: 4 },
    E: { value: 5 },
  },
  (x) => x.value % 2 === 0
);
assertEqual(result2, "B"); // Expected output: "B"

const result3 = findKey(
  {
    X: { status: "active" },
    Y: { status: "inactive" },
    Z: { status: "active" },
  },
  (x) => x.status === "active"
);
assertEqual(result3, "X"); // Expected output: "X"

const result4 = findKey(
  {
    Apple: { color: "red" },
    Banana: { color: "yellow" },
    Orange: { color: "orange" },
  },
  (x) => x.size === "large"
);
assertEqual(result4, undefined); // Expected output: undefined

const result5 = findKey({}, (x) => x === 42);
assertEqual(result5, undefined); // Expected output: undefined

module.exports = findKey;

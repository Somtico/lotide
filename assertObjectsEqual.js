// Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.

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
const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect; // Import the util library's inspect function
  // Check that argument is true
  if (eqObjects(actual, expected)) {
    // If argument returns true
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    // Else print a message
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// TEST CODE
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  color: "Silver",
};

const vehicle = {
  color: "Silver",
  model: "Corolla",
  year: 2020,
  make: "Toyota",
};

const person1 = {
  name: "John",
  age: 30,
  city: "New York",
  occupation: "Engineer",
};

const person2 = {
  name: "Johns",
  age: 30,
  city: "New York",
  occupation: "Engineer",
};


assertObjectsEqual(car, vehicle); // => should PASS
assertObjectsEqual(person1, person2); // => should PASS

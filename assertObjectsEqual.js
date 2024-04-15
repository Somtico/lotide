// Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.
const eqObjects = require('./eqObjects');

// FUNCTION IMPLEMENTATION
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
assertObjectsEqual(person1, person2); // => should FAIL

module.exports = assertObjectsEqual;

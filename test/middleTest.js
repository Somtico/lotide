const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

// Test case: Array with odd number of elements
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Should PASS

// Test case: Array with even number of elements
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Should PASS

// Test case: Array with one element
assertArraysEqual(middle([1]), []); // Should PASS

// Test case: Array with two elements
assertArraysEqual(middle([1, 2]), []); // Should PASS

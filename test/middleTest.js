const assert = require("chai").assert;
const middle = require("../middle");

// Test case: Array with odd number of elements
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Should PASS

// // Test case: Array with even number of elements
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Should PASS

// // Test case: Array with one element
// assertArraysEqual(middle([1]), []); // Should PASS

// // Test case: Array with two elements
// assertArraysEqual(middle([1, 2]), []); // Should PASS

describe("#middle", () => {
  it(`Should return [3] for [1, 2, 3, 4, 5]`, () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3])
  });

  it(`Should return [2, 3] for [1, 2, 3, 4]`, () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3])
  });

  it(`Should return [] for [1]`, () => {
    assert.deepEqual(middle([1]), [])
  });

  it(`Should return [] for [1, 2]`, () => {
    assert.deepEqual(middle([1, 2]), [])
  });
});
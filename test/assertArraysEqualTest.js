const assertArraysEqual = require("../assertArraysEqual");

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // => should FAIL
assertArraysEqual(["Lighthouse", "Labs"], ["Lighthouse", "Labs"]); // => should PASS
assertArraysEqual(["Lighthouse", "Labs"], ["Lighthouse", "labs"]); // => should FAIL
assertArraysEqual([12, 3], [1, 23]); // => should FAIL
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => should FAIL
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should FAIL
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => should PASS

/* CHALLENGE
  Implement middle which will take in an array and return the middle-most element(s) of the given array.
*/
const middle = (array) => {
  const newArr = [];
  const midArr = Math.floor(array.length / 2);
  if (array.length === 1 || array.length === 2) {
    return newArr;
  } else if (array.length % 2 !== 0) {
    newArr.push(array[midArr]);
  } else if (array.length % 2 === 0) {
    newArr.push(array[midArr - 1]);
    newArr.push(array[midArr]);
  }
  return newArr;
};

// TEST CODE
const eqArrays = (firstArr, secondArr) => {
  // Check if the arrays have the same length
  if (firstArr.length !== secondArr.length) {
    return false;
  }
  // Loop over first array and return false as soon as a mismatch is found
  for (let i = 0; i < firstArr.length; i++) {
    // Check if the item is equal for both arrays
    if (firstArr[i] !== secondArr[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (array1, array2) => {
  // Check that argument is true
  if (eqArrays(array1, array2)) {
    // If argument returns true
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    // Else print a message
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

// Test case: Array with odd number of elements
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Should PASS

// Test case: Array with even number of elements
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Should PASS

// Test case: Array with one element
assertArraysEqual(middle([1]), []); // Should PASS

// Test case: Array with two elements
assertArraysEqual(middle([1, 2]), []); // Should PASS

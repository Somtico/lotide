// Our imaginary trick-or-treater has returned from their run. Some of their neighbours just gave them smaller bags of candy. Their big bag of treats contains smaller bags. Ugh! They want to just take out all of the candy and get it into one single bag, making it easier to eat them later!

// flatten is a function which does something like this. Given an array with other arrays inside, it can flatten it into a single-level array.

const flatten = (array) => {
  const newArr = []; // Where to store the new array
  // Loop over the array input
  for (let item1 of array) {
    // Check whether current element is an array
    if (Array.isArray(item1)) {
      // Loop over the current element if it is an array
      for (let item2 of item1) {
        newArr.push(item2);
      }
    } else {
      newArr.push(item1);
    }
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

// Test case 2: Flattening an array with one level of nesting
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // Should PASS
console.log("---");

// Test case 2: Flattening an empty array should return an empty array
assertArraysEqual(flatten([]), []); // Should PASS
console.log("---");

// Test case 3: Flattening an array with no nested arrays should return the same array
assertArraysEqual(flatten([1, 2, 3]), [1, 2, 3]); // Should PASS
console.log("---");

// Test case 4: Flattening an array with mixed data types
assertArraysEqual(flatten([1, [2, 'hello'], [true, false], [null, undefined]]), [1, 2, 'hello', true, false, null, undefined]); // Should PASS
console.log("---");

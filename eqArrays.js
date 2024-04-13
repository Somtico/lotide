
// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
const eqArrays = function(firstArr, secondArr) {
  // Check if both arguments are arrays
  if (!Array.isArray(firstArr) || !Array.isArray(secondArr)) {
    console.log("Both arguments must be arrays");
    return false;
  }
  
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

module.exports = eqArrays;
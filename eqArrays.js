// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
const eqArrays = function(firstArr, secondArr) {
  // Declare variables to store the items from the first and second arrays
  let firstArrItems = "";
  let secondArrItems = "";
  // Loop over first array
  for (let i = 0; i < firstArr.length; i++) {
    // Store current element in firstArrItem variable
    firstArrItems += firstArr[i];
  }
  
  // Loop over second array
  for (let j = 0; j < secondArr.length; j++) {
    // Store current element in secondArrItem variable
    secondArrItems += secondArr[j];
  }
  // console.log(`First array: ${firstArrItems}`);
  // console.log(`Second array: ${secondArrItems}`);
  
  // Compare the two arrays
  if (firstArrItems === secondArrItems) {
    // console.log(true);
    return true;
  } else {
    // console.log(false);
    return false;
  }
};

//TEST eqArrays FUNCTION
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false
eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false


// FUNCTION TO TEST USER INPUT
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

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true); // => should PASS
assertEqual(eqArrays(["Lighthouse", "Labs"], ["Lighthouse", "Labs"]), true);
assertEqual(eqArrays(["Lighthouse", "Labs"], ["Lighthouse", "labs"]), true);

// Imagine you’re helping an event organizer who is planning a conference. They have a list of all the attendees, but they need to count the number of times certain names appear on the list, as they want to make sure that the VIP guests are attended to properly.

// This is the type of problem the Lotide countOnly function will allow us to solve!

// Introducing countOnly
// Let's work together to implement countOnly. This function should take in a collection of items and return counts for a specific subset of those items. It won't count everything. In order to decide what to count, it will also be given an idea of which items we care about and it will only count those, ignoring the others.

// Items in our case will be limited to Strings.

// countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed.

// FUNCTION IMPLEMENTATION
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

const countOnly = function(allItems, itemsToCount) {
  // Create a variable to store the filtered items in
  let filter = [];
  // Loop over the array and object and filter out the object values that are true
  for (let item of allItems) {
    for (let wanted in itemsToCount) {
      if (itemsToCount[wanted] === true && item === wanted) {
        filter.push(wanted);
      }
    }
  }
  // Initialize a new object to store the filtered items in
  let count = {};
  // Extract the items from the filter array and store them in a new object
  for (let filtered of filter) {
    count[filtered] = 1;
  }
  // Check to see whether the key exists in the count object and increase its value
  for (let filtered of filter) {
    for (let key in count) {
      if (filtered === key) {
        count[filtered] += 1;
      }
    }
    break;
  }
  return count;
};

// TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], 1);
assertEqual(result1["Fang"], 3);
assertEqual(result1["Agouhanna"], undefined);

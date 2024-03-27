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
  // Initialize a new object to store the filtered items in
  let count = {};
  // Extract the items that are true from the allItems array and store them in a new object
  for (let item of allItems) {
    if (count[item]) {
      count[item] += 1;
    } else if (itemsToCount[item] === true) {
      count[item] = 1;
    }
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

assertEqual(result1["Jason"], 1); // Test should PASS
assertEqual(result1["Karima"], 1); // Test should FAIL
assertEqual(result1["Fang"], 3); // Test should FAIL
assertEqual(result1["Agouhanna"], undefined); // Test should PASS

// A function that returns the tail of an array
const tail = function(array) {
  // Remove the first element without changing the original array
  return array.slice(1);
};

module.exports = tail;
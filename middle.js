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

module.exports = middle;
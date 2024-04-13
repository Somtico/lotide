const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');
const assertObjectsEqual = require('./assertObjectsEqual');
const eqObjects = require('./eqObjects');

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual,
  eqArrays: eqArrays,
  assertObjectsEqual: assertObjectsEqual,
  eqObjects: eqObjects,
};
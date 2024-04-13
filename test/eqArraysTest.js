const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

// TEST CODE
describe("eqArrays", () => {
  it(`Should return TRUE for ["Lighthouse", "Labs"], ["Lighthouse", "Labs"]`, () => {
    assert.isTrue(eqArrays(["Lighthouse", "Labs"], ["Lighthouse", "Labs"]));
  });

  it(`Should return TRUE for [1, 2, 3], [1, 2, 3]`, () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it(`Should return TRUE for ["1", "2", "3"], ["1", "2", "3"]`, () => {
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  });

  it(`Should return FALSE for empty arguments`, () => {
    assert.isFalse(eqArrays());
  });

  it(`Should return FALSE for ["Lighthouse", "Labs"], ["Lighthouse", "labs"]`, () => {
    assert.isFalse(eqArrays(["Lighthouse", "Labs"], ["Lighthouse", "labs"]));
  });

  it(`Should return FALSE for [1, 2, 3], [1, 2, 3, 4]`, () => {
    assert.isFalse(eqArrays([1, 2, 3], [1, 2, 3, 4]));
  });

  it(`Should return FALSE for [12, 3], [1, 23]`, () => {
    assert.isFalse(eqArrays([12, 3], [1, 23]));
  });

  it(`Should return FALSE for [1, 2, 3], [3, 2, 1]`, () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });

  it(`Should return FALSE for ["1", "2", "3"], ["1", "2", 3]`, () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]));
  });
});
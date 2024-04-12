const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it(`Should return ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  });

  it(`Should return [] for [1]`, () => {
    assert.deepEqual(tail([1]), [])
  });
});
// const assertEqual = require("../assertEqual");
const assert = require("chai").assert;
const head = require("../head");

describe("#head", () => {
  it("Should return 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("Should return '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("Should return 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it("Should return 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it(`Should return undefined for []`, () => {
    assert.strictEqual(head([]));
  });
});
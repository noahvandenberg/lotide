const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("#assertArraysEqual", () => {

  it("returns true for ([1, 2, 3],[1, 2, 3])", () => {
    assert.isTrue(assertArraysEqual([1, 2, 3],[1, 2, 3]));
  });

  it("returns false for ([1, 2, 3],[3, 2, 1])", () => {
    assert.isFalse(assertArraysEqual([1, 2, 3],[3, 2, 1]));
  });

  it("returns false for ([1, 2, 3],[100, 200, 300])", () => {
    assert.isFalse(assertArraysEqual([1, 2, 3],[100, 200, 300]));
  });
});
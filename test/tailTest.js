const assert = require('chai').assert;
const tail = require('../tail') 
const assertArraysEqual = require('../assertArraysEqual');

describe("#tail", () => {

  it("returns [\"Lighthouse\", \"Labs\"] for [\"Hello\", \"Lighthouse\", \"Labs\"]", () => {
    
    assert.isTrue(assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]));
  });

});
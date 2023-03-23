// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("Caleb's polybius() tests:", () => {
  it("i and j encodes to 42", () => {
    const actual = polybius("ij")
    const expected = "4242"
    expect(actual).to.equal(expected)
  });
  it("42 should output (i/j)", () => {
    const actual = polybius("42", false)
    const expected = "(i/j)"
    expect(actual).to.equal(expected)
  });
   it ("ignores capitals letters",() => {
    const actual = polybius("Hello There")
    const expected = "3251131343 4432512451"
    expect(actual).to.equal(expected)
   })
  it ("maintains spaces",() => {
    const actual = polybius("hello there")
    const expected = "3251131343 4432512451"
    expect(actual).to.equal(expected)
  })
})
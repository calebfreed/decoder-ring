// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("Caleb's ceaser() tests:", () => {
    it("if shift is 0 then false", () => {
      const message = "zebra magazine";
      const shift = 0;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("if the shift is above 25 then false", () => {
      const message = "zebra magazine";
      const shift = 26;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("if the shift is less than -25 then false", () => {
      const message = "zebra magazine";
      const shift = -26;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
   it("if the shift is not there then false", () => {
      const actual = caesar("hello");

      expect(actual).to.be.false;
    });
  it ("ignores capitals letters",() => {
    const actual = caesar("Hello There", 3)
    const expected = "khoor wkhuh"
    expect(actual).to.equal(expected)
  })
   it ("handle's shifts past z", () => {
    const actual = caesar("Hello zhere", 3)
    const expected = "khoor ckhuh"
    expect(actual).to.equal(expected)
  })
  it ("handles shifts behind a",() => {
    const actual = caesar("Hello cere", -4)
    const expected = "dahhk yana"
    expect(actual).to.equal(expected)
  })
  it ("keep symbols and whatnot:",() => {
    const actual = caesar("Hello cere!", -4, false);
    const expected = "lipps givi!";
    expect(actual).to.equal(expected);
  })
  });
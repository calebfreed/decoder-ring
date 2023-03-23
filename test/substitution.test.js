// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("Caleb's substituion() tests:", () => {
  
  it ("26 chars long test",() => {
    const actual = substitution("hello", "also hello")
    expect(actual).to.be.false
  })
  
  it ("correct message test",() => {
    const actual = substitution("hello", "1@z9Q!kP#8xL5cM7oY$F*2tH4;")
    const expected = "pqllm"
    expect(actual).to.equal(expected)
  })
  
  it ("dupe check",() => {
    const actual = substitution("hello", "aaaaaaaaaaaaaaaaaaaaaaaaaa")
    expect(actual).to.be.false
  })
  
  it ("check for spaces",() => {
    const actual = substitution("hello there", "1@z9Q!kP#8xL5cM7oY$F*2tH4;")
    const expected = "pqllm fpqyq"
    expect(actual).to.equal(expected)
  })
  
  it ("ignores capitals letters",() => {
    const actual = substitution("Hello There", "1@z9Q!kP#8xL5cM7oY$F*2tH4;")
    const expected = "pqllm fpqyq"
    expect(actual).to.equal(expected)
  })

})
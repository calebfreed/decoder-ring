// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (shift === undefined || shift < -25 || shift > 25 || shift === 0) {
      return false;
    }
    input = input.toLowerCase();
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    if (!encode) {
      shift = -shift;
    }

    const message = [];
    for (let c of input) {
      let idx = alphabet.indexOf(c); //indexOf returns the index of the string if it exists
      if (idx === -1) {
        message.push(c);
        continue;
      }
      idx += shift;
      if (idx > 25) {
        idx -= 26;
      }
      if (idx < 0) {
        idx += 26;
      }
      message.push(alphabet[idx]);
    }
    return message.join("");
  }
  //encoding with a shift of 8 and decoding with a shift of -8 are the same operation

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

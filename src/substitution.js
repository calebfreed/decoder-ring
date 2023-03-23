// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {

    // error case section
    if (!alphabet) return false
    if (alphabet.length !== 26) return false
    for (let i = 0; i < alphabet.length; i++){
      for (let c = i + 1; c < alphabet.length; c++){
        if (alphabet[c] === alphabet[i]) return false
      }
    }
    //end error case section

    //variable definitions
    let realAlphabet = "abcdefghijklmnopqrstuvwxyz"
    let codeAlphabet = alphabet.toLowerCase()
    input = input.toLowerCase()
    //end variable definitions

    //encoding/decoding the input
    let messageArray = {}
    for (let i = 0; i < 26; i++){
      const realLetter = realAlphabet[i]
      const codeLetter = codeAlphabet[i]
      if (encode === true){
        messageArray[realLetter] = codeLetter
      }else{
        messageArray[codeLetter] = realLetter
      }
    }
    //end encoding/decoding

    //creating the output string
    let message = ''
    for (let i = 0; i < input.length; i++){
        let letter = input[i]
        if (letter === ' '){
          message += ' '
        } else {
          let arrayLetter = messageArray[letter]
          message += arrayLetter 
        }
    }
    //end output string creation

    return message
  }
  
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

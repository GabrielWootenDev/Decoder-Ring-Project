// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet = "null", encode = true) {
    const trueAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const newAlphabet = alphabet;
    const newAlphabetArray = alphabet.split("");
    if (newAlphabetArray.some(function(value,index, array){return array.lastIndexOf(value) != index }) || newAlphabet.length != 26) return false; /*if there are any duplicates or the replacement alphabet is not exactly 26 characters long then we return false */
    const messageArray = input.toLowerCase().split(""); /* making each letter of the input its own array entry for easier manipulation */
    const message = messageArray.join(""); /* making the new array into a string for the comparison in the map function below, enables ignoring the capital letters in the input */
    if (encode) { /* runs the first part of the code only when encoding a message */
      const newMessage = messageArray.map(function(value, index) {
        let char = message.charAt(index); /* stores the character of the current index we are looking at */
        let trueChar = trueAlphabet.indexOf(char); /* stores the new character replacing the old one in the message */
        (char === " ") ? value = " " : value = newAlphabet.charAt(trueChar); /*returns a space if the character is a space, otherwise replaces the character in the message with the corrosponding one in the new coded alphabet */
        return value;
      })
      return newMessage.join("");
    } else {
      const newMessage = messageArray.map(function(value, index) {
        let char = message.charAt(index); /* stores the character of the current index we are looking at */
        let newChar = newAlphabet.indexOf(char); /* stores the new character replacing the old one in the message */
        (char === " ") ? value = " " : value = trueAlphabet.charAt(newChar); /*returns a space if the character is a space, otherwise replaces the character in the message with the corrosponding one in the real alphabet */
        return value;
      })
      return newMessage.join("");
    }
    
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

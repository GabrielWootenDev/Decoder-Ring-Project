// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift = 0, encode = true) {
    if (shift < -25 || shift > 25 || shift === 0) return false; /* if given an invalid shift number (greater than 25 or less than 25), or no shift number, the code stops here and returns false */
    const messageArray = input.toLowerCase().split(""); /* making each letter of the input its own array entry for easier manipulation */
    const message = messageArray.join(""); /* making the new array into a string for the comparison in the map function below, enables ignoring the capital letters in the input */
   console.log(message);
    let letterChange = messageArray.map(function(value, index, array){
      let newCharCode = message.charCodeAt(index) + shift;
      if(message.charCodeAt(index) < 97 || message.charCodeAt(index) > 122){
        return value /* if the value is not a lower case letter it stays the same, keeping spaces and punctuation untouched */
      }else{
        return String.fromCharCode(newCharCode) /* adds the shift to the current characters code value and returns a new letter based on the resulting new character code */
      }
    });
    return letterChange.join("");

  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

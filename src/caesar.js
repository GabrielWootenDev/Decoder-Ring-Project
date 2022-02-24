// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  /* these first 2 functions help shorten the code of my caesar function */
  function letterWrap(charCode, shift) {
    let newShift = shift;
    let newCode = charCode;
    if ((charCode + shift) > 122) {
      newShift = (shift - (122 - charCode));
      newCode = 96;
    }
    if ((charCode + shift) < 97) {
      newShift = (shift - (97 - charCode));
      newCode = 123;
    }
    return String.fromCharCode(newCode + newShift);
};
  /* these next 2 functions help shorten the code of my caesar function */
  function encodeMessage(messageArray, shift, message) {
    const newMessage = messageArray.map(function(value, index, array) {
      let charCode = message.charCodeAt(index);
      if(charCode < 97 || charCode > 122) {
        return value; /* if the value is not a lower case letter it stays the same, keeping spaces and punctuation untouched */
      }else{
        if ((charCode + shift < 97 || (charCode + shift) > 122)) {
          return letterWrap(charCode, shift);
        } else {
          return String.fromCharCode(charCode + shift); /* adds the shift to the current characters code value and returns a new letter based on the resulting new character code */
      }
      }
    })
  return newMessage;
};
/* the whole decode function is basically the encode function with negative shift values */
  function decodeMessage(messageArray, shift, message) {
     const newMessage = messageArray.map(function(value, index, array) {
      let charCode = message.charCodeAt(index);
      if(charCode < 97 || charCode > 122) {
        return value; /* if the value is not a lower case letter it stays the same, keeping spaces and punctuation untouched */
      }else{
        if ((charCode + -shift < 97 || (charCode + -shift) > 122)) {
          return letterWrap(charCode, -shift);
        } else {
          return String.fromCharCode(charCode - shift); /* reverses the shift to decode the message */
      }
      }
    })
  return newMessage;
};


  function caesar(input, shift = 0, encode = true) {
    if (shift < -25 || shift > 25 || shift === 0) return false; /* if given an invalid shift number (greater than 25 or less than 25), or no shift number, the code stops here and returns false */
    const messageArray = input.toLowerCase().split(""); /* making each letter of the input its own array entry for easier manipulation */
    const message = messageArray.join(""); /* making the new array into a string for the comparison in the map function below, enables ignoring the capital letters in the input */
    let letterChange = "";
    (encode === true) ? letterChange = encodeMessage(messageArray, shift, message) : letterChange = decodeMessage(messageArray, shift, message); /* if we are encoding it runs one function, if not then run the other */

    return letterChange.join("");

  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

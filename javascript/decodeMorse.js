//Solution for "Decode the Morse Code" 6 kyu
//https://www.codewars.com/kata/54b724efac3d5402db00065e

decodeMorse = function(morseCode){
  var message = [];
  var previous;
  var tokens = [];

  for (var i=0; i<morseCode.length; i++) {
    token = morseCode[i];

    if (previous === 3 && token != ' ') {
      //Start of new word
      message.push(" ");
    }
    if (i === morseCode.length - 1) {
      //End of message
      if (token !== ' ') {
        tokens.push(token);
      }
      message.push(MORSE_CODE[tokens.join('')]);
      return message.join('');
    }
    if (token !== ' ') {
      tokens.push(token);
      previous = 0;
    }
    if (token === ' ') { 
      if (previous === 0){
        //End of letter
        message.push(MORSE_CODE[tokens.join('')]);
        tokens = [];
      }
      previous++;
    }     
  }
  return "";
}

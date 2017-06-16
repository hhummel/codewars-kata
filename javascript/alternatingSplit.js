//Solution for "Simple Encryption #1 - Alternating Split" 6 kyu
//https://www.codewars.com/kata/57814d79a56c88e3e0000786

function encryptOnce(text) {
  var front = '';
  var back = '';
  for (var i=0; i<text.length; i++) {
    if (i % 2 == 0) {
      back += text[i];
    } else {
      front += text[i];
    }
  }
  return front + back;
}

function decryptOnce(encryptedText) {
  var len = encryptedText.length;
  var edge = Math.floor(len/2);
  var front = encryptedText.slice(0, edge); 
  var back = encryptedText.slice(edge, len); 
  var frontIndex = 0;
  var backIndex = 0;
  text = '';
  for (var i = 0; i<len; i++){
    if (i % 2 == 0){
      text += back[backIndex++];
    } else {
      text += front[frontIndex++];
    }
  }
  return text;
}

function encrypt(text, n) {
  if (n <= 0 || text === '' || text === null || text === undefined) {
    return text;
  }
  var en = encryptOnce(text);
  var i = 1;
  while (i++ < n) {
    en = encryptOnce(en);
  }
  return en;
}

function decrypt(text, n) {
  if (n <= 0 || text === '' || text === null || text === undefined) {
    return text;
  }
  var en = decryptOnce(text);
  var i = 1;
  while (i++ < n) {
    en = decryptOnce(en);
  }
  return en;
}


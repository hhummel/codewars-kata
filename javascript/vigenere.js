//Solution for "Vigenère Cipher Helper" 4 kyu
//https://www.codewars.com/kata/52d1bd3694d26f8d6e0000d3

function VigenèreCipher(key, abc) {
  this.key = key;
  this.alphabet = abc.split('');

  //Generic transformation function for encode and decode.
  this._coder = function (value, str){
    //Repeat the key so it's longer than the message.  Zip gets rid of the excess.
    const scale = Math.floor(str.length/this.key.length) + 1;
    const keyRepeat = this.key.repeat(scale).split('');
    //Zip together message and key, apply vignere shift and recreate the string.
    return shifted = zip(str.split(''), keyRepeat).map(a => this._shift(value, a[0], a[1])).join('');
  }

  //Do the Vignere shift, value = 1 for encode shifts forward, value = -1 for decode shifts back
  this._shift = function(value, i, j) {
    if (this.alphabet.includes(i)){
      const index = (this.alphabet.indexOf(i) + value*this.alphabet.indexOf(j) + this.alphabet.length) % this.alphabet.length;
      return this.alphabet[index];
    }
    return i;
  }

  //Once the utility functions are done, it's simple.
  this.encode = function(str){return this._coder(1, str);} 
  this.decode = function(str){return this._coder(-1, str);}
}

//There's no zip in ES6 like in Python or Scala, so make one.
function zip(a, b) {
  return a.map((n, index) => [n, b[index]]).filter(a => a[0] !== undefined && a[1] !== undefined);
} 

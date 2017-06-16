//Solution for "Soundex" 5 kyu
//https://www.codewars.com/kata/587319230e9cf305bb000098

var soundex = function(names) {
  console.log(names);
  let array = names.split('');
  let filtered = filterExcluded(array);
  return parse(filtered);
}

//Character is first letter in word
function isFirst(i, array){
  if((i === 0) && (array.length > 0)) return true;
  if((array[i-1] === ' ') && (array[i] !== ' ')) return true;
  return false;
} 

//At the end of a word
function isEnd(i, array){
  if ((array.length === i + 1) || (i > 0 && array[i]==' ' && array[i-1] !== 0)) return true;
  return false;
}  

//Adjacent characters have different codes
function isDifferent(i, array, word){
  if ((i > 0) && (sound(array[i-1]) !== sound(array[i]))) return true;
  return false;
}

//Pad or truncate word
function pad(word){
  let len = 4 - word.length;
  if (len <= 0) return word.slice(0,4);
  return word.concat(new Array(len).fill(0)); 
}

//Filter out excluded letters
function filterExcluded(array){
  let excluded = ['h', 'w'];
  let new_array = array.slice(0,1);
  for(let i = 1; i < array.length; i++){
    let l = array[i].toLowerCase();
    if (isFirst(i, array) || !(excluded.includes(l))) new_array.push(array[i]);
  }
  return new_array;
}
    
//Soundex coding
function sound(letter){
  if (letter === ' ') return ' ';
  const l = letter.toLowerCase();
  if (['a', 'e', 'i', 'o', 'u', 'y', 'h', 'w'].includes(l)) return '';
  if (['b', 'f', 'p', 'v'].includes(l)) return 1;
  if (['c', 'g', 'j', 'k', 'q', 's', 'x', 'z'].includes(l)) return 2;
  if (['d', 't'].includes(l)) return 3;
  if (l === 'l') return 4;
  if (['m', 'n'].includes(l)) return 5;
  if (l === 'r') return 6;
  return 0;
}

//Parse the filtered array
function parse(array){
  let result = [];
  let word = [];
  let first;
  const len = array.length;
  for (let i = 0; i < len; i++){
    let sound_ = sound(array[i]);
    if (isFirst(i, array)) word.push(array[i].toUpperCase());
    if (sound_ && sound_ !== ' ' && isDifferent(i, array, word) && !(isFirst(i, array))) word.push(sound_);
    if (isEnd(i, array)) {
      Array.prototype.push.apply(result, pad(word));
      word = [];
    }
    if (sound_ === ' ') result.push(sound_);
  }
  return result.join(''); 
}

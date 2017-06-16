//Solution for "Bananas" kyu 5
//https://www.codewars.com/kata/5917fbed9f4056205a00001e

const bananas = function(s) {
  const master = [];
  const target = "banana";
  const go = function(acc, ptrString, ptrTarget) {
    if (ptrTarget === target.length) master.push(acc);
    let arr = indices(target[ptrTarget], ptrString, s);
    arr.map(i => {
      let newAcc = acc.slice();
      newAcc.push(i);
      return go(newAcc, i, ptrTarget + 1);
    });
  }
  go([], 0, 0);
  return master.map(a => expand(a, s));
}
   
//return an array of indices of char in string starting from index start
const indices = function(char, start, string) {
  let result = [];
  for (let i=start; i<string.length; i++){
    if (char === string[i]) result.push(i);
  }
  return result; 
}

//Convert from array of indices to cross-outs
const expand = function(arr, string) {
  const a = arr[0] === 0 ? [] : new Array(arr[0]).fill('-');
  a.push(arr[0]);
  for ( let i = 1; i < arr.length; i++) {
    let delta = arr[i] - arr[i-1];
    if ( delta > 1) {
      let b = new Array(delta-1).fill('-');
      a.push.apply(a, b);
    }
    a.push(arr[i]);
  } 
  for (let i = a.length; i < string.length; i++) {a.push('-')};
  return a.map(v => v === '-' ? v : string[v]).join('');
}

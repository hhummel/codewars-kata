//Solution to "Sum of Pairs" 5kyu
//https://www.codewars.com/kata/54d81488b981293527000c8f

var sum_pairs = function(ints, s){
  let cache = {};
  for (let i=0; i<ints.length; i++){
    if (!(ints[i] in cache) && !isNaN(ints[i]) && ints[i] === parseInt(ints[i], 10)) cache[ints[i]] = [i];
    if ((s-ints[i]) in cache && cache[s-ints[i]][0] !== i) return [s-ints[i], ints[i]];
  }
  return null;
}

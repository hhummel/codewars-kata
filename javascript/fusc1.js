//Solution to "The fusc function -- Part 1" 7 kyu
//http://www.codewars.com/kata/the-fusc-function-part-1/train/javascript

function fusc(n){
  if( n === 0 || n === 1) return n;
  if( n % 2 === 0) return fusc(n/2);
  let lower = Math.floor(n / 2);
  return fusc(lower) + fusc(lower + 1);
}

//Solution to "Gauß needs help! (Sums of a lot of numbers)." 7 kyu
//https://www.codewars.com/kata/54df2067ecaa226eca000229

function f(n){
  if (isNaN(n) || !Number.isInteger(n) || n < 1) return false; return n * (n + 1) / 2; 
};

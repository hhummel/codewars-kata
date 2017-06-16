//Solution for "Highest and Lowest" 7 kyu
//https://www.codewars.com/kata/554b4ac871d6813a03000035

function highAndLow(numbers){
  var sorted = numbers.split(' ').sort(function(a, b){return a-b})
  return [sorted[sorted.length - 1], sorted[0]].join(' ');
}

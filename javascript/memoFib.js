//Solution for "Memoized Fibonacci" 5 kyu
//https://www.codewars.com/kata/529adbf7533b761c560004e5

const cache = {'0': 0, '1': 1};

var fibonacci = function(n) {
  if (!(n in cache)) cache[n] = fibonacci(n-1) + fibonacci(n-2);
  return cache[n];
}

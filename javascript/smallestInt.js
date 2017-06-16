//Solution to "Find the smallest integer in the array" 7 kyu
//https://www.codewars.com/kata/55a2d7ebe362935a210000b2

class SmallestIntegerFinder {
  findSmallestInt(args) {
    var sorted = args.slice().sort(function(a,b){return a-b;});
    return sorted[0];
  }
}

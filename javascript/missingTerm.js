//Solution to "Find the missing term in an Arithmetic Progression" 5 kyu
//https://www.codewars.com/kata/52de553ebb55d1fca3000371

var findMissing = function (list) { 
  var intervals = list.length; 
  var step = (list[intervals-1] - list[0]) / intervals;
  var want = list[0];
  for (var i=0; i<list.length; i++) {
    if (list[i] !== want) return want;
    want += step;
  }
  return 0;
}

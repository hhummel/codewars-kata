//Solution for "#9 Matrices: Adding diagonal products" kyu 5
//https://www.codewars.com/kata/590bb735517888ae6b000012

function sumProdDiags(matrix) {
  const range = (lower, upper) => Array.from({length: upper - lower}, (value, key) => lower + key);
  const len = matrix.length;
  const v = range(-len, len+1);
  const sums = (a, s) => v.map(b => matrix.map((x, i) => x[a+s*(i+b)]).filter(x => x !== undefined).reduce((x,y) => x*y, 1)).reduce((x,y) => x+y, 0);
  return sums(0, 1) - sums(len, -1);
}

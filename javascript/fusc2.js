//Solution to "The fusc function -- Part 2" 4 kyu
//http://www.codewars.com/kata/the-fusc-function-part-2/train/javascript

const map = new Map([[0, 0], [1, 1]]);

function fusc(n){
  if (!map.has(n)){
    if( n % 2 === 0) map.set(n, fusc(n/2));
    else {
      let lower = Math.floor(n / 2);
      map.set(n, fusc(lower) + fusc(lower + 1));
    }
  }
  return map.get(n);
}

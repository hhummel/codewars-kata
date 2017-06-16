//Solution to "Two Joggers"
//https://www.codewars.com/kata/5274d9d3ebc3030802000165

var nbrOfLaps = function (x, y) {
  //Euclid for greatest common factor
  function euclid (a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  let gcf = euclid(x, y);
  return [y/gcf, x/gcf];
}

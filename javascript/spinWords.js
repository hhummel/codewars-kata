//Solution to "Stop gninnipS My sdroW!" 6 kyu
//https://www.codewars.com/kata/5264d2b162488dc400000001

function spinWords(str){
  var list = str.split(" ");
  var spun = list.map(function(e){return e.length < 5 ? e : e.split('').reverse().join('')});
  return spun.join(' ');
}

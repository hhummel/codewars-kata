//Solution to "Create Phone Number" 6 kyu
//https://www.codewars.com/kata/525f50e3b73515a6db000b83

function createPhoneNumber(numbers){
  var area = stringify(numbers.slice(0,3));
  var three = stringify(numbers.slice(3,6));
  var four = stringify(numbers.slice(6));
  return "(" + area + ") " + three + "-" + four;
}

function stringify(list){
  return list.map(function(e){return e.toString();}).join('');
}

//Solution for "Persistent Bugger." 6 kyu
//https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

function persistence(num) {
  function getDigits(num) {
    var str = num.toString();
    var arr = [];
    for (var i=0; i<str.length; i++){
      arr.push(str[i]);
    }
    return arr;
  };
  
  function getProduct(arr) {
    if (arr.length === 0){
      return 0;
    }
    product = 1;
    for (var i=0; i<arr.length; i++) {
      product *= arr[i];
    }
    return product;
  };
 
  var index = 0;
  var product = num;
  while (product > 9) {
    product = getProduct(getDigits(product));
    index++;
  }
  return index;
}


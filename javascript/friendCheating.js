//Solution for "Is my friend cheating?" 5 kyu
//https://www.codewars.com/kata/5547cc7dcad755e480000004

function removeNb (n) {
  var total = n * (n + 1) / 2;
  var result = [];
  for (var i = 1; i <= n; i++) {
    if ((total - i) % (i + 1) == 0){
      var j = (total - i) / (i + 1);
      if (j <= n) result.push([i,j])
    }
  }
  return result; 
}

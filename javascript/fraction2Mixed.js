//Solution for "Simple fraction to mixed number converter" 5 kyu
//https://www.codewars.com/kata/556b85b433fb5e899200003f


function mixedFraction(s){
  //Euclid's algorithm for gcf
  function euclid(a, b) {
    while (b !== 0){
      var temp = b;
      b = a % b;
      a = temp;
    }
      return a;
  }

  var re =/^(-{0,1})([0-9]+)(\/{0,1})(-{0,1})([0-9]*)$/;
  var m = s.match(re);

  //Match failed or there's a slash but no denominator
  if (!m || (m[3] && !m[5])) {return '';}

  var sign = (m[1] || m[4]) && !(m[1] && m[4]) ? "-": "";
  var num = Number(m[2]);
  var slash = m[3];
  var denom = Number(m[5]);

  //Simple no slash case
  if (!slash) {return sign + num.toString();}

  //Divide by zero test
  if (denom === 0) {throw "ZeroDivisionError";}
  if (num === 0) {return '0';}

  //Leading term
  var t = Math.floor(num/denom);
  var lead = t ? t.toString() : "";

  //Simplify fraction
  var remain = num % denom;
  if (remain === 0) {return sign + lead;} 
  var gcf = euclid(remain, denom);
  var top = (remain / gcf).toString() ;
  var bottom = (denom / gcf).toString();
  var fraction = top + "/" + bottom;

  //Combine output
  if (lead !== "") {return sign + lead + " " + fraction;}
  return sign + fraction;
}

//Solution for "Regex Password Validation" 5 kyu
//https://www.codewars.com/kata/52e1476c8147a7547a000811

function validate(password) {
  let reg1 = /\w{6,}/.test(password);
  let reg2 = /[a-z]/.test(password);
  let reg3 = /[A-Z]/.test(password);
  let reg4 = /[0-9]/.test(password);
  let reg5 = /\W/.test(password);
  return reg1 && reg2 && reg3 && reg4 && !reg5;
  //return /(put answer here)/.test(password);
}

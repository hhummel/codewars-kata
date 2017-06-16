//Solution to "Calculating with Functions" 5 kyu
//https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

function number(digit){
  const func = function() {
    if (arguments.length === 0) return digit;
    return eval(parseInt(digit) + arguments[0]['symbol'] + parseInt(arguments[0]['value']));
  }
  return func;
}

function op(symbol){
  const func = function() {
    return {'symbol': symbol, 'value': arguments[0]};
  }
  return func;
}

const zero = number('0');
const one = number('1');
const two = number('2');
const three = number('3');
const four = number('4');
const five = number('5');
const six = number('6');
const seven = number('7');
const eight = number('8');
const nine = number('9');

const plus = op('+');
const minus = op('-');
const times = op('*');
const dividedBy = op('/');

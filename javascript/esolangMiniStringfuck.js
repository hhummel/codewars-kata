//Solution to Esolang Interpreters #1 - Introduction to Esolangs and My First Interpreter (MiniStringFuck) 6 kyu
//https://www.codewars.com/kata/586dd26a69b6fd46dd0000c0

function myFirstInterpreter(code) {
  var message = [];
  var counter = 0;
  for (var i=0; i<code.length; i++){
    if (code[i] === '+'){
      counter++;
      counter %= 256;
    } else if (code[i] === '.'){
      message.push(String.fromCharCode(counter));
    }
  }
  return message.join('');
}

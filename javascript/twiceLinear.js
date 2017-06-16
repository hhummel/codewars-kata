//Solution to "Twice Linear" 4 kyu
//https://www.codewars.com/kata/5672682212c8ecf83e000050

function dblLinear(n) {
  const twos = [3];
  const threes = [4];
  let count = 1;
  let nextValue = 1;
  let previousValue = 1;
  while (count <= n) {
    nextValue = twos[0] < threes[0] ? twos.shift() : threes.shift();
    twos.push(2*nextValue+1);
    threes.push(3*nextValue+1);
    if (nextValue !== previousValue) count++;
    previousValue = nextValue;
  }  
  return nextValue;
}

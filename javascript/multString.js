//Solution for "Multiplying numbers as strings" 3 kyu
//https://www.codewars.com/kata/55911ef14065454c75000062

function multiply(a, b){
  const [arr_a, arr_b] = [a.split('').reverse(), b.split('').reverse()];
  const [arr0, arr1] = arr_a.length >= arr_b.length ? [arr_a, arr_b] : [arr_b, arr_a];
  if (arr0.length === arr1.length) arr0.push(0);
  const subtotal = [];
  const places = [];
  for (let i=0; i<arr1.length; i++){
    let place = places.slice();
    places.push(0);
    let carry = 0;
    for (let j=0; j<arr0.length; j++){
      let [newCarry, remainder] = mult(arr0[j], arr1[i], carry);
      place.push(remainder);
      carry = newCarry;
    }
    place.push(carry);
    subtotal.push(place);
  }
  let raw = subtotal.reduce((acc, row) => addRows(acc, row), [0]).reverse();
  while (raw[0] === 0 && raw.length>1) raw.shift();
  return raw.map(x => x.toString()).join('')
}

function mult(num1, num2, prev_carry){
  const prod = parseInt(num1)*parseInt(num2) + prev_carry;
  const carry = Math.floor(prod/10);
  const remainder = prod % 10;
  return [carry, remainder];
}

function add(num1, num2, prev_carry){
  const sum = parseInt(num1)+parseInt(num2)+prev_carry;
  const carry = Math.floor(sum/10);
  const remainder = sum % 10;
  return [carry, remainder];
}

function addRows(arr_a, arr_b){
  const [arr0, arr1] = arr_a.length >= arr_b.length ? [arr_a, arr_b] : [arr_b, arr_a];
  if (arr0.length === arr1.length) arr0.push(0);
  let place = [];
  let carry = 0;
  for (let i=0; i<arr0.length; i++){
    let [newCarry, remainder] = add(arr0[i], arr1[i]===undefined ? 0 : arr1[i], carry);
    place.push(remainder);
    carry = newCarry;
  }
  place.push(carry);
  return place;
}

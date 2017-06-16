//Solution for "String tree-ification" 5 kyu
//https://www.codewars.com/kata/582b87012d44a4b260001f40

function word2Tree(str) {
  let part = partition(str);
  return {"value": str, "left": go(part[0]), "right": go(part[1]), "type": "root"};  
}

function go(value) {
  if (value.length === 1) return {"value": value, "type": "leaf"};
  let part = partition(value);
  return {"value": value, "left": go(part[0]), "right": go(part[1]), "type": "node"};
}

function partition(value){
  if (value.length < 2) return [];
  let index = Math.floor(value.length/2);
  return [value.slice(0, index), value.slice(index)];
}

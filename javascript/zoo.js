//Solution for "The Hunger Games - Zoo Disaster!" 5 kyu
//https://www.codewars.com/kata/5902bc7aba39542b4a00003d

var whoEatsWho = function(zoo) {
  let arr = zoo.split(',');
  let result = [zoo];
  while (true) {
    let newArr = cycle(arr);
    if (newArr === '') {
      result.push(arr.join(','));
      break;
    }
    result.push(newArr[0]);
    if (newArr.length === 1) break;
    arr = newArr[1].slice();
  }
  return result;
}

const menu = {
  "antelope": ["grass"],
  "big-fish": ["little-fish"],
  "bug": ["leaves"],
  "bear": ["big-fish", "bug","chicken", "cow", "leaves", "sheep"],
  "chicken": ["bug"],
  "cow": ["grass"],
  "fox": ["chicken", "sheep"],
  "giraffe": ["leaves"],
  "lion": ["antelope", "cow"],
  "panda": ["leaves"],
  "sheep": ["grass"]
}

function cycle(zoo) {
  const len = zoo.length; 
  if (len === 1) return zoo;
  let newZoo = zoo.slice();
  for ( let i = 0; i < len; i++) {
    if (i > 0 && menu[zoo[i]] && menu[zoo[i]].includes(zoo[i-1])) {
      newZoo.splice(i-1, 1);
      return [zoo[i] + " eats " + zoo[i-1], newZoo];     
    }
    if (menu[zoo[i]] && menu[zoo[i]].includes(zoo[i+1])){ 
      newZoo.splice(i+1, 1);
      return [zoo[i] + " eats " + zoo[i+1], newZoo];
    }
  }
  return '';
}

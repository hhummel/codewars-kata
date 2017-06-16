//Solution for "Josephus Permutation" 5 kyu
//https://www.codewars.com/kata/5550d638a99ddb113e0000a2

function josephus(items,k){
  function go(acc, items, ptr){
    if (items.length === 0) return acc;
    const nextItem = (ptr - 1 + k)%(items.length);
    const newItems = items.slice();
    const newArr = newItems.splice(nextItem, 1);
    const newAcc = acc.concat(newArr);
    return go(newAcc, newItems, nextItem) 
  }
  return go([], items, 0);
}

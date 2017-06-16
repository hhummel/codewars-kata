//Solution for "Represent array of numbers as ranges" kyu 5
//https://www.codewars.com/kata/58ab002d68ee07c57b000118

// Should return a string representing the ranges
function toRange(arr) {
  if (arr === []) return '';
  const dedupe = a => a.filter((v, i) => i === 0 || v !== a[i-1]);
  const sorted = arr.sort((a, b) => a-b);
  const deduped = dedupe(sorted.filter((v, i) => i === 0 || v !== sorted[i-1]));
  const arranged = deduped.map((v, i) => (i === 0 || i === deduped.length-1 || v !== deduped[i-1] + 1 || v !== deduped[i+1] - 1) ? v : "_");
  let cleaned = dedupe(arranged);
  for (let i=1; i<cleaned.length; i++){
    if (cleaned[i-1] + 1 === cleaned[i]) {
      cleaned[i-1] = cleaned[i-1] + '_' + cleaned[i];
      cleaned[i] = '';
    } 
  }
  return cleaned.filter(x => x !== '').join().replace(/,_,/g, '_');
}

// Should return an array
function toArray(str) {
  if (str === '') return [];
  return arr = str.split(',').map(x => expand(x)).reduce((a, c) => a.concat(c), []);
}

function expand(str) {
  const range = (lower, upper) => Array.from({length: upper - lower}, (value, key) => lower + key);
  const regex = /(-?\d+)_(-?\d+)/;
  const match_set = str.match(regex);
  if (match_set) return range(parseInt(match_set[1]), parseInt(match_set[2]) + 1);
  return [parseInt(str)];
}

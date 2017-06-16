//Solution for "Length of missing array" 6 kyu
//https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611

function getLengthOfMissingArray(arrayOfArrays) {
  //Check for empty array or too short
  if (arrayOfArrays && typeof arrayOfArrays !== 'undefined' && arrayOfArrays.length > 1) {
    //Check for array containing null or []
    for (var i=0; i<arrayOfArrays.length; i++) if (!arrayOfArrays[i] || arrayOfArrays[i].length === 0) return 0;
    //Make an array of lengths and sort it.
    var sorted = arrayOfArrays.map(function(e){return e.length;}).sort(function(a, b){return a-b;});
    //Look for mismatch between expected and observed length.
    for(var i=0; i<sorted.length; i++) if (sorted[i] !== sorted[0]+i) return sorted[0]+i;
  }
  return 0;
}

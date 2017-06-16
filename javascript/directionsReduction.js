//Solution for "Directions Reduction" 5 kyu
//https://www.codewars.com/users/hhummel/completed_solutions

function dirReduc(arr){
  var opposite = {"NORTH": "SOUTH", "SOUTH": "NORTH", "EAST": "WEST", "WEST": "EAST"};
  var result = arr.slice();
  var changes = true;
  while(changes === true && result.length > 1){
    changes = false;
    for (var i=1; i<result.length; i++) {
      if (result[i-1] === opposite[result[i]]) {
        var front = result.slice(0, i-1);
        var back = result.slice(i+1);
        result = front.concat(back);
        changes = true;
        break;
      }
    }
  }
  return result;
}

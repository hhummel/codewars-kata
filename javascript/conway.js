//Solution to "Conway's Game of Life" 5 kyu
//https://www.codewars.com/kata/525fbff0594da0665c0003a3

function nextGen(cells){
  //Check status of cell at x, y
  function alive(x, y) {
    //Get limits.  Cells beyond border are 0 so don't affect total
    const xMin = x > 0 ? x - 1 : 0;
    const yMin = y > 0 ? y - 1 : 0;
    const xMax = x < cells.length - 1 ? x + 1 : cells.length - 1;
    const yMax = y < cells[0].length - 1 ? y + 1 : cells[0].length - 1; 
    const state = cells[x][y];
    let total = - state;
    for (let i = xMin; i <= xMax; i++){
      for (let j = yMin; j <= yMax; j++){
        total += cells[i][j];
      }
    } 
    if (total < 2 && state === 1) {return 0;}
    if (total >= 2 && total <= 3 && state === 1) {return 1;}
    if (total > 3 && state === 1) {return 0;}
    if (total === 3 && state === 0) {return 1;}
    return 0;
  }
  //Find new state for each cell
  const newCells = [];
  for (let i = 0; i < cells.length; i++) {
    let row = [];
    for (let j = 0; j < cells[0].length; j++) {
      row.push(alive(i, j, cells));
    }
    newCells.push(row);
  } 
  return newCells;
}

//Solution to "Conway's Game of Life - Unlimited Edition" 3 kyu
https://www.codewars.com/kata/conways-game-of-life-unlimited-edition/train/javascript

function getGeneration(cells, generations){
  if (generations === 0) return cells;
  let counter = 0;
  let cellPtr = cells;
  while (true){
    counter += 1;
    console.log("cells: ", cellPtr);

    //Augment the cells
    let aug = cellPtr.map(x => [0,...x,0]);
    aug.unshift(new Array(aug[0].length).fill(0));
    aug.push(new Array(aug[0].length).fill(0));

    //Run the generation
    let gen = nextGen(aug);

    //Trim the cells
    while (gen[0].reduce((x, acc) => x + acc, 0) === 0) gen.shift();
    while (gen[gen.length - 1].reduce((x, acc) => x + acc, 0) === 0) gen.pop();
    while (gen.map(x => x[0]).reduce((x,acc) => x + acc, 0) === 0) gen.forEach((x, i, a) => a[i] = x.slice(1)); 
    while (gen.map(x => x[x.length-1]).reduce((x,acc) => x + acc, 0) === 0) gen.forEach((x, i, a) => a[i] = x.slice(0, x.length - 1));    

    if(counter >= generations) return gen;
    cellPtr = gen;
  }
}

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

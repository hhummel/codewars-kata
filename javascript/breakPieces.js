//Solution for "Break the pieces" 2 kyu
//https://www.codewars.com/kata/527fde8d24b9309d9b000c4e

function breakPieces (shape){
  //Find all vertices
  const arr = getVertices(shape);
  //Starting with each vertex, find an associated piece
  const dupes = arr.map((n, i) => getShape(arr, i));
  //Eliminate duplicates
  const deduped = dedupe(dupes);
  //If there's only one unique shape, then it's the same as the original shape
  if (deduped.length ===1) return [shape];
  //Get rid of the unnecessary vertices --+-- to -----
  const scrubbed = scrub(deduped);
  //I find shapes moving clockwise. If I create a shape going the wrong way, I get the perimeter instead.
  const perimeter = makeStrings(getShape(arr, 0, false)).join('\n');
  //Convert the array of vertices to strings, and get rid of the perimeter shapes.  It's a hack, okay?
  return scrubbed.map(x => makeStrings(x)).map(x => x.join('\n')).filter(x => x !== perimeter);
}

function getVertices(str){
  //Find each "+" vertex and associated edges
  let shape = str.split('\n');
  let arr = [];
  for (let i=0; i<shape.length; i++) {
    for (let j=0; j<shape[i].length; j++) {
      if (shape[i][j] === '+') {
        let edges = [];
        if (shape[i-1] !== undefined && shape[i-1][j] !== undefined && shape[i-1][j] === "|") edges.push("up");
        if (shape[i]   !== undefined && shape[i][j+1] !== undefined && shape[i][j+1] === "-") edges.push("right");
        if (shape[i+1] !== undefined && shape[i+1][j] !== undefined && shape[i+1][j] === "|") edges.push("down");
        if (shape[i]   !== undefined && shape[i][j-1] !== undefined && shape[i][j-1] === "-") edges.push("left");
        arr.push({"x": i, "y": j, "edges": edges});
      }
    }
  }
  return arr;
}

function getShape(arr, index, clockwise=true){
  //Find shape associated with the innermost clockwise path for node "index" of arr if clockwise === true
  //Find the shape of the perimeter if clockwise === false.  Use the first node to find the perimeter
  let node = clockwise === true ? arr[index] : arr[0];
  let [x_start, y_start] = [node.x, node.y];
  let shape = [[node.x, node.y]];
  let direction = clockwise === true ? start(node.edges) : perimeter(node.edges);
  let origin = true;
  //Find remaining nodes in shape
  while (origin === true || x_start !== node.x || y_start !== node.y){
    origin = false;
    node = getNode(direction, node.x, node.y, arr);
    shape.push([node.x, node.y]);
    direction = step(direction, node.edges);
  }
  shape.pop();
  return shape;
}

function start(edges){
  //Get start direction for node with "edges" for clockwise
  if (edges.length === 2){
    if (edges.includes("right") && edges.includes("up")) return "up";
    if (edges.includes("right") && edges.includes("down")) return "right";
    if (edges.includes("left") && edges.includes("down")) return "down";
    if (edges.includes("left") && edges.includes("up")) return "left";
  }
  if (edges.length === 3){
    if (!edges.includes("right")) return "left";
    if (!edges.includes("down")) return "up";
    if (!edges.includes("left")) return "right";
    if (!edges.includes("up")) return "down";
  }
  return "left";
}

function perimeter(edges){
  //First step to find perimeter going counter clockwise from first vertex 
  if (edges.includes("right") && edges.includes("up")) return "right";
  if (edges.includes("right") && edges.includes("down")) return "down";
  if (edges.includes("left") && edges.includes("down")) return "left";
  if (edges.includes("left") && edges.includes("up")) return "up";
}

function step(direction, edges){
  //Find next direction to go given current "direction" and "edges" associated with the next node
  const next = {
    "up": ["right", "up", "left"], 
    "right": ["down", "right", "up"], 
    "down": ["left", "down", "right"], 
    "left": ["up", "left", "down"]
  };
  let arr = next[direction];
  for (let i=0; i<arr.length; i++){
    if (edges.includes(arr[i])) return arr[i];
  }
}

function getNode(direction, x, y, arr){
  //Find the nearest node on the clockwise path given current "direction" and position "x" and "y"
  if (direction == "right") return arr.filter(obj => obj.x === x && obj.y > y).sort((a,b) => a.y - b.y)[0];
  if (direction == "down")  return arr.filter(obj => obj.y === y && obj.x > x).sort((a,b) => a.x - b.x)[0];
  if (direction == "left")  return arr.filter(obj => obj.x === x && obj.y < y).sort((a,b) => b.y - a.y)[0];
  if (direction == "up")    return arr.filter(obj => obj.y === y && obj.x < x).sort((a,b) => b.x - a.x)[0];
}

function cycle(shape1, shape2) {
  //Compare shapes and determine if they are equivalent
  let  shape = shape2.slice();
  let len = shape.length;
  if (len !== shape1.length) return false;
  for (let i=0; i<len; i++){
    let test = true;
    for (let j=0; j<len; j++) test = test && (shape[j][0] === shape1[j][0] && shape[j][1] === shape1[j][1]);
    if (test === true) return true;
    let first = shape.shift();
    shape.push(first);
  }
  return false;
}

function dedupe(shapes){
  //Eliminate duplicate shapes
  let deduped = [shapes[0]];
  for (let i=1; i<shapes.length; i++){
    let duplicate = false;
    for (let j=0; j<i; j++) duplicate = duplicate || cycle(shapes[i], shapes[j]) || cycle(shapes[i], shapes[j].reverse());
    if (duplicate === false) deduped.push(shapes[i]);
  }
  return deduped;
}

function cleanLines(shape){
  //Remove at most one extraneous vertex
  let newShape = shape.slice();
  let [first, last] = [newShape[0], newShape[shape.length-1]];
  newShape.push(first);
  newShape.unshift(last);

  for (let i=1; i<shape.length; i++){
    let x_line = newShape[i-1][0] === newShape[i][0] && newShape[i][0] === newShape[i+1][0];
    let y_line = newShape[i-1][1] === newShape[i][1] && newShape[i][1] === newShape[i+1][1];
    if (x_line || y_line) {
      newShape.splice(i, 1);
      newShape.shift();
      newShape.pop();
      return newShape;
    }
  }
  return shape;
}

function scrub(shapes){
  //Remove all extraneous vertices ---+--- to -------
  let newShapes = shapes.slice();
  for (let i=0; i<newShapes.length; i++){
    let shape = newShapes[i];
    while(shape !== cleanLines(shape)) shape = cleanLines(shape);
    newShapes[i] = shape;
  }
  return newShapes;
}

function makeStrings(shape){
  //Convert array of vertices to string form.  Get rid of trailing white space using trimRight
  let [xMax, yMax] = [shape.reduce((a,x) => Math.max(a, x[0]), 0), shape.reduce((a,x) => Math.max(a, x[1]), 0)]; 
  let xMin = shape.reduce((a,x) => Math.min(a, x[0]), Number.MAX_SAFE_INTEGER);
  let yMin = shape.reduce((a,x) => Math.min(a, x[1]), Number.MAX_SAFE_INTEGER); 
  let row = Array.from(new Array(yMax-yMin+1), () => ' ');
  let picture = Array.from(new Array(xMax-xMin+1), () => row.slice());
  for (let i=0; i<shape.length; i++) picture[shape[i][0]-xMin][shape[i][1]-yMin] = "+";
  let s = shape.slice();
  s.push(shape[0]);
  for (let i=0; i<shape.length; i++){
    if (s[i][0] === s[i+1][0]){
       let [start, end] = [Math.min(s[i][1], s[i+1][1]), Math.max(s[i][1], s[i+1][1])];
       for (let j=start+1; j<end; j++) picture[s[i][0]-xMin][j-yMin] = '-';
    } else {
       let [start, end] = [Math.min(s[i][0], s[i+1][0]), Math.max(s[i][0], s[i+1][0])];
       for (let j=start+1; j<end; j++) picture[j-xMin][s[i][1]-yMin] = '|';
    }
  }
  return picture.map(x => x.join('')).map(x => x.trimRight());
}

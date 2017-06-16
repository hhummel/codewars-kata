//Solution for "Monads: The list monad" 4 kyu
//https://www.codewars.com/kata/53db4acb1f1a7dd68700040a

function canReach(from, to, movements) {
  const moves = knightEngine(from, movements);
  for (let i=0; i<moves.length; i++) {if (moves[i][0] === to[0] && moves[i][1] === to[1]) return true;}
  return false; 
}

function moveKnight(from) {
  const moves = [[2,1], [1,2], [-2,1], [1,-2], [2,-1], [-1,2], [-2,-1], [-1,-2]];
  return moves.map(m => [m[0]+from[0], m[1]+from[1]]).filter(a => a[0]>0 && a[1]>0 && a[0]<9 && a[1]<9);
}

function moveKnightRandom(from) {
  let next_moves = moveKnight(from);
  let index = Math.floor(Math.random()*next_moves.length);
  return next_moves[index];
}

function compose() {
  const args = Array.from(arguments);
  const func0 = args.pop();
  if (args.length === 0) return func0;
  const func1 = args.pop();
  args.push(x => func1(func0(x)));
  return compose(...args);
}

function moveKnightFromArray(fromPositions) {
  return fromPositions.reduce(function(ac, from) {
    var to = moveKnight(from);
    return ac.concat(to);
  }, []);
}

function bind() {
  const func0 = arguments[0];
  function func(x){
    const mapped = x.map(_ => func0(_));
    return mapped.reduce((acc, b) => acc.concat(b), []);
  }
  return func;
}

function unit() {
  return [arguments[0]];
}

function knightEngine(from, movements) {
  const args = Array(movements).fill(bind(moveKnight)).concat(unit);
  const func = compose(...args);
  return func(from);
}

//Solution for "Get Middle Character" 7 kyu
//https://www.codewars.com/kata/56747fd5cb988479af000028

function getMiddle(s)
{
  var len = s.length;
  if (len <= 2) {
      return s;
  }
  var half = Math.floor(len/2);
  var odd = len % 2;
  return s.slice(half-1+odd, half+1);
}

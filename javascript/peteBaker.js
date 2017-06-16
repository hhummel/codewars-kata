//Solution for "Pete the Baker" 5 kyu
//https://www.codewars.com/kata/525c65e51bf619685c000059

"use strict;"

function cakes(recipe, available) {
  let myMin = Number.MAX_SAFE_INTEGER;
  for (i in recipe){
    if (!(i in available) || available[i] <= 0) return 0;
    let ratio = Math.floor(available[i]/recipe[i]);
    myMin = ratio < myMin ? ratio : myMin;
  }
  return myMin; 
}

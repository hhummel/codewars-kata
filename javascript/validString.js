//Solution for "RegExp for validation string" kyu 5
//https://www.codewars.com/kata/58f1419b03388b4d45000081

let reg = new RegExp (['^name:[A-Za-z]+,age:[0-9]+,skill:[A-Za-z]+$',
                       '^skill:[A-Za-z]+,age:[0-9]+,name:[A-Za-z]+$',
                       '^age:[0-9]+,name:[A-Za-z]+,skill:[A-Za-z]+$',
                       '^age:[0-9]+,skill:[A-Za-z]+,name:[A-Za-z]+$',
                       '^name:[A-Za-z]+,skill:[A-Za-z]+,age:[0-9]+$',
                       '^skill:[A-Za-z]+,name:[A-Za-z]+,age:[0-9]+$'].join('|'));

let a = '1234';
let b = '1238abc';
let c = '0.15';
let d = 'Infinity';
let e = '999999999999999';



console.log( parseInt(a), parseFloat(a), Number(a), +a, a | 0 );
console.log( parseInt(b), parseFloat(b), Number(b), +b, b | 0 );
console.log( parseInt(c), parseFloat(c), Number(c), +c, c | 0 );
console.log( parseInt(d), parseFloat(d), Number(d), +d, d | 0 );
console.log( parseInt(e), parseFloat(e), Number(b), +b, b | 0 );










// parseInt, parseFloat, Number, + and | 0.
// str	parseInt(str)	parseFloat(str)	Number(str)	+str	str | 0
// '1234'	number          	?	?	?	?
// '1238abc'	?	?	?	?	?
// '0.15'	?	?	?	?	?
// '3.14ivan'	?	?	?	?	?
// 'Infinity'	?	?	?	?	?
// '99999999999999999999'	?	?	?	?	?
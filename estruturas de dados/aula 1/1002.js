var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let raio = Number(lines[0]);
let Pi = 3.14159;
let raio2 = raio **2
let A = Pi * raio2 
console.log("A=" + A.toFixed(4))
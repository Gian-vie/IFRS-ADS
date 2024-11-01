// par-Impar.js
const stack = require('./stack-obj');
const pilha = new stack();
const array = [864, 86, 858, 36, 65, 897, 432, 86, 231, 786];
for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0 ){
        pilha.push(array[i]);
    } else {
        pilha.pop()
        if(pilha.isEmpty() ){
            console.log("A pilha esta vazia")
        }
    }
}
console.log(pilha.toString(), `size ${pilha.size()}`)
let size = pilha.size()
if(pilha.isEmpty() === false){
    for(let i = 0; i < size; i++){
        console.log(pilha.pop())
    }
}
console.log(pilha.toString())

const stack = require('./stack-obj');

function ToBinari(decimal) {
    const pilha = new stack();
    const pilhaBinaria = new stack();
    while (decimal !== 0) {
        if (decimal % 2 === 0) {
            pilha.push(0)
            decimal = decimal / 2
        } else {
            pilha.push(1)
            decimal = (decimal - 1) / 2
        }
    }
    let tamanhoInicial = pilha.size()
    for (let i = 0; i < tamanhoInicial; i++) {
        pilhaBinaria.push(pilha.pop())
    }
    return pilhaBinaria.toString()
};

console.log(ToBinari(152))
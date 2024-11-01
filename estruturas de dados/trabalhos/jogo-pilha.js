// Escreva um programa que crie 3 pilhas com tamanho 3 cada uma.

// Para cada pilha você irá gerar 3 valores aleatórios (1-9) e adicioná-los na pilha.

// Após você irá desempilhar um valor de cada pilha e compara los. O maior valor entre os elementos receberá como pontuação a soma dos elementos.

// Em caso de empate entre 1, 2 ou 3 valores, a soma ficará aculmulada para o ganhador da próxima rodada.

// Ao final das três rodadas, o jogador que tiver mais pontos ganha o jogo.

// Math.round(Math.random()* 8 + 1) // declaração de Math random

const stack = require("./stack-obj")

//pontuação dos players e suas pilhas
let player1 = 0
let pilha1 = new stack();

let player2 = 0
let pilha2 = new stack();

let player3 = 0
let pilha3 = new stack();

let rodadas = 3

// distribuição de cartas
for (let i = 0; i < rodadas; i++) {
    pilha1.push(Math.round(Math.random() * 8 + 1));
    pilha2.push(Math.round(Math.random() * 8 + 1));
    pilha3.push(Math.round(Math.random() * 8 + 1));
}
console.log(pilha1)
console.log(pilha2)
console.log(pilha3)

//rodadas
let acumulado = 0
for (let i = 0; i < rodadas; i++) {
    let jogo1 = pilha1.pop()
    let jogo2 = pilha2.pop()
    let jogo3 = pilha3.pop()
    let igual = 0
    if (jogo1 === jogo2 || jogo1 === jogo3 || jogo2 === jogo3) {
        if (jogo1 > jogo2 && jogo1 > jogo3) {
        } else if (jogo2 > jogo1 && jogo2 > jogo3) {
        } else if (jogo3 > jogo1 && jogo3 > jogo2) {
        } else {
            acumulado += jogo1 + jogo2 + jogo3
            console.log(`rodada ${i + 1} empate, acumulado ${acumulado}`)
            igual++
        }
    }
    if (igual === 0) {
        if (jogo1 > jogo2 && jogo1 > jogo3) {
            player1 += jogo1 + jogo2 + jogo3 + acumulado
            console.log(`rodada ${i + 1} do player 1, pontuação ${player1}`)
            acumulado > 0 ? acumulado = 0 : null
        } else if (jogo2 > jogo3) {
            player2 += jogo1 + jogo2 + jogo3 + acumulado
            console.log(`rodada ${i + 1} do player 2, pontuação ${player2}`)
            acumulado > 0 ? acumulado = 0 : null
        } else {
            player3 += jogo1 + jogo2 + jogo3 + acumulado
            console.log(`rodada ${i + 1} do player 3, pontuação ${player3}`)
            acumulado > 0 ? acumulado = 0 : null
        }
    }
}

console.log(`   PONTUAÇÃO FINAL:
    player1: ${player1}
    player2: ${player2}
    player3: ${player3}`)
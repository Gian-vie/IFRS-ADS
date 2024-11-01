
//FUNÇOES

const vetor = [1, 2, 3, 4, 5, 6, 7, 8];

/**
 * FUNÇÃO / RETORNO INTERNO / SAÍDA
 * .MAP / elemento / vetor com mesmo tamanho
 * .FIND / boolean / elemento 
 * .FIRSTINDEX / boolean / indice
 * .FILTER / boolean / vetor com no max mesmo tamanho
 * .SOME / boolean / boolean
 * .EVERY / boolean / boolean
 * .REDUCE / elemento / elemento
 */



//====> MAP <=====
const vetor2 = []
for (let i = 0; i < vetor.length; i++) {
    vetor2[i] = vetor[i] * 2
}
//console.log(vetor2)

const vetor3 = vetor.map(function (valor, indice, original) {
    // return `R$${valor * 2},00`
    return indice % 2 === 0 ? valor * 2 : valor * 3
})

/////////////////////////////////////////////////////////////

//==> Aplicando o que vai ser visto adiante e desverbalizando a função do vetor (arow function)
const vetor4 = vetor.map((val, ind) => val * (ind % 2 === 0 ? 2 : 3))
// console.log(vetor4)

////////////////////////////////////////////////////////////

//funcion nome([...parametros]){
//    [return...]
//}

//definição a função (vai declarar mas não vai execuar)
function oi() {
    console.log(`oi`)
}
//chamada da função (vai executar)
oi()

//valor = é o valor da função
//indice = é a posição do valor
//original = vai fazer uma copia do vetor original


//console.log(vetor3)


///// assinatura de função //////
// function soma (x, y){
//     return x + y
// }
let n1 = 5
let n2 = 9
// const resultado = soma(n1, n2)
// console.log(resultado)

function dobro(n) {
    return n * 2
}

console.log(soma(n1, n2), dobro(soma(n1, n2)))

function soma(x, y) {
    return x + y
}

/// ====> arow function <======= outro tipo de assinatura de função
const soma1 = (a, b) => {
    return a + b
}

const dobro1 = (n) => {//===com  apenas um parametro "n" não é necessario o "()"
    return n * 2  //===> em casos em que tem apenas uma expressão não é necessário o return e as "{}"
}

const dobro2 = n => n * 2 // mesma função da de cima


const par = n => n % 2 === 0 //? true : false 
let numero = 156
// console.log(`O numero ${numero} é par? ${par(numero)}`)

//====> FIND e FINDINDEX <=====

const elemento = vetor.findIndex((valor) => valor === 5)
// console.log(elemento)



const vetorObj = [{nome:"Gian Vieceli", idade: 20}]

const elemento2 = vetorObj.find((pessoa) => pessoa.idade >= 18)

console.log(elemento2.nome)


//====> FILTER <=====

const epares = vetor.filter((valor) => valor % 2 === 0)
// console.log(epares)

//escala de funçoes
const epares2 = vetor.filter((valor) => valor % 2 === 0).map(v => v * 2)
// console.log(epares2)


//====> SOME e EVERY <=====

//some === verifica se tem pelo menos um elemento true

const epares3 = vetor.filter((valor) => valor % 2 !== 0).some((valor) => valor % 2 === 0)
// console.log(epares3)

//every === verifica se todos os elementos são true

const epares4 = vetor.filter((valor) => valor % 2 === 0)
    .every((valor) => valor % 2 === 0)
// console.log(epares4)

//====> REDUCE <=====

//executa qualquer função (função "coringa")
//usado para mudar o tipo geralmente ou reduzir o vetir a um unico numero

let sss = 0
for (let i = 0; i < vetor.length; i++) {
    sss += vetor[i]
}
// console.log(sss)

//soma
const soma3 = vetor.reduce(function (acumulado, valor, indice, copiaVetor) {
    return acumulado + valor
}, 0)
// console.log(soma3)

//produto 
const prod = vetor.reduce((acumulado, valor) => acumulado * valor, 1)
// console.log(prod)

//soma dos quadrados
const somaQuad = vetor.reduce((acumulado, valor) => acumulado + (valor ** 2), 0)
// console.log(somaQuad)

const npares = vetor.reduce((a, v) => {
    if (v % 2 === 0){
       return [...a, v]
    }
    return a
}, [])
// console.log(npares)

//resumido
const npares2 = vetor.reduce((a, v) => (v % 2 === 0) ? [...a, v] : a, [])
// console.log(npares2)


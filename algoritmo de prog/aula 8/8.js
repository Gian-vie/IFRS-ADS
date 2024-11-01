//declarando OBJETOS

// let variavel = {nome : "valor", nome : 123}

// let professor = {nome: "Thyago", sobrenome: "Salvá", idade: 36}



// let pessoa = {nome: "Gian", sobrenome: "Vieceli", idade: 20};

// if(pessoa.idade >= 18){
//     console.log(`Parabéns ${pessoa.nome}! Você pode tirar carteira de motorista`)
// } else {
//     console.log(`Ainda não ${pessoa.nome} faltam ${18 - pessoa.idade} anos`)
// };



// for(let propriedade in pessoa){
//     console.log(propriedade, pessoa[propriedade])
// };

// let pessoa1 = {nome: "aaa", media: 8.0}
// let pessoa2 = {nome: "bbb", media: 5.0}
// let pessoa3 = {nome: "ccc", media: 1.0}

// //calcule a media dos 3 alunos
// let mediageral = (pessoa1.media + pessoa2.media + pessoa3.media)/3
// console.log("A media dos alunos é " + mediageral)

// //mostre quantos a cima da media
// let acima = 0
// if(pessoa1.media >= mediageral){
//     acima++
// }
// if(pessoa2.media >= mediageral){
//     acima++
// }
// if(pessoa3.media >= mediageral){
//     acima++
// }
// console.log(acima + " pessoas estão a cima da média")

// //mostre o nome do aluno com maior nota

// if(pessoa1.media > pessoa2.media && pessoa1.media > pessoa3.media) {
//     console.log(pessoa1.nome + " tem a maior média")
// }else if(pessoa2.media > pessoa3.media) {
//     console.log(pessoa2.nome + " tem a maior média")
// }else {
//     console.log(pessoa3.nome + " tem a maior média")
// }




// faça um algoritmo que calcule o MDC de dois numeros quaisquer

//maximo divisor comum

// let n1 = 10, n2 = 15, mdc = 1
// let nmed = n1 > n2 ? n2 : n1

// while (nmed > mdc) {
//     if (n1 % mdc === 0 && n2 % nmed === 0) {
//         mdc = nmed
//         console.log(`MDC = `+ mdc)
//     }
//     nmed--
// }



// faça um algoritmo que calcule o fatorial de um numero

// let n = 6, fat = n
// while (n > 1) {
//     if (n > 1) {
//         fat = fat * (n - 1)
//         console.log(`fat pass= ${fat}`)

//     }
//     n--
// }
// console.log(`fat = ${fat}`)

// faça um algoritmo que encontre o numero primo imediatamente maior que o numero da variavel n

let num = 54
let n = num
do {
    n++
    cont = 0
    for (let p = 1; p <= n; p++) {
        if (n % p === 0){
            cont++
        }
    }
}while(cont !== 2)
let maiorp = n


// faça um algoritmo que diga qual o numero primo mais proximo da variavel n

n = num
do {
    n--
    cont = 0
    for (let p = 1; p <= n; p++) {
        if (n % p === 0){
            cont++
        }
    }
}while(cont !== 2)
let menorp = n

console.log(menorp > maiorp ? menorp : maiorp)
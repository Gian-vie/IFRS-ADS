/**
 * extruturas condicionais
 * extruturas de repetição
 * CONTEUDO DE HOJE === VETORES
 */
// VETORES CONSEGUEM ARMAZENAR MAIS DE UM VALOR
const vetor = [4, 5, 1, 6]

// TAMANHO DO VETOR = ULTIMO INDICE + 1 (INDICES DO VETOR COMEÇA NO 0)
// COMO ACESSAR DETERMINADA POSSIÇÃO DO VETOR  
// usa colchetes []  exemplo = console.log(nomeVariavel[indice])

// console.log(vetor[2])

// definimos um valor a um indice por vetor por vetor[indice] = novoValorDoIndice
// Se o vetor for uma constante pode-se alterar o valor dos indices
vetor[2] = 7

// --> Indicado a se trabalhar com CONSTANTES <--

// let i = 0
// while(i < vetor.length){
//     console.log(vetor[i])
//     i++
// } 

// i = 0
// do {
//     console.log(vetor[i])
//     i++
// }while(i < vetor.length)

// for(let i = 0; i < vetor.length; i++){
//     console.log(vetor[i])
// }

// for(let i = 0; i < 10; i++){
//     vetor[i] = i
// }


// let s = 0
// for(let i = 0; i < vetor.length; i++){
//     vetor[i] = vetor.length - i -1
//     console.log(vetor[i])
//     s += vetor[i]
// }
// console.log("soma = " + s)

let soma = 0, media = 0, up = 0
for (let i = 0; i < 10; i++) {
    vetor[i] = Math.round(Math.random() * 100)
    soma += vetor[i]
}
// console.log(vetor)
media = soma / vetor.length

//calculo da media
for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] > media) {
        up++
    }
}


//quantos numeros são pares
let par = 0
for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] % 2 === 0) {
        par++
    }
}


let maior = vetor[0]//mais indicado do que colocar valor "0" pq se forem valores negativos vai dar um numero que não existe
for (let i = 1; i < vetor.length; i++) {
    if (vetor[i] > maior) {
        maior = vetor[i]
    }
}
// console.log(`a media é :${media}
// A cima da media :${up}
// Indices pares :${par}
// O maior numero do vetor é ${maior}`)


const vetor1 = []
const vetor2 = []
const vetor3 = []
const vetor4 = []

for (let i = 0; i < 10; i++) {
    vetor1[i] = Math.round(Math.random() * 100)
}

for (let i = 0; i < 10; i++) {
    vetor2[i] = Math.round(Math.random() * 100)
}

for (let i = 0; i < 10; i++) {
    vetor3[i] = vetor1[i] + vetor2[i]
}

// soma do promeiro + o inverso do segundo
// for(let i = 0; i < 10; i++){
//     vetor4[i] = vetor1[i] + vetor3[vetor3.length - i-1] 
// }

//vetor 4 = inverso do vetor1
// for(let i = 0; i < vetor1.length; i++){
//     vetor4[i] =vetor1[vetor1.length - i-1] 
// }
// console.log(vetor1)
for (let v = vetor1[0], i = 0; i < vetor1.length / 2; i++) {
    v = vetor1[i]
    vetor1[i] = vetor1[vetor1.length - i - 1]
    vetor1[vetor1.length - i - 1] = v

}
// console.log(vetor1)
// console.log(vetor1, vetor2, vetor4)

let a = []
let b = []
let y = []

for (let i = 0; i < 10; i++) {
    a[i] = Math.round(Math.random() * 10)
}

for (let i = 0; i < 10; i++) {
    b[i] = Math.round(Math.random() * 10)
}

//intersecção entre A e B
for (let i = 0; i < a.length; i++) {
    for (let n = 0; n < b.length; n++) {
        if (a[i] === b[n]) {
            let q = 0
            for (let k = 0; k < a.length; k++){
                if(a[i] === c[k]){
                    
                }
            }
            y[y.length] = a[i]
            break
        }
    }
}
console.log(a, b, y)
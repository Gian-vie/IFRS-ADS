const vetor = []
for(let n = 0; n < 10; n++){
    vetor[n] = Math.round(Math.random() * 100000)
}
console.log(vetor)


// let media = 0
// for(let i = 0; i < vetor.length; i++){
//     media += vetor[i] 
// }
// media = media / vetor.length
// console.log("media " + media)

let medi =(vetor.reduce ((a, v) => a += v, 0))/ vetor.length
console.log("medi0 " + medi)

// let menor = media
// for(let i = 0 ; i < vetor.length; i++){
//     menor = menor > vetor[i] ? vetor[i] : menor
//     // if(menor > vetor[i]){
//     //      menor = vetor[i]
//     // }
// } 
// console.log("menor " + menor)

let meno = Math.min.apply(null, vetor)
console.log("menr publico " + meno)


// let maior = media
// for(let i = 0 ; i < vetor.length; i++){
//     maior = maior < vetor[i] ? vetor[i] : maior
//     // if(maior > vetor[i]){
//     //      maior = vetor[i]
//     // }
// } 
// console.log("maior " + maior)

let maio = Math.max.apply(null, vetor)
console.log("maio publico " + maio)


let soma = vetor.reduce((acumul, valor) => acumul + valor, 0)
console.log("total de pessoas " + soma)


let maisPopul = 0
for(let i = 0 ; i < vetor.length; i++){
    if(vetor[i] > 20000){
        maisPopul++
    }
}
console.log("+20000 " + maisPopul)



let menosPopul = 0
for(let i = 0 ; i < vetor.length; i++){
    if(vetor[i] < media){
        menosPopul ++
    }
}
console.log("abaixo da media " + menosPopul)


// let lucro = 0
// for(let i = 0 ; i < vetor.length; i++){
//     if(i <= vetor.length-2){
//         lucro += vetor[i] * 50
//     }else{lucro += vetor[i] * 100}
//     // console.log("lucro = " + lucro)
// }
// console.log("lucro tot = " + lucro)

let lucr = vetor.reduce((a, v, i) => a += i === vetor.length-1 ? a = v*100 : a = v*50, 0)
console.log("lucr0 tot = " + lucr)


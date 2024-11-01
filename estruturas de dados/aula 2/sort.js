let vet = [5,8,9,32,3]
// let sort = []

// for(let i = 0; i< vet.length; i++){
//     let temp = vet[i]
//     for(let i2 = 0; i2 < vet.length; i2++){
//         if(temp > vet[i2] ){
//             temp = vet[i2]
//         }
//     }
//     sort[i] = temp
// }
// console.log(sort)

for(let i = 0; i< vet.length; i++){
    for(let i2 = i+1 ; i2 < vet.length; i2++){
        if(vet[i] > vet[i2]){
            [vet[i],vet[i2]] = [vet[i2],vet[i]]
        }
    }
}
console.log(vet)

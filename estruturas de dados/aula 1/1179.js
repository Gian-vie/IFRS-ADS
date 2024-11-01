var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let parVet = []
let imparVet = []
let Par_cont = 0, Impar_cont = 0

const vetor = []
for(let i = 0; i< lines.length; i++){
    vetor[i] = Number(lines[i])
}


for (let i = 0; i < lines.length ; i++){
    if(vetor[i]%2 !== 0){
        imparVet[imparVet.length] = vetor[i]
        Impar_cont++
        if(Impar_cont === 5){
            for(let i = 0; i < 5; i++){
                console.log(`impar[${i}] = ${imparVet[i]}`)
            }
            Impar_cont = 0
        }
    }
    if(vetor[i]%2 === 0){
        parVet[parVet.length] = vetor[i]
        Par_cont++
        if(Par_cont === 5){
            for(let i = 0; i < 5; i++){
                console.log(`par[${i}] = ${parVet[i]}`)
            }
            Par_cont = 0
        }
    }
// console.log("imp" + Impar_cont, "par" + Par_cont)
}

for(i = 0; i < Impar_cont; i++){
    console.log(`impar[${i}] = ${imparVet[i+5]}`)
}
for(i = 0; i < Par_cont; i++){
    console.log(`par[${i}] = ${parVet[i+5]}`)
}

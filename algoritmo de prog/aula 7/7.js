// let b = 0;
// while(b < 10){
//     console.log("b" + b);
//     b++;
// }

// let  i= 0

// do {
//     console.log(i)
//     i++
// }while(i < 10)

// for(inicalização; condição; incremento){
//     comando
// }
// ---> inicilização só executa uma vez
// --->
// --->
// let i = 1, soma = 0

// while(i <= 100){
//     if(i % 2 === 1){
//         soma = soma + i
//     }
//     i++
// } console.log("soma dos impares de 0 a 100 é " + soma)


// for (n = 1; n <= 100; n++) {
//     if (n % 2 === 0) soma += n
// }console.log("soma dos pares de 0 a 100 é " + soma)


//quando define uma tring com crase``, ela tiva um template string
// consegue receber uma operação em javascript dentro da string com ${OPERAÇÃO} 
//
// let a = 5, b = 7
// console.log("resultado de " + a + " + " + b + " é igual a " + (a+b))
// console.log(`resultado de ${a} + ${b} é igual a ${a+b}`)

/**
 * faça um algoritmo que informe se um numero é primo ou não. 
 * um numero é primo se for divisivel somente por 1 e por ele mesmo
 */

let n = 71681, s = 0
for (let d = 1; n >= d; d++) {
    if (n % d === 0) {
        s += d
    }
}
if (s > (n + 1)) {
    console.log(`o numero ${n} não é primo`)
} else {
    console.log(`o numero ${n} é primo`)
}


// let di = 0, n = 1,

// while (n <= 50) {
//     for (let d = 1; n >= d; d++) {
//         if (n % d === 0) {
//             di++
//         }
//     }
//     if (di === 2) {
//         console.log(`o numero ${n} é primo`)
//     }
//     n++
// }
// if (di === 2) {
//     console.log(`o numero ${n} é primo`)
// } else {
//     console.log(`o numero ${n} é primo`)
// }
// for (let d = 1; n >= d; d++) {
//     if (n % d === 0) {
//         di++
//     }
// }
// if (di === 2) {
//     console.log(`o numero ${n} é primo`)
// }

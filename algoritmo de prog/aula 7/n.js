// let quant = 0, divisor = 0
// while (quant <= 15) {
//     for (let n = 1; n < 100; n++) {
        
//         for (let i = 1; i <= n; i++) {
//             if (n % i === 0) {
//                 divisor++
//             }
//         }
//     }
//     if(divisor === 2) {
//         console.log(n)
//         quant++
//     }
// }


//   x=1/2+1/6+1/12+1/20+1/30...1/10100    (contém 100 termos)

let num = 0, x = 0

// for(n = 2; n <= 100; n += 2){
//     num += n
//     console.log(num)
//     x = x + (1/num)
// }
// console.log("x é " + x)


for(let i = 1; i <= 100; i++){
    x =x + 1 /( i * (i + 1))
    console.log("1/", i * (i+1))
}
console.log("x = " + x)
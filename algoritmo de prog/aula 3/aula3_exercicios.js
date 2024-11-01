
// let a=2 b=7 c=3,5
// let R = false && b/a >= c || ! a<= c

let a = (2)
let b = (7)
let c = (3,5)

//let R = false && b/a >= c || ! a<= c
//let R = false && 7/2 >= 3,5 || ! (2<=3,5)
//let R = false && true || 2<=3,5
//let R = false || true
//let R = true
let R = false && b/a >= c || ! a<= c
console.log(R)
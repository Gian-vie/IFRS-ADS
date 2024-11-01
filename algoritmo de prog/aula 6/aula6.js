//extruturas de reperição


/** WHILE = enquanto */
//while(condição){
//execução
//}

/*
let x = 10;

while (x >= 1) {
    console.log(x)
    x = x - 1
};
*/

//precisa de uma condição (critério de parada (-->deve ser atingido)(-->pode ser determinado ou indeterminado))
//extrutura que testa no início
// o X será um contador, (uma variavel de controle)
//cada repetição de X se chama "iteração


//x = x + 1 ---> exemplo de variavel acumuladora -> contadora


/*
let y = 0;

while (y < 10) {
    console.log(10 - y)
    y = y + 1
};

let a = 3 
let s = a++ +2
console.log(s)
*/


// ++a (pré incremento)
//a++ (pós incremento)

/** atv 1-
let x = 0;
while (x < 10) {
    console.log(x + 101)
    x++
};
 */

/** ATV 2- 
let x = 0;
while (x <= 10) {
    console.log(100 + x * 10)
    x++
};
*/

/** ATV 3- 
let x = 50, y = 50 ;

while(y > 0){
    if(x % y === 0){
        console.log(y)
    }
    y--
};
*/

/** ATV 4- 

let x = 0;
while (x < 10) {
    console.log((x + (11 - x)) * 5)
    x++
};
*/

/** ATV 5-  */

let a = 80, b = 90, x = 0

let contador = 0
while(++a < b){
    if(a % 2 === 0){
      contador++
    }
}
console.log(contador)

/**ATV 6- */
let mul = 0, num = 9;
while(mul <= 10){
    console.log(num, "x" , mul ,"=", num * mul)
    mul++
};





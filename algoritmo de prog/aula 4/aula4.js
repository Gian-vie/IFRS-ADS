//lets goooooo (tentar começar a usar o ; no final pelo bom costume)
//EXTRUTURAS CONDICIONAIS 

let trim1 = 0, trim2 = 3, trim3 = 99;
let media = (trim1 + trim2 + trim3) / 3;
//console.log();

/*

if (media >= 7 && media <= 10) {
    console.log("aprovado")
} else if (media > 10) {
    console.log("wtf???")
} else if (media > 1.6) {
    console.log("exame")
} else {
    console.log("reprovado")
};

*/

// Para um valor ser um triangulo, a soma dos lados menores tem que ser maior que o valor do maior lado



/*

//condicional se é triangulo
if (a + b > c && b + c > a && a + c > b) {
    console.log("Forma um triângulo!!")
    if (a === b && b === c) {
        console.log("equilátero")//3 lados iguais
//    } else if ((a === b && a !== c) || (b === c && b !== a) || (a === c && a !== b)) {
//        console.log("isósceles") //2 lados iguais
    } else if (a !== b && a !== c && b !== c){
        console.log("Escaleno")//3 lados diferentes
    } else {
        console.log("isósceles") //2 lados iguais
    }
} else {
    console.log("Não forma um triângulo!!")
}

*/


// ifternale ? =(valor atribuido quando true/if) : =(valor atribuido quando folse/else)  (usado quando tem uma condicional simples if/else apenas)
// Variavel = (condição) ? "true" : "folse"
// ex media = (media >= 7) ? aprovado : (media >1.6) "exame" : "reprovado" 

let a, b, c

a = 56
b = 59
c = 65

let ordem_crescente
if (a < b && b < c) {
    console.log(a, b, c)
} else if (a < c && c < b) {
    console.log(a, c, b)
} else if (b < a && a < c) {
    console.log(b, a, c)
} else if (b < c && c < a) {
    console.log(b, c, a)
} else if (c < a && a < b) {
    console.log(c, a, b)
} else {
    console.log(c, b, a)
};

if (a < c && a < b) {
    if (b < c) {
        console.log(a, b, c)
    } else { console.log(a, c, b) }
} else if (b < c && b < a) {
    if (a < c) {
        console.log(b, a, c)
    } else { console.log(b, c, a) }
} else if (c < b && c < a) {
    if (a < b) {
        console.log(c, a, b)
    } else { console.log(c, b, a) }
}

let maior = (a > b && a > b) ? a : (b > c) ? b : c
let menor = (a < b && a < b) ? a : (b < c) ? b : c
let meio = (a !== maior && a !== menor) ? a : (b !== maior && b !== menor) ? b : c

console.log(menor, meio, maior)

//pesso ideal

//homens (72.7 * h) - 52
//mulher (62.1 * h) - 44.7

let sexo, peso, h

h = 1.81
sexo = "F"

peso = (sexo === "M") ? (72.7 * h) - 58 : (62.1 * h) - 44.7

console.log(peso)


//calculadora

let n1, n2, op, cal
n1 = 3
n2 = 4
op = "/"

if (op === "+") {
    console.log(n1 + n2)
} else if (op === "-") {
    console.log(n1 - n2)
} else if (op === "/") {
    console.log(n1 / n2)
} else if (op === "*") {
    console.log(n1 * n2)
} else {
    console.log("Invalido")
}

//ou por ifternale 
cal = (op === "+") ? console.log(n1 + n2) : (op === "-") ? console.log(n1 - n2)
    : (op === "/") ? console.log(n1 / n2) : (op === "*") ? console.log(n1 * n2) : console.log("Invalodo")

/**
 * mostrar mensagem de aceso permitido para
 * loguin = 'admin' e senha "admin"
 * mostre a mensagem acesso negado para os 
 * outros casos
 */

let loguin, senha, acesso
loguin = "admin"
senha = "admin"

if (loguin === "admin" && senha === "admin"){
    console.log("Acesso permitido!")
} else {
    console.log("Acesso negado!")
}

//ou por ifternale 
acesso = (loguin === "admin" && senha === "admin") ? console.log("Acesso permitido!") : console.log("Acesso negado!")

console.log( "acesso ", loguin === "admin" && senha === "admin" ? "permitido" : "negado")
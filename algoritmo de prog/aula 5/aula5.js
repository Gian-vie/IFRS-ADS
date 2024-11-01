//let media =9
//console.log(media>= 7 ? "aprovado" : "reprovado")

/**
 * SWITCH(opção){
 * case valor1 : B1;
 *          Break;
 * case valor2 : B2;
 *          Break;
 * default : B3;
 * }
 */


/*
switch (operaçaõ) {
    case 1:
        console.log("crédito selecionado");
        break; //se não tiver o BREAK ele vai executar todas os "case" ou até achar um BREAK
    case 2:
        console.log("débito selecionado");
        break;
    default:
        console.log("opção invalida");

} */


//extruturas if que tenham as seguintes características,
// as operaçoes sejam igualdades(===) e tenha apenas uma variável

let ma, custo
ma = 13
/*
if(ma < 12){
    custo = ma * 0.30
}else{
    custo = ma * 0.25
}
*/
// custo = (ma < 12) ? custo = ma * 0.30 : custo = ma * 0.25
// console.log(ma + " maçãs custam R$" + custo)



let num, num2
num = 14
//if(num % 2 === 0){
//    console.log("PAR")
//}else{
//    console.log("IMPAR")
//}

//console.log(num + " É " + (num % 2 === 0 ? "Par" : "Impar"))



num2 = 46841
//console.log("O número " + num2 + " é " + ((num2 < 0) ? "Negartivo" : (num2 > 0) ? "Positivo" : "o zero"))


let gols1, gols2, time1, time2

gols1 = 3
gols2 = 2
time1 = "Grêmio"
time2 = "Inter"

console.log(gols1 > gols2 ? time1 + " venceu de " + gols1 + " a " + gols2 :
    gols1 < gols2 ? time2 + " venceu de " + gols2 + " a " + gols1 :
        "empate")


let n1, n2, tot
n1 = 5
n2 = 7
tot = n1 + n2
/*
if (tot > 20) {
    tot = tot + 8
} else {
    tot = tot - 5
}
*/
// console.log("total é " + (tot > 20 ? tot = tot + 8 : tot = tot - 5))

/*
//desconto do inss

let salario = 1300

if (salario <= 600) {
    console.log("isento")
} else if (salario <= 1200) {
    console.log(salario * 0.2)
} else if (salario <= 2000) {
    console.log(salario * 0.25)
} else {
    console.log(salario * 0.3)
}
*/

let sigla
sigla = "RJ"

if (sigla === "RJ") {
    console.log("Carioca")
} else if (sigla === "PR") {
    console.log("Paulista")
} else if (sigla === "MG") {
    console.log("Mineiro")
} else {
    console.log("Outro estado")

}

switch (sigla) {
    case "RJ":
        console.log("Carioca")
        break;
    case "PR":
        console.log("Paulista")
        break;
    case "MG":
        console.log("Mineiro")
        break;
    default:
        console.log("Outro estado");
}
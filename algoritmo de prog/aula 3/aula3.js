/**
let n1 = (5)
let next = (n1 + 1)
console.log (next)

let n2 = 12
console.log(n2 - 1, n2 + 1)

let n3 = 14
n3 = n3 + 3
console.log(n3)
*/

/**1) faça um algortimo que crie 3 variaveis com numeros e calcule
 * a media aaritimética.
 * mostre o valor no terminal
 */

let val1 = 3, val2 = 6, val3 = 9


//1)
let media_arit = (val1+val2+val3) / 3
console.log(media_arit)
//console.log((val1+val2+val3) / 3)


/**2) Faça um agoritmo que crie 3 variáveis
 * com numeros e calcule a media ponderada.
 * a primeira tem peso 3, a segunda tem peso 3 e a terceira peso 4
 * mostre o valor no terminal
 */

//2)

let pe1 = 4, pe2 = 2, pe3 = 4   //variaveis dos pesos

let media_pond = (val1*pe1 + val2*pe2 + val3*pe3) / (pe1 + pe2 + pe3)
console.log(media_pond)
//console.log((val1*pe1 + val2*pe2 + val3*pe3) / (pe1 + pe2 + pe3))


/**3) faça um algoritimo que cria 2 variaveis
 * com numeros. calcule uma terceira variavel 
 * para que a media 7
 */

let media = 7
let trimestres = 3
let nota1 = 4
let nota2 = 10
let nota3 = (media * trimestres) - nota1 - nota2
console.log("a nota necessária é = " + nota3)


/**4) conversão de temperatra de fahrenheiit >> celcius */

let C = 100
let F = 100
let conversãoF_C = 1.8*C + 32
let conversãoC_F = (F-32) / 1.8
console.log(F + '°F para Celcius ficam ' + conversãoC_F + "°C")
console.log(F + '°C para ferenheit ficam ' + conversãoF_C + "°F")


//variaveis de idade

let nome = "pedro"
let nasc = 1995
let anoAtual = 2024
let atualIdade = anoAtual - nasc
let ano52 = nasc + 52
console.log(nome + " fará " + atualIdade + ' anos no ano de ' + anoAtual)
console.log("faltam " + (ano52 - anoAtual) + " anos para " + nome + " fazer 52 anos")

//conversão de hora

let seg = 7200, min = seg / 60,  hr = min / 60
const HORAS_EM_SEGUNDOS = 60 * 60 //em letra maiuscula para facilitar reconhecimento de constante
console.log(seg + " segundos equivalem a " + hr + " horas ou " + min + " minutos" )
console.log(seg / HORAS_EM_SEGUNDOS + " horas")

//2 variaveis com lado e base de um retangulo
//calcular a harea do retangulo

let lado1 = 8
let lado2 = 5
let areaRetangulo = lado1 * lado2
console.log("um retangulo de lado1 = " + lado1 + " e lado2 = " + lado2 + " tem area de = " + areaRetangulo + "m²")

//funçoes prontas/operadores
// 4 ** 2 = (4 ao quadrado) (novo, dependendo nao esta disponivel)
//  Math.pow(4,2) = (4 ao quadrado) (biblioteca pronta (MAth.))
// Math.swrt(16) = raiz quadrada

let hip = Math.sqrt(lado1 ** 2 + lado2 ** 2) 
console.log("A diagonal deste retangulo é " + hip)
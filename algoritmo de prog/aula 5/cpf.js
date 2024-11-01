//Não é conteudo da aula mas fds quis ver no que dava

let a, b, c, d, e, f, g, h, i, j ,k;

a=0
b=4
c=5
d=2
e=5
f=1
g=7
h=3
i=0

let somaj= (a * 10) + (b * 9) + (c * 8) + (d * 7) + (e * 6) + (f * 5) + (g * 4) + (h * 3) + (i * 2);
//if(somaj % 11 <= 1){
//    j = 0
//}else{
//    j = 11 - (somaj % 11)
//}
j = (somaj % 11 <= 1) ? j = 0 : j = 11 - (somaj % 11);

let somak= (b * 10) + (c * 9) + (d * 8) + (e * 7) + (f * 6) + (g * 5) + (h * 4) + (i * 3) + (j * 2);
//if(somak % 11 <= 1){
//    k = 0
//}else{
//    k = 11 - (somak % 11)
//}
k = (somak % 11 <= 1) ? k = 0 : k = 11 - (somak % 11);

console.log(a, b, c, ".", d, e, f, ".", g, h, i, "-", j, k);


export enum DiaDaSemana {
    segunda = 18,
    terça,
    quarta,
    quinta,
    sexta,
    sabado, 
    domingo,
}

//enum limita as saidas possiveis e tem relação 'valor nome'

let dia = DiaDaSemana[18]; //segunda
let dia1 = DiaDaSemana.terça; //19
console.log(DiaDaSemana[dia]) //18

//enum heterogenera
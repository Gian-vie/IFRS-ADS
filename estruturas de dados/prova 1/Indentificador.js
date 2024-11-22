/*  GIAN CARLOS VIECELI - Função de Indentificação de estruturas*/

//teste que confirmou que um arrayVazio.leght retorna "0"
// const teste = [];
// console.log(teste.length);


function identificarEstruturas(vet1, vet2) {

/*
    A ideia é tratar a entrada de dados do vet2 com base no valor do vet1; 
se o valor em vet1 for '1' ele entra no array "entrada" 
se o valor em vet1 for '2' ele entra no array "saida" 
posteriormente há a comparação entre a entrada e saida de dados com base nos arrays 
*/ 

    const entrada = [];
    const saida = [];


    // tratamento do vetor 2 com base no vetor 1 para distribuir entre entrada e saida
    for (let i = 0; i < vet1.lenght; i++) {
        if (vet1[i] == 1) {// se entra (1) valor, o valor do vetor 2 cai no array "entrada"
            entrada[entrada.length] = vet2[i] // o "entrada.lenght" deveria retornar "0" 
        } else if (vet1[i] == 2) {// se sai (2) valor, o valor do vetor 2 cai no array "saida"
            saida[0 + saida.length] = vet2[i]
        }
    };//declarei algo errado nessa parte, não esta funcionando como achei que iria ;-; 

    let estrutura = [//só pra copiar as estruturas depois
        "queue",
        "not sure",
        "impossible",
        "stack",
        "priority queue"];


        //verifica se é a primeiro e ultimo elemento da entrada e saida são iguais (fila)
    if (entrada[0] === saida[0] && entrada[saida.length] === saida[saida.length]) {
        //confirmação se não se encaixa em uma fila com prioridade tbm
        if(saida[0] === Math.max(entrada) && saida[saida.length] === Math.min(entrada)){
            return "not sure"
        }
        return "queue"

        //verifica se é a primeiro a sair é igual ao primeiro a entrar e o ultimo a sair é equivalente no tamanho ao de entrada (pilha)
    } else if (entrada[0] === saida[saida.length] && entrada[saida.length] === saida[0]) {
        //confirmação se não se encaixa em uma fila com prioridade tbm
        if(saida[0] === Math.max(entrada) && saida[saida.length] === Math.min(entrada)){
            return "not sure"
        }
        return "stack"

        //verifica se é uma fila com prioridade
    } else if (saida[0] === Math.max(entrada) && saida[saida.length] === Math.min(entrada)){
        return "priority queue"

        //elimina qualquer outra possibilidade como "impossible"
    } else {
        return "impossible"
    }
}


module.exports = identificarEstruturas;
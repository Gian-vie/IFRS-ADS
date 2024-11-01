/*
-Criar uma lista de Alunos com as seguintes operações:
    Adicionar o aluno "Ronaldo";
    Adicionar no fim da lista a aluna "Carol";
    Adicionar na posição 2 a aluna “Betty”;
    Adicionar no início da lista a aluna "Marina";
    Imprimir a lista
    Imprimir a quantidade de elementos
    Remover a posição 2
    Imprimir a lista
    Remover elemento do início da lista
    Imprimir o primeiro elemento da lista
    Remover elemento do final da lista
    Verificar se a aluna Betty existe na lista
    Imprimir lista
*/

const LinkedList = require('./linkedlist.js')

let lista = new LinkedList()

lista.push("Ronaldo");
lista.push("Carol");
lista.insert("Betty", 2);
lista.insert("Marina", 0)
console.log(lista.toString())
console.log(lista.size())
lista.removeAt(2)
console.log(lista.toString())
lista.removeAt(0)
console.log(lista.getElementAt(0))
lista.removeAt(lista.size()-1)
console.log(lista.indexOf("Betty"))
console.log(  "aaaaaaaaa   " + lista.removeAt((lista.size()) - 1))
console.log(lista.indexOf("Betty"))




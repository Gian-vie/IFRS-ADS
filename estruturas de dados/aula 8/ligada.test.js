// const Constante = require('./')
// test('', () => { 
//     expect().toBe();
// })

/*
Criar uma lista de Alunos com as seguintes operações:
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



const Lista = require('./linkedlist')

let lista = new Lista()

test("Adiciona o Ronaldo eCarol", () => { 
    lista.push("Ronaldo");
    lista.push("Carol");
    expect(lista.size()).toBe(2); 
});

test("Adiciona a Betty no 2", () => {
    lista.insert("Betty", 2);
    expect(lista.size()).toBe(3);
    expect(lista.getElementAt(2)).toBe("Betty");
});

test("Adiciona a Marina no 0", () => {
    lista.insert("Marina", 0)
    expect(lista.size()).toBe(4);
    expect(lista.getElementAt(0)).toBe("Marina");
});

test("remove posição 2", () => {
    lista.removeAt(2)
    expect(lista.size()).toBe(3);
    expect(lista.getElementAt(2)).toBe("Betty");
});

test("remove posi 0", () => {
    lista.removeAt(0)
    expect(lista.size()).toBe(2);
    expect(lista.getElementAt(1)).toBe("Betty");
});

test("remove ultimo elemento", () => {    
    let lista = new Lista()
    lista.push("Ronaldo");
    lista.push("Carol");
    lista.removeAt(lista.size()-1)
    expect(lista.size()).toBe(1);
    expect(lista.indexOf("Ronaldo")).toBe(0)
});


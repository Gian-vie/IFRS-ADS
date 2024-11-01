const stack = require('./stack-obj')

test("adicionar elementos na pilha", () => {
    let pilha = new stack();
    pilha.push(1);
    pilha.push(2);
    pilha.push(3);
    expect(pilha.isEmpty()).toBe(false);
    expect(pilha.pop()).toBe(3);
    expect(pilha.pop()).toBe(2);
    expect(pilha.pop()).toBe(1);
});

test("remover elementos da pilha vazia", () => {
    let pilha = new stack();
    expect(pilha.pop()).toBe(undefined);
});

test("remover elementos na pilha", () => {
    let pilha = new stack();
    pilha.push(1);
    pilha.push(2);
    pilha.push(3);
    expect(pilha.pop()).toBe(3);
    expect(pilha.pop()).toBe(2);
    expect(pilha.pop()).toBe(1);
});

test("tamanho da pilha", () => {
    let pilha = new stack();
    pilha.push(1);
    pilha.push(2);
    pilha.push(3);
    expect(pilha.size()).toBe(3);
});

test("topo da pilha", () => {
    let pilha = new stack();
    pilha.push(1);
    pilha.push(2);
    pilha.push(3);
    expect(pilha.peek()).toBe(3);
    pilha.pop();
    expect(pilha.peek()).toBe(2);
    pilha.pop();
    expect(pilha.peek()).toBe(1);
});

test("limpar pilha", () => {
    let pilha = new stack();
    pilha.push(1);
    pilha.push(2);
    pilha.push(3);
    pilha.clear();
    expect(pilha.size()).toBe(0);
    expect(pilha.isEmpty()).toBe(true);
});
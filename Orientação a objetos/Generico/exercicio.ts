// Analise as classes Pilhas e Filas  e faça a refatoração das mesmas aplicando Herança e Generics.

//*** Classe Pilha ***/
class Pilha {
  private elementos: any[];
  private capacidade: number;
  private topo: number;

  constructor(capacidade: number) {
    this.capacidade = capacidade;
    this.elementos = new Array(capacidade);
    this.topo = -1; // Pilha vazia
  }

  // Verifica se a pilha está vazia
  estaVazia(): boolean {
    return this.topo === -1;
  }

  // Verifica se a pilha está cheia
  estaCheia(): boolean {
    return this.topo === this.capacidade - 1;
  }

  // Empilha um elemento
  empilhar(elemento: any): void {
    if (this.estaCheia()) {
      throw new Error("Pilha cheia - Stack Overflow");
    }
    this.topo++;
    this.elementos[this.topo] = elemento;
  }

  // Desempilha um elemento
  desempilhar(): any {
    if (this.estaVazia()) {
      throw new Error("Pilha vazia - Stack Underflow");
    }
    const elemento = this.elementos[this.topo];
    this.topo--;
    return elemento;
  }

  // Retorna o elemento do topo sem remover
  elementoTopo(): any {
    if (this.estaVazia()) {
      throw new Error("Pilha vazia");
    }
    return this.elementos[this.topo];
  }

  // Retorna o tamanho atual da pilha
  tamanho(): number {
    return this.topo + 1;
  }

  // Imprime todos os elementos da pilha
  imprimir(): void {
    if (this.estaVazia()) {
      console.log("[]");
      return;
    }

    let resultado = "[";
    for (let i = 0; i <= this.topo; i++) {
      resultado += this.elementos[i];
      if (i < this.topo) {
        resultado += ", ";
      }
    }
    resultado += "]";
    console.log(resultado);
  }
}

//*** Classe Fila ***/
export class Fila {
  private elementos: any[];
  private inicio: number;
  private fim: number;

  constructor() {
    this.elementos = [];
    this.inicio = 0;
    this.fim = 0;
  }

  estaVazia(): boolean {
    return this.tamanho() === 0;
  }

  enfileirar(elemento: any): void {
    this.elementos[this.fim] = elemento;
    this.fim++;
  }

  desenfileirar(): any {
    if (this.estaVazia()) {
      return null;
    }
    const removido = this.elementos[this.inicio];
    this.inicio++;
    return removido;
  }

  tamanho(): number {
    return this.fim - this.inicio;
  }

  proximo(): any {
    if (this.estaVazia()) {
      return null;
    }
    return this.elementos[this.inicio];
  }

  imprimir(): void {
    let resultado = "";
    for (let i = this.inicio; i < this.fim; i++) {
      resultado += this.elementos[i] + " ";
    }
    console.log(resultado.trim());
  }
}

// exercicio:

export abstract class Extrutura {
  estaVazia() {}
  tamanho() {}
  imprimir() {}
}

export class Pilha2<T> extends Extrutura {
  private elementos: T[];
  private capacidade: number;
  private topo: number;

  constructor(capacidade: number) {
    super();
    this.capacidade = capacidade;
    this.elementos = new Array(capacidade);
    this.topo = -1; // Pilha vazia
  }

  // Verifica se a pilha está vazia
  estaVazia(): boolean {
    return this.topo === -1;
  }

  // Verifica se a pilha está cheia
  estaCheia(): boolean {
    return this.topo === this.capacidade - 1;
  }

  // Empilha um elemento
  empilhar(elemento: T): void {
    if (this.estaCheia()) {
      throw new Error("Pilha cheia - Stack Overflow");
    }
    this.topo++;
    this.elementos[this.topo] = elemento;
  }

  // Desempilha um elemento
  desempilhar(): T {
    if (this.estaVazia()) {
      throw new Error("Pilha vazia - Stack Underflow");
    }
    const elemento = this.elementos[this.topo];
    this.topo--;
    return elemento;
  }

  // Retorna o elemento do topo sem remover
  elementoTopo(): T {
    if (this.estaVazia()) {
      throw new Error("Pilha vazia");
    }
    return this.elementos[this.topo];
  }

  // Retorna o tamanho atual da pilha
  tamanho(): number {
    return this.topo + 1;
  }

  // Imprime todos os elementos da pilha
  imprimir(): void {
    if (this.estaVazia()) {
      console.log("[]");
      return;
    }

    let resultado = "[";
    for (let i = 0; i <= this.topo; i++) {
      resultado += this.elementos[i];
      if (i < this.topo) {
        resultado += ", ";
      }
    }
    resultado += "]";
    console.log(resultado);
  }
}

export class Fila2<T> extends Extrutura{
  private elementos: T[];
  private inicio: number;
  private fim: number;

  constructor() {
    super();
    this.elementos = [];
    this.inicio = 0;
    this.fim = 0;
  }

  estaVazia(): boolean {
    return this.tamanho() === 0;
  }

  enfileirar(elemento: T): void {
    this.elementos[this.fim] = elemento;
    this.fim++;
  }

  desenfileirar(): T | null {
    if (this.estaVazia()) {
      return null;
    }
    const removido = this.elementos[this.inicio];
    this.inicio++;
    return removido;
  }

  tamanho(): number {
    return this.fim - this.inicio;
  }

  proximo(): T | null {
    if (this.estaVazia()) {
      return null;
    }
    return this.elementos[this.inicio];
  }

  imprimir(): void {
    let resultado = "";
    for (let i = this.inicio; i < this.fim; i++) {
      resultado += this.elementos[i] + " ";
    }
    console.log(resultado.trim());
  }
}

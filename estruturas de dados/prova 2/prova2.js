/*Nesta atividade você deverá identificar a estrutura necessária e implementar uma classe chamada ControleAcoes, na qual deverá constar os seguintes métodos:
adicionar(acao:string)
desfazer()
refazer()
listar()

E o seguintes comportamentos:

A ideia desta classe é implementar uma funcionalidade de controle de ações similar ao recurso de um editor de textos.
Para cada ação realizada, a mesma é adicionada em uma estrutura que deverá respeitar a ordem das ações.
Cada vez que o método desfazer é acionado, uma ação é removido da estrutura que controla as ações, respeitando a ordem de entrada.
Estas ações removidas devem ser armazenadas em outra estrutura para que que seja possível utilizar o método refazer.
O método refazer, adiciona novamente na estrutura de ações as ações desfeitas.
Quando é adicionada uma nova ação, a estrutura de ações desfeitas (refazer) é zerada.

Abaixo segue exemplo de uso da classe:*/



//GIAN CARLOS VIECELI


class ControleAcoes {
    constructor() {
        this._count = 0;
        this._items = {};
        this._refazer = {};
        this._refazerCount = 0;
    }
   
    // adicionar(acao:string)
    adicionar(element) {
        if(this._refazerCount > 0){
            this.clear()
        }
        this._items[this._count] = `${element}`;
        this._count++;
    }
   
    isEmpty() {
        return this._count === 0;
    }
   
    clear() {
        this._refazer = {};
        this._refazerCount = 0;
    }
   
    // desfazer()
    desfazer() {
        if (this.isEmpty()) {
            return undefined;
        }
        this._count--
        const result = this._items[this._count];
        delete this._items[this._count];
        this._refazer[this._refazerCount] = result
        this._refazerCount++
        return result;
    }
   
    // refazer()
    refazer(){
        if (this._refazerCount === 0) {
            return undefined;
        }
        this._refazerCount--
        const result = this._refazer[this._refazerCount];
        this._items[this._count] = this._refazer[this._refazerCount]
        this._count++
        delete this._refazer[this._refazerCount]
        return result;
    }

   
    // listar()
    listar() {
        if (this.isEmpty()) {
            return ``;
        }
        let objString = `${this._items[0]}`;
        for (let i = 1; i < this._count; i++) {
            objString = `${objString}, ${this._items[i]}`;
        }
        return objString;
    }

}

module.exports = ControleAcoes;

let ca = new ControleAcoes();

ca.adicionar("Acao 1");
ca.adicionar("Acao 2");
ca.adicionar("Acao 3");
ca.adicionar("Acao 4");
ca.adicionar("Acao 5");
ca.desfazer(); //desfaz a ação 5
ca.desfazer(); //desfaz a ação 4
ca.refazer(); //refaz a ação 4
ca.adicionar("Acao 6");
ca.refazer(); //impossível refazer, pois foi adicionada uma nova ação

console.log(ca.listar()); // irá imprimir [Acao 1,Acao 2,Acao 3,Acao 4,Acao 6]

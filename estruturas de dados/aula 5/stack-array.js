class stack{

    constructor(){
        this._items = [];
    }

    push(element){
        this._items.push(element);
    }

    pop(){
        return this._items.pop();
    }

    peek(){
        return this._items[this._items.length-1];
    }

    isEmpty(){
        return this._items.length === 0;
    }

    size() {
        return this._items.length;
    }

    clear() {
        this._items = [];
    }


}

const pilha = new stack(); //criando um objeto do tipo pilha



// console.log(pilha.isEmpty());
// pilha.push(1);
// pilha.push(2);
// pilha.push(3);
// console.log(pilha.size());
// console.log(pilha)//todos os elementos da pilha
// console.log(pilha.peek());
// pilha.push(4);
// pilha.push(5);
// pilha.push(6);
// console.log(pilha.isEmpty());
// console.log(pilha.peek());
// pilha.pop();
// console.log(pilha.peek());
// pilha.pop();
// console.log(pilha)
// console.log(pilha.size());

// module.exports = stack;
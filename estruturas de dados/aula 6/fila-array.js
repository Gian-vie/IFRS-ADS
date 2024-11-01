class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if(this.isEmpty()){
        return undefined;
    }
        return this.items.shift();
    }

    nextElement() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }

    toString(){
         if(this.isEmpty()){
             return ``;
         }
        let objString = `${this.items[0]}`;
        for (let i = 1; i < this.size() ; i++){
           objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}
module.exports = Queue

// class Queue{

    // constructor() {}
    
    // public enqueue(element) { } //enfileirar
    
    // public boolean isEmpty() {
        // return this.items.length === 0;
    // } // está vazia?
    
    // public nextElement(){} //primeiro elemento da fila
    
    // public dequeue(){} //desnenfileirar
    
    // public toString(){}//mostra todos os elementos
// }
    
    // OBS: Utilizar a técnica FIFO - First In First Out - Primeiro a entrar Primeiro a sair


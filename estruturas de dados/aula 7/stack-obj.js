class stack{
    constructor(){
        this._count = 0;
        this._items = {};
    }

    push(element){
        this._items[this._count] = element;
        this._count++;
    }

    size(){
        return this._count;
    }

    min(){
        
    }

    isEmpty(){
        return this._count === 0;
    }

    clear(){
        this._count = 0;
        this._items = {};
    }

    pop(){
        if(this.isEmpty()){ 
            return undefined;
        }
    this._count --
    const result =  this._items[this._count]; 
    delete this._items[this._count]; 
    return result; 
    }

    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this._items[this._count - 1];
    }

    toString(){
        if(this.isEmpty()){
            return ``;
        }
        let objString = `${this._items[0]}`;
        for (let i = 0; i < this._count; i++){
            objString = `${objString},${this._items[i]}`;
        }
        return objString;
    }

}


const pilha = new stack(); //criando um objeto do tipo pilha

// pilha.push(1);
// pilha.push(2);
// pilha.push(3);
// console.log(pilha.isEmpty());
// console.log(pilha.size());
// console.log(pilha.peek());
// console.log(pilha.toString());

module.exports = stack;

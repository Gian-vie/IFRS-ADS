
//lisatas ligadas
export class Node {
    constructor(element) {
        this.element = element;
        this.next = undefined;
    }
}


export class LinkedList {

    constructor() {
        this._count = 0;
        this._head = undefined;
    }

    push(element) {
        const node = new Node(element);
        let current;
        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count;
    }
    removeAt(index) {
        // verifica valores fora do intervalo
        if (index >= 0 && index < this.count) {
            let current = this.head;
            //remove o primeiro item
            if (index === 0) {
                this.head = current.next;
            } else {
                let previous;
                for (let i = 0; i < index; i++) {
                    previous = current;
                    current = current.next;
                }
                // faz a ligação de previous com o next de current: pula esse elemento para removê-lo
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
    getElementAt(index) {
        if (index >= 0 && index <= this.count) {
            let node = this.head;
            for (let i = 0; i < index && node !== null; i++) {
                node = node.next;
            }
            return node;
        }

        return undefined;

    }
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            if (index === 0) { // adiciona na primeira posição
                const current = this.head;
                node.next = current; // {2}
                this.head = node;
            } else {
                const previous = this.getElementAt(index - 1);
                const current = previous.next;
                node.next = current;
                previous.next = node;
            }
            // atualiza o tamanho da lista
            this.count++;
            return true;
        }
        return false;
    }
    indexOf(element) {
        let current = this.head;
        for (let i = 0; i < this.count && current != null; i++) {
            if (element === current.element) {
                return i;
            }
            current = current.next;
        }
        return -1;
    }
    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }
    size() {
        return this.count;
    }

    isEmpty() {
        return this.size() === 0;
    }

    getHead() {
        return this.head;
    }
    toString() {
        if (this.head === null) {
            return '';
        }
        let objString = `${this.head.element}`;
        let current = this.head.next; // {3}
        for (let i = 1; i < this.size() && current !== null; i++) {
            objString = `${objString},${current.element}`;
            current = current.next;
        }
        return objString;
    }
}
module.exports = LinkedList;

let listaLigada = new linkedList();
listaLigada.addAtBeginning("ronaldo")
listaLigada.addAtBeginning("aaaaaaaaaa")
listaLigada.addAtBeginning("pedro")
console.log(listaLigada.toString())

	
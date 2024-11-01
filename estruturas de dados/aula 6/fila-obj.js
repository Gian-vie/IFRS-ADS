class Queue {
    constructor() {
        this.count = 0;
        this.items = {};
    }

    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.count === 0;
    }

    clear() {
        this.count = 0;
        this.items = {};
    }

   
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[0];
        delete this.items[0];
        return result;
    }// NAO TA FUNCIONANDO (como deveria)

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[0];
    }

    toString() {
        if (this.isEmpty()) {
            return ``;
        }
        let objString = `${this.items[0]}`;
        for (let i = 1; i < this.size(); i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }

}

module.exports = Queue;
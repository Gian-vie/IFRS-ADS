class Node {

    constructor(node, element) {
        this._next = node;
        this._element = element;
    }

    setNextElement(node) {
        this._next = node;
    }

    getNextElement() {
        return this._next;
    }

    getElement() {
        return this._element;
    }

}

module.exports = Node;

class Node {
    constructor(key) {
        this._key = key;//valor do item
        this._left = null; //valor do esquerda(menor)
        this._right = null;//valor da direita(maior)
    }
}
module.exports = Node;


class BinarySearchTree {
    constructor() {
        this._root = null;
    }

    insert(key) {
        if (this._root == null) {
            this._root = new Node(key);
        } else {
            this.insertNode(this._root, key);
        }
    }

    insertNode(node, key) {
        if (node._key > key) {
            if (node._left == null) {
                node._left = new Node(key);
            } else {
                this.insertNode(node._left, key);
            }
        } else {
            if (node._right == null) {
                node._right = new Node(key);
            } else {
                this.insertNode(node._right, key);
            }
        }
    }


    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this._root, callback);
    }

    inOrderTraverseNode(node, callback) {
        if (node != null) {
            this.inOrderTraverseNode(node._left, callback);
            callback(node._key);
            this.inOrderTraverseNode(node._right, callback);
        }
    }

    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this._root, callback);
    }

    preOrderTraverseNode(node, callback) {
        if (node != null) {
            callback(node._key);
            this.preOrderTraverseNode(node._left, callback);
            this.preOrderTraverseNode(node._right, callback);
        }
    }
    max() {
        if(this._root === null){
        if (this._root === null) {
            return undefined
        }
        return this.maxNode(this.root);
    }

    maxNode(node) {
        let current = node;
        while (current != null && current._right != null) {
            current = current._right;
        }
        return current._key;
    }

    min() {
        if(this._root === null){
            return undefined;
        }
        return this.minNode(this._root);
    }

    minNode(node) {
        let current = node;
        while (current != null && current._left != null) {
            current = current._left;
        }
        return current._key;
    }

    especifico(){
        
    especific(key) {
        if(this._root === null){
            return undefined;
        }
        return this.especificNode(key);
    }

    insertNode(node, key) {
        if (node._key > key) {
            if (node._left == null) {
                node._left = new Node(key);
            } else {
                this.insertNode(node._left, key);
            }
        } else {
            if (node._right == null) {
                node._right = new Node(key);
            } else {
                this.insertNode(node._right, key);
            }
        }
    }
    especificNode(key) {
        if(key === this._key){
            return this._key
        } else if(key > this._key){
            
        }
    }
}

const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(12);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(14);
tree.insert(20);
tree.insert(25);
tree.insert(18);
const printNode1 = (value) => console.log(value+"aaa"); //função callback
const printNode1 = (value) => console.log(value + "aaa"); //função callback
const printNode = (value) => console.log(value); //função callback


tree.inOrderTraverse(printNode1)
tree.preOrderTraverse(printNode)



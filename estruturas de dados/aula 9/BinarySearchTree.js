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
        if (this._root === null) {
            return undefined;
        }
        return this.minNode(this._root);
    }

    minNode(node) {
        let current = node;
        while (current != null && current._left != null) {
            current = current._left;
        }
        return current;
    }

    //busca para saber se o valor existe na arvore
    search(key) {
        return this.searchNode(this._root, key);
    }

    searchNode(node, key) {
        if (node == null) {
            return false;
        }
        if (node._key > key) {
            return this.searchNode(node._left, key);
        } else if (node._key < key) {
            return this.searchNode(node._right, key);
        } else {
            return true;
        }
    }
    remove(key) {
        const node = this.removeNode(this._root, key);
        if(node){
            console.log(node._left._right)
        } else {
            console.log("n encontrado")
        }
    }

    removeNode(node, key) {
        if (node == null) {
            return null;
        }
        if (node._key > key) {
            node._left = this.removeNode(node._left, key);
            return node;
        } else if (node._key < key) {
            node._right = this.removeNode(node._right, key);
            return node;
        } else {
            // cenario 1             
            if (node._left == null && node._right == null) {
                node = null;
                return node;
            }
            // cenario 2
            if (node._left == null) {
                node = node._right;
                return node;
            } else if (node._right == null) {
                node = node._left;
                return node;
            }
            // cenario 3
            const aux = this.minNode(node._right);
            node._key = aux._key;
            node._right = this.removeNode(node._right, aux._key);
            return node;
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
// const printNode1 = (value) => console.log(value + "aaa"); //função callback
const printNode = (value) => console.log(value); //função callback


// tree.inOrderTraverse(printNode1)
tree.preOrderTraverse(printNode)

// console.log(tree.search(25))
// console.log(tree.remove(25))
// console.log(tree.search(25))
tree.search(15)
tree.remove(15)
console.log(tree.min())
tree.search(15)
tree.preOrderTraverse(printNode)

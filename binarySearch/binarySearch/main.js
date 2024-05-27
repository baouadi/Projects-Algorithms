class BTNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add(val) {
        const newNode = new BTNode(val);
        if (!this.root) {
            this.root = newNode;
        } else {
            this._addHelper(this.root, newNode);
        }
    }

    _addHelper(node, newNode) {
        if (newNode.val < node.val) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this._addHelper(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this._addHelper(node.right, newNode);
            }
        }
    }

    contains(val) {
        return this._containsHelper(this.root, val);
    }

    _containsHelper(node, val) {
        if (!node) {
            return false;
        }
        if (node.val === val) {
            return true;
        } else if (val < node.val) {
            return this._containsHelper(node.left, val);
        } else {
            return this._containsHelper(node.right, val);
        }
    }

    min() {
        if (!this.root) {
            return null;
        }
        let current = this.root;
        while (current.left) {
            current = current.left;
        }
        return current.val;
    }

    max() {
        if (!this.root) {
            return null;
        }
        let current = this.root;
        while (current.right) {
            current = current.right;
        }
        return current.val;
    }

    size() {
        return this._sizeHelper(this.root);
    }

    _sizeHelper(node) {
        if (!node) {
            return 0;
        }
        return 1 + this._sizeHelper(node.left) + this._sizeHelper(node.right);
    }

    isEmpty() {
        return !this.root;
    }
}

// Test cases
const bst = new BST();
bst.add(5);
bst.add(3);
bst.add(7);
bst.add(2);
bst.add(4);
bst.add(6);
bst.add(8);

console.log(bst.contains(6)); // true
console.log(bst.contains(9)); // false
console.log(bst.min()); // 2
console.log(bst.max()); // 8
console.log(bst.size()); // 7
console.log(bst.isEmpty()); // false

'use strict';
const Queue = require('../../Stack and Queue/Stack and queue /stack-and-queue').Queue;
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Binary_Tree {
    constructor(root = null) {
        this.root = root;
    }

    //___________________________________Breadth-first Traversal
    breadth() {
        let result = [];
        let roots = [];
        if (this.root == null) {
            return ('Empty Tree!');
        }
        else {
            roots.push(this.root);
            while (roots.length) {
                const node = roots.shift();
                if (node.left) {
                    roots.push(node.left);
                }
                if (node.right) {
                    roots.push(node.right);
                }
                result.push(node.value);
            }
        }
        return result;
    }
}

//____________________________________________

class Binary_Search_Tree {
    constructor(root = null) {
        this.root = root;
    }

    add(val) {
        let traverse = ((node) => {
            node = new Node(val);
            if (this.root === null) {
                this.root = node;
                return this.root;
            }

            if (this.root.left === null && node.val < this.root.right.val) {
                this.root.left = node;
                traverse(this.root.left);
            }
            if (this.root.right === null && node.val > this.root.left.val) {
                this.root.right = node;
                traverse(this.root.right);
            }
            if (node.val < this.root.left.val) {
                this.root.left = node;
                traverse(this.root.left);
            }
            else {
                this.root.right = node;
                traverse(this.root.right);
            }
        });
        traverse(this.root);
    }
    //____________________________________________

    Contains(val) {
        let node = new Node(val);
        if (this.root === node.val || this.root.left === node.val || this.root.right === node.val) {
            return true;
        }
        else {
            return false;
        }
    }
}


module.exports = { Node, Binary_Tree, Binary_Search_Tree };

'use strict';

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Binary_Tree {
    constructor(root = null) {
        this.root = root;
    }



    inOrder() {
        let array = [];
        let traverse = (node) => {
            if (node.left) {
                traverse(node.left);
            }

            array.push(node.val);

            if (node.right) {
                traverse(node.right);
            }
        };
        traverse(this.root);
        return array;
    }



    findMaximumValue() {
        let maximum = 0;
        if (!this.root) {
            throw new Error('Empty Tree');
        }
        let newArray = this.inOrder();
        for (let index = 0; index < newArray.length; index++) {
            if (maximum < newArray[index]) {
                maximum = newArray[index];
            }
        }
        return maximum;
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

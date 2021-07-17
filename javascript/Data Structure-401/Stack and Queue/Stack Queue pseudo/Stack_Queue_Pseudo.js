'use strict';

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Stack {
    //LIFO
    constructor() {
        this.top = null;
        this.length = 0;
    }


    push(value) {
        const node1 = new Node(value);
        if (this.top === null) {
            this.top = node1;
            this.top.value = value;
        }
        else {
            let current = node1;
            current.value = value;
            current.next = this.top;
            this.top = current;
        }
    }

    pop() {
        if (this.top === null) {
            return ('The stack is Empty');
        }
        else {
            let node1 = this.top.value;
            this.top = this.top.next;
            this.length = this.length - 1;
            return node1;
        }

    }

    peek() {
        if (this.top === null) {
            return ('The stack is Empty, top = null');
        }
        else {
            return this.top.value;
        }
    }


}
//_______________________________________________________________________________

class PseudoQueue {
    constructor() {
        this.stack_1 = new Stack();
        this.stack_2 = new Stack();
    }
    enqueue(value) {
        this.stack_1.push(value);
    }
    dequeue() {

        if (!this.stack_1.top) {
            console.log('The stack is Empty');
        }
        else {
            while (!this.stack_1.top === null) {
                this.stack_2.push(this.stack_1.pop());
            }
            return this.stack_2.pop();
        }
    }
}


module.exports = PseudoQueue;
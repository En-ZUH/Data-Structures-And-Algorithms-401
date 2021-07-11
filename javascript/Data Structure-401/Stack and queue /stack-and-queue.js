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
    }


    push(value) {
        const node1 = new Node(value);
        node1.next = this.top;
        this.top = node1;
        return this;
    }

    pop() {
        if (this.top === null) {
            throw new Error('The stack is Empty');
        }
        let node1 = this.top.next;
        this.top = node1;
        return this;

    }

    peek() {
        if (this.top === null) {
            return ('The stack is Empty, top = null');
        }
        return this.top.value;
    }

    isEmpty() {
        return (this.top === null) ? true : false;
    }
}
//_______________________________________________________________________________

class Queue {
    //FIFO
    constructor() {
        this.front = null;
        this.back = null;

    }


    enqueue(value) {
        const node1 = new Node(value);
        if (this.front === null) {
            this.front = node1;
            this.back = node1;
        }
        else {
            node1.next = this.back;
            this.back = node1;
        }
    }

    dequeue() {
        let node1 = this.back;

        if (this.back === this.front) {
            this.front = null;
            this.back = null;
        }

        else if (this.back === null) {
            return ('The Queue is Empty, back = null');
        }
        else {
            while (node1.next) {
                if (node1.next === this.front) {
                    break;
                }
                node1 = node1.next;
            }
            node1.next = null;
            this.front = node1;
        }
    }


    peek() {
        if (this.back === null) {
            // throw ('The Queue is Empty, back = null');
            return ('The Queue is Empty, back = null');
        }
        return this.front.value;
    }

    isEmpty() {
        return (this.back === null) ? true : false;
    }
}

module.exports = { Stack, Queue };
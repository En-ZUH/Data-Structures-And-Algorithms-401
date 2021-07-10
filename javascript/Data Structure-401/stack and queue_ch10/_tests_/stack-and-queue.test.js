'use strict';

const data = require('../stack-and-queue');

let node1 = new data.Stack();
let node2 = new data.Stack();

let node3 = new data.Queue();
let node4 = new data.Queue();

// Testing Stack

xdescribe('Testing Stack', () => {

    it('Can successfully push onto a stack', () => {
        node1.push('50');
        expect(node1.peek()).toEqual('50');
        expect(node1.top.value).toEqual('50');
        expect(node1.top).toEqual({ 'value': '50', 'next': null });

    });



    it('Can successfully push multiple values onto a stack', () => {
        node1.push('50');
        node1.push('60');

        expect(node1.peek()).toEqual('60');
        expect(node1.top.value).toEqual('60');

        //expect(node1.top).toEqual({ value: '60', 'next': { value: '50', 'next': null } });

    });



    it('Can successfully pop off the stack', () => {
        node1.push('70');
        node1.pop();

        expect(node1.peek()).toEqual('60');
        expect(node1.top.value).toEqual('60');
    });


    it('Can successfully empty a stack after multiple pops', () => {
        node1.pop();
        node1.pop();
        node1.pop();

        expect(node1.top).toEqual(null);
        expect(node1.isEmpty()).toEqual(true);

    });


    it('Can successfully peek the next item on the stack', () => {
        node1.push('A');
        node1.push('B');

        expect(node1.peek()).toEqual('B');
        expect(node1.top.value).toEqual('B');
    });


    it('Can successfully instantiate an empty stack', () => {


        expect(node2.top).toEqual(null);
        expect(node2.top).toBeNull();
    });


    it('Calling pop or peek on empty stack raises exception', () => {
        expect(node2.peek()).toBe('The stack is Empty, top = null');

    });


});

//Testing Queue _________________________________________________

xdescribe('Testing Queue', () => {

    it('Can successfully enqueue into a queue', () => {
        node3.enqueue('A');

        expect(node3.peek()).toEqual('A');
        expect(node3.front.value).toEqual('A');
    });

    it('Can successfully enqueue multiple values into a queue', () => {

        node3.enqueue('B');
        node3.enqueue('C');
        // C B A
        expect(node3.peek()).toEqual('A');
        expect(node3.front.value).toEqual('A');
        expect(node3.back.value).toEqual('C');
    });


    it('Can successfully dequeue out of a queue the expected value', () => {

        node3.dequeue();  //FIFO
        // C B 
        expect(node3.peek()).toEqual('B');
        expect(node3.front.value).toEqual('B');
        expect(node3.back.value).toEqual('C');
    });

    it('Can successfully peek into a queue, seeing the expected value', () => {

        // C B 
        expect(node3.peek()).toEqual('B');

    });

    it('Can successfully empty a queue after multiple dequeues', () => {

        // C B 
        node3.dequeue();
        node3.dequeue();

        expect(node3.isEmpty()).toBe(true);
        expect(node3.isEmpty()).toBeTruthy();
        expect(node3).toEqual({ 'front': null, 'back': null })

    });

    it('Can successfully instantiate an empty queue', () => {

        expect(node4.isEmpty()).toBe(true);
        expect(node4.isEmpty()).toBeTruthy();
        expect(node4).toEqual({ 'front': null, 'back': null })

    });

    it('Calling dequeue or peek on empty queue raises exception', () => {

        // expect(node4.peek()).toToThrowError('The Queue is Empty, back = null');

        expect(node4.peek()).toBe('The Queue is Empty, back = null');

        //expect(node4.isEmpty()).toBeFalsy();
        expect(node4).toEqual({ 'front': null, 'back': null })

    });
});
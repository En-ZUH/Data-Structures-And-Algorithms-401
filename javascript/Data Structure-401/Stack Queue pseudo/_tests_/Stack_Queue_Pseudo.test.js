'use strict';

const PseudoQueue = require('../Stack_Queue_Pseudo');

const pseudoQueue_1 = new PseudoQueue();

let value_1 = 10;
let value_2 = 20;
let value_3 = 30;

describe('PseudoQueue', () => {

    it('Edge Case', () => {


        expect(pseudoQueue_1.enqueue()).toThrowError;
    });


    it('Can successfully push onto a stack_1', () => {

        pseudoQueue_1.enqueue(value_1);

        expect(pseudoQueue_1.stack_1.top.value).toEqual(10);
    });


    it('Happy Path/ Can successfully push multiple values to stack_1', () => {

        pseudoQueue_1.enqueue(value_1);
        pseudoQueue_1.enqueue(value_2);

        expect(pseudoQueue_1.stack_1.top.value).toBe(20);
    });


    it('Can successfully return the pop value of stack_2', () => {

        pseudoQueue_1.enqueue(value_1);
        pseudoQueue_1.enqueue(value_2);
        pseudoQueue_1.enqueue(value_3);

        pseudoQueue_1.dequeue();

        expect(pseudoQueue_1.stack_2.top).toBe(null);
    });

    it('Expected failure/Return Error message when dequeue empty queue', () => {

        expect(pseudoQueue_1.dequeue()).toBe('The stack is Empty');

    });
});
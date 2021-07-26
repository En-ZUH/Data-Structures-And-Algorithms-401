'use strict';


const { expect, describe, it } = require('@jest/globals');
const { Node, Binary_Tree, Binary_Search_Tree } = require('../../Max Tree/MaxTree');

let tree = null;

describe('Tree', () => {
    beforeAll(() => {
        const one = new Node(1);//Root
        const two = new Node(2);
        const three = new Node(3);
        const four = new Node(4);
        const five = new Node(5);
        const six = new Node(6);
        const seven = new Node(7);
        const eight = new Node(8);
        const nine = new Node(9);

        one.left = two;
        one.right = three;
        two.left = six;
        six.right = seven;
        seven.left = eight;
        seven.right = nine;
        three.left = four;
        three.right = five;

        tree = new Binary_Tree(one);
    });

    // Binary Tree Max Value
    it('Happy Path : should return the maximum value in a binary tree', () => {
        let expected = 9;
        let findMaximumValue = tree.findMaximumValue();
        expect(findMaximumValue).toBe(expected);
    });


    //'expected failure : Binary Tree Max Value' 
    it('should return an error', () => {
        let tree = new Binary_Tree();

        expect(tree.findMaximumValue).toThrowError;
    });


    //'Edge cases : Binary Tree Max Value' 
    it('should ', () => {
        let tree = new Binary_Search_Tree();
        expect(tree.findMaximumValue).toThrowError;
    });


});


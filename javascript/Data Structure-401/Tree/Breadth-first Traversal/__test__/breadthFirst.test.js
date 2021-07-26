'use strict';
const { expect, describe, it } = require('@jest/globals');
const { Node, Binary_Tree, Binary_SearchTree } = require('../breadthFirst');


let tree = null;

describe('Tree', () => {
    beforeAll(() => {
        let one = new Node(5);// tree root
        let two = new Node(2);
        let three = new Node(7);
        let four = new Node(4);
        let five = new Node(11);
        let six = new Node(20);
        let seven = new Node(15);
        let eight = new Node(8);
        let nine = new Node(1);

        one.left = two;//
        one.right = three;//
        two.left = six;//
        six.right = seven;
        seven.left = eight;
        seven.right = nine;
        three.left = four;
        three.right = five;

        tree = new Binary_Tree(one);
    });

    it('can successfully return a collection from a breadth traversal', () => {
        let expected = [5, 2, 7, 20, 4, 11, 15, 8, 1];

        console.log('  ExpecteD ', expected);
        console.log('tree.breadth()==== ', tree.breadth());
        let breadth = tree.breadth();
        expect(breadth).toStrictEqual(expected);
    });

    it('can successfully return exception if the tree is empty when invoking breadth method', () => {
        let emptyTree = new Binary_Tree();
        let expected = 'Empty Tree!';
        let breadth = emptyTree.breadth();

        // console.log('  ExpecteD ', expected);
        // console.log('tree.breadth()==== ', emptyTree.breadth());

        expect(breadth).toBe(expected);
    });

});



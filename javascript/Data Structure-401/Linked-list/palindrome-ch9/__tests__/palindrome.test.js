'use strict';

const isPalindrome = require('../palindrome');
const LinkedList = require('../../linkedList');




describe('palindrome linked list', () => {

    it('should return true for palindrome list', () => {
        let list = new LinkedList();

        list.append(1);
        list.append(2);
        list.append(2);
        list.append(1);

        //assert
        expect(isPalindrome(list.head)).toBe(true);
    });

    it('should handle odd linked list', () => {
        let list = new LinkedList();

        list.append(1);
        list.append(3);
        list.append(2);
        list.append(3);
        list.append(1);
        expect(isPalindrome(list.head)).toBe(true);
    });

    it('should return false for even non palindrome linked-list', () => {

        let list = new LinkedList();

        list.insert(1);
        list.insert(2);
        list.insert(3);
        list.insert(4);
        expect(isPalindrome(list.head)).toBe(false);
    });
    it('should return false for even non palindrome linked-list', () => {
        let list = new LinkedList();


        list.insert(1);
        list.insert(2);
        list.insert(3);
        list.insert(4);
        list.insert(5);
        expect(isPalindrome(list.head)).toBe(false);
    });
    it('should handle empty list ', () => {
        let list = new LinkedList();


        expect(isPalindrome(list.head)).toBe(true);
    });
    it('should handle list with one node', () => {
        let list = new LinkedList();

        list.insert(5);
        expect(isPalindrome(list.head)).toBe(true);
    });
});
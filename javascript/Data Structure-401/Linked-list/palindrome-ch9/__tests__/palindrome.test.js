'use strict';

const isPalindrome = require('../palindrome');
const Linkedlist = require('../../linked-list');

let list11 = new Linkedlist();


xdescribe('palindrome linked list', () => {

    it('should return true for palindrome list', () => {


        list1.append(1); s
        list1.append(2);
        list1.append(2);
        list1.append(1);

        //assert
        expect(isPalindrome(list1.head)).toBe(true);
    });
    it('should handle odd linked list', () => {

        list1.append(1);
        list1.append(3);
        list1.append(2);
        list1.append(3);
        list1.append(1);
        expect(isPalindrome(list1.head)).toBe(true);
    });
    it('should return false for even non palindrome linked-list', () => {


        list1.insert(1);
        list1.insert(2);
        list1.insert(3);
        list1.insert(4);
        expect(isPalindrome(list1.head)).toBe(false);
    });
    it('should return false for even non palindrome linked-list', () => {


        list1.insert(1);
        list1.insert(2);
        list1.insert(3);
        list1.insert(4);
        list1.insert(5);
        expect(isPalindrome(list1.head)).toBe(false);
    });
    it('should handle empty list ', () => {


        expect(isPalindrome(list1.head)).toBe(true);
    });
    it('should handle list with one node', () => {

        list1.insert(5);
        expect(isPalindrome(list1.head)).toBe(true);
    });
});
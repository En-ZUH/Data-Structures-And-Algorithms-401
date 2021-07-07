"use strict";

const LinkedList = require("../../linked-list");
const isPalindrome = require("../palindrome");
var linkedList = new LinkedList();
describe("palindrome linked list", () => {

    it("should return true for palindrome linkedlist", () => {


        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(2);
        linkedList.append(1);

        //assert
        expect(isPalindrome(linkedList.head)).toBe(true);
    });
    it("should handle odd linked list", () => {

        linkedList.append(1);
        linkedList.append(3);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(1);
        expect(isPalindrome(linkedList.head)).toBe(true);
    });
    it("should return false for even non palindrome linked-list", () => {


        linkedList.insert(1);
        linkedList.insert(2);
        linkedList.insert(3);
        linkedList.insert(4);
        expect(isPalindrome(linkedList.head)).toBe(false);
    });
    it("should return false for even non palindrome linked-list", () => {


        linkedList.insert(1);
        linkedList.insert(2);
        linkedList.insert(3);
        linkedList.insert(4);
        linkedList.insert(5);
        expect(isPalindrome(linkedList.head)).toBe(false);
    });
    it("should handle empty list", () => {


        expect(isPalindrome(linkedList.head)).toBe(true);
    });
    it("should handle list with one node", () => {

        linkedList.insert(5);
        expect(isPalindrome(linkedList.head)).toBe(true);
    });
});
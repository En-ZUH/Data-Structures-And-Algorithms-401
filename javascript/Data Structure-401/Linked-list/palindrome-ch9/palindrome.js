"use strict";

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
    }

    isPalindrome(head) {
        let fast = head;
        let slow = head;
        while (fast !== null && fast.next !== null) {
            fast = fast.next.next;
            slow = slow.next;
        }
        fast = head;
        slow = reverse(slow);
        while (slow !== null) {
            if (slow.value !== fast.value) {
                return false;
            }
            fast = fast.next;
            slow = slow.next;
        } return true;
    }
    reverse(head) {
        let prevNode = null;
        while (head !== null) {
            let nextNode = head.next;
            head.next = prevNode;
            prevNode = head;
            head = nextNode;
        }
        return prevNode;
    }
}
module.exports = LinkedList;
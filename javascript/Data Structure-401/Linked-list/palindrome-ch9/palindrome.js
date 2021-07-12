"use strict";


function isPalindrome(head) {
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
    }
    return true;
}

function reverse(head) {
    let preveiousNode = null;
    while (head !== null) {
        let nextNode = head.next;
        head.next = preveiousNode;
        preveiousNode = head;
        head = nextNode;
    }
    return preveiousNode;
}

module.exports = isPalindrome;
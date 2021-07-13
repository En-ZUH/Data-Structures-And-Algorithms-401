// 'use strict';

const LinkedList = require('../linkedList');

function zip_lists(list_1, list_2) {
    let zip_lists = new LinkedList();
    let linkedList_1 = list_1.head;
    let linkedList_2 = list_2.head;
    if (list_1 === null && list_2 === null) {
        return "Exception";
    }
    else {
        while (linkedList_1 || linkedList_2) {
            if (linkedList_1) {
                zip_lists.append(linkedList_1.value);
                linkedList_1 = linkedList_1.next;
            }
            if (linkedList_2) {
                zip_lists.append(linkedList_2.value);
                linkedList_2 = linkedList_2.next;
            }
        }
        return zip_lists.toString();
    }
}
module.exports = zip_lists;


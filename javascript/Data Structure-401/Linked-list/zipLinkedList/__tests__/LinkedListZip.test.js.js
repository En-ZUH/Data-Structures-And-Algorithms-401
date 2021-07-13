'use strict';

const LinkedList = require('../../linkedList');
const zip_lists = require('../linkedListZip');


describe('linked-lists-zip', () => {


    it('Can return zipList with same length of two lists', () => {
        //arrange
        let list_1 = new LinkedList();
        let list_2 = new LinkedList();
        list_1.insert(3);
        list_1.insert(1);
        list_2.insert(4);
        list_2.insert(2);

        //act
        let zippedList = zip_lists(list_1, list_2);
        console.log('list_1', list_1.toString(), '/// list_2', list_2.toString(), '///zippedList', zip_lists(list_1, list_2).toString);
        expect(zippedList.toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> {4} -> NULL');


    });
    it('Can return zipList with different length of two lists list_1<list_2', () => {
        //arrange
        let list_1 = new LinkedList();
        let list_2 = new LinkedList();
        list_1.insert(1);
        list_1.insert(2);
        list_2.insert(3);
        list_2.insert(4);
        list_2.insert(5);
        //act
        let zippedList = zip_lists(list_1, list_2);
        //assert
        console.log('list_1', list_1.toString(), '/// list_2', list_2.toString(), '///zippedList', zip_lists(list_1, list_2).toString());
        expect(zippedList.toString()).toEqual('{ 2 } -> { 5 } -> { 1 } -> { 4 } -> {3} -> NULL');

    });
    it('Can return zipList with different length of two lists list_1>list_2', () => {

        let list_1 = new LinkedList();
        let list_2 = new LinkedList();
        list_1.insert(1);
        list_1.insert(2);
        list_1.insert(3);
        list_2.insert(4);
        list_2.insert(5);


        let zippedList = zip_lists(list_1, list_2);

        console.log('list_1', list_1.toString(), '/// list_2', list_2.toString(), '///zippedList', zip_lists(list_1, list_2).toString());

        expect(zippedList.toString()).toEqual('{ 3 } -> { 5 } -> { 2 } -> { 4 } -> {1} -> NULL');

    });
    it('should throw an error with empty linked list', () => {

        let list_1 = new LinkedList();
        let list_2 = new LinkedList();

        let zippedList = zip_lists(list_1, list_2);
        console.log('list_1', list_1.toString(), '/// list_2', list_2.toString(), '///zippedList', zip_lists(list_1, list_2).toString());
        expect(zippedList).toBe("");

    });
});
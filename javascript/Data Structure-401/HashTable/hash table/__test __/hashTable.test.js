'use strict';
const { HashTable } = require('../hashTable');

describe('HashTable', () => {

    it('Adding a key/value to your hashtable results in the value being in the data structure', () => {

        let hashTable = new HashTable(1021);
        hashTable.add('Enas', 'Zuhair');

        expect(hashTable.contains('Enas')).toEqual(true);
    });

    it('Retrieving based on a key returns the value stored', () => {

        let hashTable = new HashTable(1021);
        hashTable.add('Enas', 'Zuhair');

        expect(hashTable.get('Enas')).toEqual([{ 'Enas': 'Zuhair' }]);
    });

    it('Successfully returns null for a key that does not exist in the hashtable', () => {

        let hashTable = new HashTable(1021);
        hashTable.add('Enas', 'Zuhair');

        expect(hashTable.get('Lana')).toEqual(null);

    });

    it('Successfully handle a collision within the hashtable', () => {

        let hashTable = new HashTable(1021);
        hashTable.add('Sweets', 'cake');
        hashTable.add('fruits', 'apple');

        expect(hashTable.get('Sweets')).toEqual([{ 'Sweets': 'cake' }]);
    });

    it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {

        let hashTable = new HashTable(1021);
        hashTable.add('Sweets', 'cake');
        hashTable.add('fruits', 'apple');

        expect(hashTable.getOne('fruits')).toEqual({ 'fruits': 'apple' });
    });

    it('Successfully hash a key to an in-range value', () => {

        let hashTable = new HashTable(1021);

        expect(hashTable.hash('Sweets')).toEqual(553);
    });

});
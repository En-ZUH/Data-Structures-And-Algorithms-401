'use strict';
const { HashTable } = require('../hash table/hashTable');


function findRepeated(string) {
    if ((typeof string !== 'string') || (string === null)) {
        throw 'Please enter a string input!';
    }

    const wordsArray = string.toLowerCase().split(/\W+/g);
    let hastTable = new HashTable(wordsArray.length);

    for (let i in wordsArray) {
        if (hastTable.contains(wordsArray[i]))
            return wordsArray[i];
        else
            hastTable.add(wordsArray[i], wordsArray[i]);
    }
    return 'No repeated words found!';
}


module.exports = { findRepeated };

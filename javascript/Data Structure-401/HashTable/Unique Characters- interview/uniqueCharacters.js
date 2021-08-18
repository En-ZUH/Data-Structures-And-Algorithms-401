'use strict';
const { HashTable } = require('../hash table/hashTable');

function uniqueCharacter(string) {

    let hashTable = new HashTable(1024);
    stringArr = string.toLowerCase().split('');

    let wordsArray = stringArr.filter(item => {
        return item !== ' ';
    });

    if (wordsArray.length) {

        for (let item of wordsArray) {

            if (!myhash.contains(item)) {
                myhash.set(item, item);
            } else return false;

        }
        return true;
    } else return 'invalid string';
}

module.exports = uniqueCharacter;
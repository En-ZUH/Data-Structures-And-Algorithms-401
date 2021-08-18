'use strict';
const { findRepeated } = require('../hashmap-repeated-word');

describe('Repeated Word', () => {

    it('Should successfully return first repeated word', () => {

        let test = 'Try to succes time after time!';

        expect(findRepeated(test)).toEqual('time');
    });
    it('Should successfully return first repeated word', () => {

        let test = 'you are smart, you are kind, you are important!';

        expect(findRepeated(test)).toEqual('you');
    });

    it('Should return that there is no repeated words', () => {

        let test = 'cake is my lovely kind of sweets';

        expect(findRepeated(test)).toEqual('No repeated words found!');
    });

    it('Should throw an exception if input is not a string', () => {


        expect(() => findRepeated(10)).toThrow('Please enter a string input!');
    });

    it('Should throw an exception if input is a null', () => {


        expect(() => findRepeated()).toThrow('Please enter a string input!');
    });

});
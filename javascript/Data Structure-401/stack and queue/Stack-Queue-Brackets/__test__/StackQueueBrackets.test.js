'use strict';

const validateBrackets = require('../stackQueueBrackets');

describe('validateBrackets Test', () => {
    it('Happy Path” - Expected outcome', () => {
        expect(validateBrackets('[]')).toEqual(true);
        expect(validateBrackets('{{(welcome)}}')).toBeTruthy();
        expect(validateBrackets('()')).toBeTruthy();
        expect(validateBrackets('{}([]){}')).toBeTruthy();
        expect(validateBrackets('()[[401]]')).toBeTruthy();
        expect(validateBrackets('{}')).toBeTruthy();
    });
    it('Expected failure', () => {
        expect(validateBrackets('()[401]]')).toBeFalsy();
        expect(validateBrackets('{()}(')).toBeFalsy();
    });
    it('Edge Case', () => {
        expect(validateBrackets()).toEqual('please enter a valid symbols');
    });
});
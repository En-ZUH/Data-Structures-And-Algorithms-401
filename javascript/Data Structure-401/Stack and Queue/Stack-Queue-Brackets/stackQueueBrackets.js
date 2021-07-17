'use strict';
const Stack = require('../Stack and queue /stack-and-queue');

function validateBrackets(symbols) {

    const stack_1 = new Stack.Stack();

    if (symbols) {
        for (let i = 0; i < symbols.length; i++) {
            if (symbols[i] === '(' || symbols[i] === '[' || symbols[i] === '{') {
                stack_1.push(symbols[i]);
            }
            else {
                if (symbols[i] === ')' || symbols[i] === ']' || symbols[i] === '}') {
                    let bracket;
                    if (symbols[i] === ')') {
                        bracket = '(';
                    }
                    if (symbols[i] === ']') {
                        bracket = '[';
                    }
                    if (symbols[i] === '}') {
                        bracket = '{';
                    }
                    if (bracket === stack_1.peek()) {
                        stack_1.pop();
                    }
                    else {
                        return false;
                    }
                }
            }
        }
        if (stack_1.isEmpty()) { return true }
        else { return false; }
    } else { return 'please enter a valid symbols'; }
}
module.exports = validateBrackets;
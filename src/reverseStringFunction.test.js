/* global test, expect */

import reverseString from './reverseStringFunction';

test('reverseString returns', () => {
    expect(reverseString()).toHaveReturned();
});

test('reverseString returns string', () => {
    expect(typeof reverseString()).toBe('string');
});

test('reverseString returns string of same length', () => {
    expect(reverseString('word').length).toBe('word'.length);
});

test('reverseString returns string with it character in reverse order', () => {
    expect(reverseString('word')).toBe('drow');
});
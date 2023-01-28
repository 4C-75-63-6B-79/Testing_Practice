/* global test, expect */

import reverseString from './reverseStringFunction';

test('reverseString returns', () => {
    expect(reverseString()).not.toBeFalsy();
});

test('reverseString returns string', () => {
    expect(typeof reverseString()).toBe('string');
});

test('reverseString returns string of same length', () => {
    expect(reverseString('word').length).toBe('word'.length);
});

test('reverseString returns string of same length', () => {
    expect(reverseString('wordly').length).toBe('wordly'.length);
});


test('reverseString returns string with it character in reverse order', () => {
    expect(reverseString('word')).toBe('drow');
});


test('reverseString returns string with it character in reverse order', () => {
    expect(reverseString('women')).toBe('nemow');
});

test('reverseString returns string with it character in reverse order', () => {
    expect(reverseString('truecat')).toBe('taceurt');
});
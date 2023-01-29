/* global test, expect */

import ceaserCipher from "./ceaserCipherFunction";

test('takes a string argument always else returns "provide a string argument"', () => {
    expect(ceaserCipher()).toBe('provide a string argument');
});

test('when ceaser cipher given just a string argument should return string as it is', () => {
    expect(ceaserCipher('anything string')).toBe('anything string');
});

test('second parameter should always be a integer', () => {
    expect(ceaserCipher('anything string', '')).toBe('provide a whole integer value as shift factor');
});

test('second parameter should always be a integer', () => {
    expect(ceaserCipher('anything string', 0.25)).toBe('provide a whole integer value as shift factor');
});

test('when provided with valid arguments should return string with the values rotated by shift value', () => {
    expect(ceaserCipher('a', 2)).toBe('c');
});

test('ceaser cipher keeps the capital letters capital and small letter small after rotation', () => {
    expect(ceaserCipher('AaBbCc', 2)).toBe('CcDdEe');
});

test('ceaser cipher only rotates only alphabets and keeps every thing same that is numbers and punctuation and spaces', () => {
    expect(ceaserCipher('AaBbCc0123 AAA', 2)).toBe('CcDdEe0123 CCC');
});

test('ceaser cipher wraps over that is if current letter is z and shift value is 1 return a', () => {
    expect(ceaserCipher('zZ', 2)).toBe('bB');
});



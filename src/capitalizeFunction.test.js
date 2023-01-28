/* global test, expect */

import capitalize from './capitalizeFunction';

test('capitalize should return string', () => {
    expect(typeof capitalize('letter')).toBe('string');
});

test('capitalize should return string of original length', () => {
    expect(capitalize('letter').length).toBe('letter'.length);
});

test('capitalize should return a string with first letter capital', () => {
    expect(capitalize('letter')).toBe('Letter');
});

test('capitalize should not modify any other character in string', () => {
    expect(capitalize('lettEr')).toBe('LettEr');
});
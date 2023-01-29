/* global test, expect */

import analyzeArray from './analyzeArrayFunction';

test('analyze array function takes array as input else return provide an array', () => {
    expect(analyzeArray()).toBe('provide an array');
});

test('analyze array function takes an array whose all values are number', () => {
    expect(analyzeArray([1, '2'])).toBe('provide an array with all elements as numbers');
});

test('analyze array function returns an object when provide an array', () => {
    expect(analyzeArray([]) && analyzeArray([]).constructor === Object).toBe(true);
});

test('analyze array function should return an object which has only 4 properties', () => {
    expect(analyzeArray([]) && Object.keys(analyzeArray([])).length === 4).toBe(true); 
});

test('analyze array function should return an object which has average as its own property', () => {
    expect(analyzeArray([]) && Object.hasOwnProperty.call(analyzeArray([]), 'average')).toBe(true);
});

test('analyze array function should return an object which has min as its own property', () => {
    expect(analyzeArray([]) && Object.hasOwnProperty.call(analyzeArray([]), 'min')).toBe(true);
});

test('analyze array function should return an object which has max as its own property', () => {
    expect(analyzeArray([]) && Object.hasOwnProperty.call(analyzeArray([]), 'max')).toBe(true);
});

test('analyze array function should return an object which has length as its own property', () => {
    expect(analyzeArray([]) && Object.hasOwnProperty.call(analyzeArray([]), 'length')).toBe(true);
});

test('analyze array function should return an object which has average as its own property whose value should be null when empty array is sent', () => {
    expect(analyzeArray([]) && analyzeArray([]).average === null).toBe(true);
});

test('analyze array function should return an object which has min as its own property whose value should be null when empty array is sent', () => {
    expect(analyzeArray([]) && analyzeArray([]).min === null).toBe(true);
});

test('analyze array function should return an object which has max as its own property whose value should be null when empty array is sent', () => {
    expect(analyzeArray([]) && analyzeArray([]).max === null).toBe(true);
});

test('analyze array function should return an object which has length as its own property whose value should be length of array', () => {
    expect(analyzeArray([]) && analyzeArray([]).length === [].length ).toBe(true);
});

test('analyze array function should return an object with calculated values when array with no zero length sent', () => {
    const arr = [1,3,4,5,6,7];
    expect(analyzeArray(arr)).toStrictEqual({
        average: arr.reduce((sum, ele) => sum + ele, 0) / arr.length,
        min: arr.sort((a, b) => a - b)[0],
        max: arr.sort((a, b) => a - b)[arr.length-1],
        length: arr.length
    });
});

test('analyze array function should return an object with calculated values when array with no zero length sent', () => {
    const arr = [1,3,1,51,5,1,56,1,66,1,7,0,4,5,6,7];
    expect(analyzeArray(arr)).toStrictEqual({
        average: arr.reduce((sum, ele) => sum + ele, 0) / arr.length,
        min: arr.sort((a, b) => a - b)[0],
        max: arr.sort((a, b) => a - b)[arr.length-1],
        length: arr.length
    });
});

test('analyze array function should return an object with calculated values when array with no zero length sent', () => {
    const arr = [1,3,4,5,4,5,6,4,7,7,8,989,8,8,555,8,5,2,5,8,884,41,6,7];
    expect(analyzeArray(arr)).toStrictEqual({
        average: arr.reduce((sum, ele) => sum + ele, 0) / arr.length,
        min: arr.sort((a, b) => a - b)[0],
        max: arr.sort((a, b) => a - b)[arr.length-1],
        length: arr.length
    });
});
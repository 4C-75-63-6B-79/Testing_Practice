/* global test, expect */

import getCalculator, { Calculator } from './calculatorFunction';

test('getCalculator returns a truthy value', () => {
    expect(getCalculator()).not.toBeFalsy();
});

test('getCalculator returns a object of Calculator', () => {
    expect(Object.prototype.isPrototypeOf.call(Calculator.prototype, getCalculator())).toBe(true);
});

test('getCalculator returns a object whose prototype has property add', () => {
    expect(getCalculator().add).not.toBeUndefined();
});

test('getCalculator returns a object whose prototype has property subtract', () => {
    expect(getCalculator().subtract).not.toBeUndefined();
});

test('getCalculator returns a object whose prototype has property multiply', () => {
    expect(getCalculator().multiply).not.toBeUndefined();
});

test('getCalculator returns a object whose prototype has property divide', () => {
    expect(getCalculator().divide).not.toBeUndefined();
});

test('getCalculator returns a object whose inherited property add return number', () => {
    expect(getCalculator().add()).not.toBeNaN();
});

test('getCalculator returns a object whose inherited property subtract return number', () => {
    expect(getCalculator().subtract()).not.toBeNaN();
});

test('getCalculator returns a object whose inherited property divide return number', () => {
    expect(getCalculator().multiply()).not.toBeNaN();
});

test('getCalculator returns a object whose inherited property multiply return number', () => {
    expect(getCalculator().divide()).not.toBeNaN();
});

test('getCalculator returns a object whose property add if given 0 arguments and returns 0', () => {
    expect(getCalculator().add()).toBe(0);
});

test('getCalculator returns a object whose property add takes a 1 integer arguments and returns the integer', () => {
    expect(getCalculator().add(4)).toBe(4);
});

test('getCalculator returns a object whose property add takes a 2 integer arguments and returns their sum', () => {
    expect(getCalculator().add(4, 5)).toBe(4+5);
});

test('getCalculator returns a object whose property add takes a 2 integer arguments and returns their sum', () => {
    expect(getCalculator().add(7, 5)).toBe(7+5);
});

test('getCalculator returns a object whose property add takes a 2 integer arguments and returns their sum', () => {
    expect(getCalculator().add(4, 15)).toBe(4+15);
});

test('getCalculator returns a object whose property add when given non integer arguments return "add takes atmost 2 integer arguments" ', () => {
    expect(getCalculator().add(4, '5')).toBe('add takes atmost 2 integer arguments');
});

test('getCalculator returns a object whose property subtract when given 0 integer arguments and returns 0', () => {
    expect(getCalculator().subtract()).toBe(0);
});

test('getCalculator returns a object whose property subtract takes a 1 integer arguments and returns the integer', () => {
    expect(getCalculator().subtract(4)).toBe(4);
});

test('getCalculator returns a object whose property subtract takes a 2 integer arguments and returns their difference integer', () => {
    expect(getCalculator().subtract(4, 5)).toBe(4-5);
});

test('getCalculator returns a object whose property subtract takes a 2 integer arguments and returns their difference integer', () => {
    expect(getCalculator().subtract(7, 5)).toBe(7-5);
});

test('getCalculator returns a object whose property subtract takes a 2 integer arguments and returns their difference integer', () => {
    expect(getCalculator().subtract(4, 15)).toBe(4-15);
});

test('getCalculator returns a object whose property subtract when given non integer arguments return "subtract takes atmost 2 integer arguments" ', () => {
    expect(getCalculator().subtract(4, '5')).toBe('subtract takes atmost 2 integer arguments');
});

test('getCalculator returns a object whose property multiply when given 0 integer arguments and returns 0', () => {
    expect(getCalculator().multiply()).toBe(0);
});

test('getCalculator returns a object whose property multiply takes a 1 integer arguments and returns the integer * 0', () => {
    expect(getCalculator().multiply(4)).toBe(0);
});

test('getCalculator returns a object whose property multiply takes a 2 integer arguments and returns their product integer', () => {
    expect(getCalculator().multiply(4, 5)).toBe(4*5);
});

test('getCalculator returns a object whose property multiply takes a 2 integer arguments and returns their product integer', () => {
    expect(getCalculator().multiply(7, 5)).toBe(7*5);
});

test('getCalculator returns a object whose property multiply takes a 2 integer arguments and returns their product integer', () => {
    expect(getCalculator().multiply(4, 15)).toBe(4*15);
});

test('getCalculator returns a object whose property multiply when given non integer arguments return "multiply takes atmost 2 integer arguments" ', () => {
    expect(getCalculator().multiply(4, '5')).toBe('multiply takes atmost 2 integer arguments');
});

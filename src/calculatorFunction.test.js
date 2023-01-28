/* global test, expect */

import getCalculator from './calculatorFunction';

test('getCalculator returns a truthy value', () => {
    expect(getCalculator()).not.toBeFalsy();
})
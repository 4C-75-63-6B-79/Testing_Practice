function Calculator() {

}

Calculator.prototype.add = function add(x=0, y=0) {
    return Number.isInteger(x) && Number.isInteger(y) ? x + y : 'add takes atmost 2 integer arguments';
}

Calculator.prototype.subtract = function subtract(x=0, y=0) {
    return Number.isInteger(x) && Number.isInteger(y) ? x - y : 'subtract takes atmost 2 integer arguments';
}

Calculator.prototype.multiply = function multiply(x=0, y=0) {
    return Number.isInteger(x) && Number.isInteger(y) ? x * y : 'multiply takes atmost 2 integer arguments';
}

Calculator.prototype.divide = function divide(x=0, y=0) {
    return Number.isInteger(x) && Number.isInteger(y) ? x / y : 'divide takes atmost 2 integer arguments';
}

export default function getCalculator() {
    const obj = new Calculator();
    return obj;
}

export {Calculator};
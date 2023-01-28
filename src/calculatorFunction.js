function Calculator() {

}

Calculator.prototype.add = function add(x=0, y=0) {
    return Number.isInteger(x) && Number.isInteger(y) ? x + y : 'add takes atmost 2 integer arguments';
}

Calculator.prototype.subtract = function subtract(x=0, y=0) {
    return Number.isInteger(x) && Number.isInteger(y) ? x - y : 'subtract takes atmost 2 integer arguments';
}

Calculator.prototype.multiply = function multiply() {
    return 0;
}

Calculator.prototype.divide = function divide(x=0, y=1) {
    return 0;
}

export default function getCalculator() {
    const obj = new Calculator();
    return obj;
}

export {Calculator};
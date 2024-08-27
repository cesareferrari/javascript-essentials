// wrapping functions inside a IIFE
// return an object with the functions

let calculator = (function () {

  function add (num1, num2) {
    return num1 + num2;
  }

  function subtract (num1, num2) {
    return num1 - num2;
  }

  function multiply (num1, num2) {
    return num1 * num2;
  }

  function divide (num1, num2) {
    return num1 / num2;
  }

  return {add, subtract, multiply, divide};
})();


console.log(calculator.add(3, 4));
console.log(calculator.subtract(3, 4));
console.log(calculator.multiply(3, 4));
console.log(calculator.divide(3, 4));

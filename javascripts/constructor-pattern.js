let Calculator = (function () {

  /**
   * Create the constructor object
   */
  function Constructor (num = 0) {
    this.total = num;
  }

  /**
 * Add two or more numbers together
 * @param {...Number} nums The numbers to add
 */
  Constructor.prototype.add = function (...nums) {

    // loop through each number and do math
    for (let num of nums) {
      this.total = this.total + num;
    }

    return this.total;
  }

  return Constructor;

})();


let age = new Calculator(30);
let weight = new Calculator(145);
let nothing = new Calculator(); // default value of zero

console.log(age.total);
console.log(weight.total);
console.log(nothing.total);

// modify total
age.total = 25;

console.log("New age: ", age.total);


let myAge = new Calculator(64);
console.log(myAge.total);

myAge.add(1, 2, 3);
console.log(myAge.total);

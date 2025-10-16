/**
 * A simple calculator class with basic arithmetic operations.
 */
class Calculator {
  /**
   * Adds two numbers.
   * @param {number} a
   * @param {number} b
   * @returns {number} The sum of a and b.
   */
  add(a, b) {
    return a + b;
  }

  /**
   * Subtracts the second number from the first.
   * @param {number} a
   * @param {number} b
   * @returns {number} The result of a - b.
   */
  subtract(a, b) {
    return a - b;
  }

  /**
   * Multiplies two numbers.
   * @param {number} a
   * @param {number} b
   * @returns {number} The product of a and b.
   */
  multiply(a, b) {
    return a * b;
  }

  /**
   * Divides the first number by the second.
   * @param {number} a
   * @param {number} b
   * @returns {number} The result of a / b.
   * @throws {Error} if b is 0.
   */
  divide(a, b) {
    if (b === 0) {
      throw new Error('Division by zero is not allowed.');
    }
    return a / b;
  }
}

module.exports = Calculator;
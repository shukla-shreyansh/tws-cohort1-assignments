const Calculator = require('./Calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('should add two numbers correctly', () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.add(-1, 1)).toBe(0);
    expect(calculator.add(0, 0)).toBe(0);
  });

  test('should subtract two numbers correctly', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.subtract(3, 5)).toBe(-2);
    expect(calculator.subtract(10, 10)).toBe(0);
  });

  test('should multiply two numbers correctly', () => {
    expect(calculator.multiply(2, 4)).toBe(8);
    expect(calculator.multiply(-3, 5)).toBe(-15);
    expect(calculator.multiply(10, 0)).toBe(0);
  });

  test('should divide two numbers correctly', () => {
    expect(calculator.divide(10, 2)).toBe(5);
    expect(calculator.divide(-15, 3)).toBe(-5);
  });

  test('should throw an error when dividing by zero', () => {
    expect(() => calculator.divide(10, 0)).toThrow('Division by zero is not allowed.');
  });
});
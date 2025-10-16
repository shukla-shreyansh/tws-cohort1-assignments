const isPrime = require('./isPrime');

describe('isPrime', () => {
  test('should return true for prime numbers', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(11)).toBe(true);
    expect(isPrime(97)).toBe(true);
  });

  test('should return false for non-prime numbers', () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(100)).toBe(false);
  });

  test('should return false for numbers less than or equal to 1', () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(0)).toBe(false);
    expect(isPrime(-5)).toBe(false);
  });

  test('should return false for non-integer or non-number inputs', () => {
    expect(isPrime(5.5)).toBe(false);
    expect(isPrime('7')).toBe(false);
    expect(isPrime(null)).toBe(false);
  });
});
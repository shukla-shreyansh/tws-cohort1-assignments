/**
 * Checks if a number is a prime number.
 * A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
 *
 * @param {number} num The number to check.
 * @returns {boolean} True if the number is prime, false otherwise.
 */
function isPrime(num) {
  // Prime numbers must be natural numbers greater than 1.
  if (typeof num !== 'number' || !Number.isInteger(num) || num <= 1) {
    return false;
  }

  // 2 is the only even prime number.
  if (num === 2) {
    return true;
  }

  // Check for divisibility from 2 up to the square root of the number.
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

module.exports = isPrime;
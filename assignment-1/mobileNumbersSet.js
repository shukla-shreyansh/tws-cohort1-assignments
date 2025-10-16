/**
 * Generates a random 10-digit mobile number as a string.
 * @returns {string} A random 10-digit number.
 */
function generateRandomMobileNumber() {
  // Start with a digit from 7 to 9 to simulate a valid Indian mobile number
  const firstDigit = Math.floor(Math.random() * 3) + 7;
  let number = '' + firstDigit;
  for (let i = 0; i < 9; i++) {
    number += Math.floor(Math.random() * 10);
  }
  return number;
}

const mobileNumbers = new Set();

console.log('Generating 10 unique random mobile numbers...');
for (let i = 0; i < 10; i++) {
  mobileNumbers.add(generateRandomMobileNumber());
}

console.log(`Initial set size: ${mobileNumbers.size}`);
console.log('Initial numbers:', Array.from(mobileNumbers).join(', '));

const firstMobile = mobileNumbers.values().next().value;
console.log(`\nAttempting to add a duplicate number: ${firstMobile}`);
mobileNumbers.add(firstMobile); // Add a duplicate

console.log(`Final set size after adding a duplicate: ${mobileNumbers.size}`);
console.log('The size remains the same, demonstrating the uniqueness property of a Set.');
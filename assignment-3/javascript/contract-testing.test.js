const nock = require('nock');
const fetch = require('node-fetch');

// Define the contract
const userContract = {
  id: 1,
  name: 'Test User',
  email: 'test.user@example.com',
};

describe('Contract Testing', () => {
  test('should adhere to the user contract', async () => {
    // Mock the provider
    nock('https://testwithshreyansh.com')
      .get('/api/users/1')
      .reply(200, userContract);

    // Make a request from the consumer
    const response = await fetch('https://testwithshreyansh.com/api/users/1');
    const user = await response.json();

    // Validate the contract
    expect(user).toEqual(userContract);
  });
});

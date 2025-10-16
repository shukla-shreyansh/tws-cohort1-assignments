const nock = require('nock');
const fetch = require('node-fetch');

describe('Virtualization', () => {
  test('should test against a mocked payment API', async () => {
    // Mock the payment API
    nock('https://testwithshreyansh.com')
      .post('/api/payment', { amount: 100, currency: 'USD' })
      .reply(200, { status: 'success', transactionId: '12345' });

    // Make a request to the mocked API
    const response = await fetch('https://testwithshreyansh.com/api/payment', {
      method: 'POST',
      body: JSON.stringify({ amount: 100, currency: 'USD' }),
      headers: { 'Content-Type': 'application/json' },
    });

    const paymentResult = await response.json();

    // Validate the response from the mocked API
    expect(paymentResult.status).toBe('success');
    expect(paymentResult.transactionId).toBe('12345');
  });
});

const fetch = require('node-fetch');

class ApiClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(endpoint) {
    const response = await fetch(`${this.baseUrl}${endpoint}`);
    return {
      status: response.status,
      body: await response.json(),
    };
  }

  async post(endpoint, body) {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    });
    return {
      status: response.status,
      body: await response.json(),
    };
  }
}

module.exports = ApiClient;

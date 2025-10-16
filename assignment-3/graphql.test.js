const fetch = require('node-fetch');

const API_URL = 'https://testwithshreyansh.com/graphql';

describe('GraphQL API Tests', () => {
  test('should execute a query and return data', async () => {
    const query = `
      query {
        users {
          id
          name
          email
        }
      }
    `;

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });

    const { data } = await response.json();

    expect(response.status).toBe(200);
    expect(data.users).toBeInstanceOf(Array);
    expect(data.users.length).toBeGreaterThan(0);
    expect(data.users[0]).toHaveProperty('id');
    expect(data.users[0]).toHaveProperty('name');
    expect(data.users[0]).toHaveProperty('email');
  });

  test('should execute a mutation and return the created data', async () => {
    const mutation = `
      mutation {
        createUser(name: "Shreyansh Shukla", email: "shreyansh.shukla@tws.com") {
          id
          name
          email
        }
      }
    `;

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: mutation }),
    });

    const { data } = await response.json();

    expect(response.status).toBe(200);
    expect(data.createUser).toHaveProperty('id');
    expect(data.createUser.name).toBe('Shreyansh Shukla');
    expect(data.createUser.email).toBe('shreyansh.shukla@tws.com');
  });
});

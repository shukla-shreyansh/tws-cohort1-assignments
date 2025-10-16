const fetch = require('node-fetch');

// Mock database
const database = {
  users: [],
};

describe('Database Integration', () => {
  test('should create a user and validate it in the database', async () => {
    const newUser = { name: 'Shreyansh Shukla', email: 'shreyansh.shukla@tws.com' };

    // Simulate API call to create a user
    const response = await fetch('https://testwithshreyansh.com/api/register', {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: { 'Content-Type': 'application/json' },
    });

    const createdUser = await response.json();

    // Simulate database insertion
    database.users.push(createdUser);

    // Validate that the user exists in the database
    const userInDb = database.users.find((user) => user.id === createdUser.id);
    expect(userInDb).toBeDefined();
    expect(userInDb.name).toBe(newUser.name);
    expect(userInDb.email).toBe(newUser.email);
  });
});

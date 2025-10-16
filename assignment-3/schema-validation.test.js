const Ajv = require('ajv');
const fetch = require('node-fetch');

const ajv = new Ajv();

const userSchema = {
  type: 'object',
  properties: {
    id: { type: 'integer' },
    name: { type: 'string' },
    email: { type: 'string', format: 'email' },
  },
  required: ['id', 'name', 'email'],
};

describe('Schema Validation', () => {
  test('should validate the user schema', async () => {
    const response = await fetch('https://testwithshreyansh.com/api/users/1');
    const user = await response.json();

    const validate = ajv.compile(userSchema);
    const valid = validate(user);

    expect(valid).toBe(true);
  });
});

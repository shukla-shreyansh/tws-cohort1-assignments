const { ApiClient } = require('./ApiClient');
const { UsersApi } = require('./UsersApi');
const { CoursesApi } = require('./CoursesApi');

describe('API Tests for testwithshreyansh.com', () => {
  let usersApi;
  let coursesApi;

  beforeAll(() => {
    // Using a config-driven endpoint as requested
    const config = {
      baseUrl: 'https://testwithshreyansh.com/api',
    };
    const apiClient = new ApiClient(config.baseUrl);

    // Initialize our service models with the generic client
    usersApi = new UsersApi(apiClient);
    coursesApi = new CoursesApi(apiClient);
  });

  test('GET /users should return a list of users', async () => {
    const { status, body } = await usersApi.getAllUsers();

    expect(status).toBe(200);
    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBeGreaterThan(0);
    expect(body[0]).toHaveProperty('id');
    expect(body[0]).toHaveProperty('name');
  });

  test('POST /courses should create a new course', async () => {
    const newCourse = { name: 'Jest API Testing', author: 'Gemini' };
    const { status, body } = await coursesApi.createCourse(newCourse);

    expect(status).toBe(201); // Assuming 201 Created status
    expect(body).toHaveProperty('id');
    expect(body.name).toBe(newCourse.name);
  });
});

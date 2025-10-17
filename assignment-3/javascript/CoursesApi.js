class CoursesApi {
  /**
   * @param {import('./ApiClient').ApiClient} apiClient
   */
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async createCourse(courseData) {
    return this.apiClient.post('/courses', courseData);
  }
}

module.exports = CoursesApi;

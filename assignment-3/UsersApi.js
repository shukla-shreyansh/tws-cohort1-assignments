class UsersApi {
  /**
   * @param {import('./ApiClient').ApiClient} apiClient
   */
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async getAllUsers() {
    return this.apiClient.get('/users');
  }
}

module.exports = UsersApi;

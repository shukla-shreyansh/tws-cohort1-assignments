/**
 * Page Object for The Internet App's Login Page.
 * @see https://the-internet.herokuapp.com/login
 */
class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('button[type="submit"]');
    this.flashMessage = page.locator('#flash');
  }

  /**
   * Navigates to the login page.
   */
  async navigateTo() {
    await this.page.goto('/login');
  }

  /**
   * Performs the login action.
   * @param {string} username
   * @param {string} password
   */
  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getFlashMessage() {
    return this.flashMessage.textContent();
  }
}

module.exports = LoginPage;

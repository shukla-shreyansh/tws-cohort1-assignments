/**
 * Page Object for The Internet App's Secure Area (post-login).
 * @see https://the-internet.herokuapp.com/secure
 */
class SecurePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.flashMessage = page.locator('#flash');
    this.logoutButton = page.locator('a[href="/logout"]');
  }

  async getFlashMessage() {
    return this.flashMessage.textContent();
  }

  /**
   * Performs the logout action.
   */
  async logout() {
    await this.logoutButton.click();
  }
}

module.exports = SecurePage;

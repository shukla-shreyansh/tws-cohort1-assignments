const { test, expect } = require('@playwright/test');
const LoginPage = require('../assignment-1/LoginPage');
const SecurePage = require('./SecurePage');
const users = require('./data/users.json');

test.describe('Login Flow', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateTo();
  });

  test('should allow a user to log in with valid credentials', async ({ page }) => {
    await loginPage.login('shreyansh', 'testwithshreyansh!');

    const securePage = new SecurePage(page);
    await expect(page).toHaveURL(/.*secure/);
    await expect(securePage.flashMessage).toContainText('You logged into a secure area!');
  });

  test('should show an error message with invalid credentials', async ({ page }) => {
    await loginPage.login('foo', 'bar');

    await expect(loginPage.flashMessage).toContainText('Your username is invalid!');
  });
});

test.describe('Data-driven Login Test', () => {
  for (const user of users) {
    test(`should handle login for user: ${user.username}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.navigateTo();
      await loginPage.login(user.username, user.password);

      if (user.isValid) {
        await expect(page).toHaveURL(/.*secure/);
      } else {
        await expect(loginPage.flashMessage).toContainText('Your username is invalid!');
      }
    });
  }
});

const wd = require('wd');
const { config } = require('./config');

describe('iOS App Automation', () => {
  let driver;

  beforeAll(async () => {
    driver = await wd.promiseChainRemote(config.host, config.port);
    await driver.init(config.ios);
  });

  afterAll(async () => {
    await driver.quit();
  });

  test('should launch the app and validate the home screen', async () => {
    const welcomeMessage = await driver.elementByAccessibilityId('welcome-message');
    expect(await welcomeMessage.isDisplayed()).toBe(true);
  });
});

const config = {
  host: 'localhost',
  port: 4723,
  android: {
    platformName: 'Android',
    deviceName: 'Android Emulator',
    app: '/path/to/your/android/app.apk', // TODO: Replace with the actual path to your app
    automationName: 'UiAutomator2',
  },
  ios: {
    platformName: 'iOS',
    deviceName: 'iPhone Simulator',
    app: '/path/to/your/ios/app.app', // TODO: Replace with the actual path to your app
    automationName: 'XCUITest',
  },
};

module.exports = { config };

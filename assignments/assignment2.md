# Assignment 2: Web & Mobile Automation

## Part A: Web Automation (Playwright)

### 1. Getting Started
- Install Playwright in your preferred language (Java/Python/JS).
- Run the sample script to launch a browser and navigate to a webpage (e.g., `https://testwithshreyansh.com`).

### 2. Login Flow Automation
- Create a test that performs login on a demo website:
  - **Website**: `https://the-internet.herokuapp.com/login`
- Validate successful login by asserting the landing page title or a success message.

### 3. Page Object Model (POM) Implementation
- Refactor the login flow into Page Object classes.
- Add reusable methods for `login`, `logout`, and `navigateToDashboard`.

### 4. Cross-Browser Execution
- Parameterize tests to run on Chromium, Firefox, and WebKit.
- Capture logs and screenshots for any failures.

### 5. Advanced Assignment
- Build a data-driven test to log in with multiple users (both valid and invalid credentials) from a JSON or CSV file.
- Integrate the tests into a testing framework (e.g., Pytest, TestNG) and execute them in parallel.

## Part B: Mobile Automation (Appium)

### 1. Setup & Smoke Test
- Install Appium and set up an emulator/simulator (Android Studio or Xcode).
- Launch a sample app for both Android and iOS.
- Write a script to open the app and validate that the home screen loads correctly.

### 2. User Flow
- Automate a login flow in the sample app:
  - Enter username and password.
  - Tap the login button.
  - Assert the presence of a success message.

### 3. Device Farm Practice
- Run the same script on a cloud device farm (e.g., BrowserStack, Sauce Labs trial).
- Document any differences observed between local and cloud execution.

### 4. Hybrid App Assignment
- Automate a simple flow in a hybrid app (one that uses a WebView).
- Practice switching context from `NATIVE_APP` to `WEBVIEW` and interacting with web elements.

### 5. Advanced Assignment
- Create a cross-platform test framework:
  - Write a single test case (e.g., login or search) that works for both Android and iOS by abstracting locators.
  - Implement a configuration file to manage device capabilities.

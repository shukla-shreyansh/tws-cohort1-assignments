# Cohort Assignments - Solution

This repository contains the solutions for the cohort assignments, implemented with coding standards and best practices in mind.

## Project Structure

The project is organized into different assignments. Below is a summary of the assignments included in this repository.

| Category         | File / Directory                                                     | Description                                                                 |
| ---------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| **Assignment 1** | [`Calculator.js`](./assignment-1/Calculator.js)                      | A simple calculator implementation.                                         |
|                  | [`isPrime.js`](./assignment-1/isPrime.js)                            | A function to check if a number is prime.                                   |
|                  | [`mobileNumbersSet.js`](./assignment-1/mobileNumbersSet.js)          | An assignment demonstrating the use of Set for storing mobile numbers.      |
|                  | [`LoginPage.js`](./assignment-1/LoginPage.js)                        | A `LoginPage` class, likely for a UI testing scenario.                      |
|                  | [`language-comparison.md`](./assignment-1/language-comparison.md)    | A written comparison between different programming languages.               |
|                  | [`Calculator.test.js`](./assignment-1/Calculator.test.js)            | Jest tests for the Calculator.                                              |
|                  | [`isPrime.test.js`](./assignment-1/isPrime.test.js)                  | Jest tests for the isPrime function.                                        |
| **Assignment 2** | [`login.spec.js`](./assignment-2/login.spec.js)                      | Playwright E2E tests for login functionality.                               |
|                  | [`SecurePage.js`](./assignment-2/SecurePage.js)                      | Page Object Model for the secure page after login.                          |
|                  | [`data/users.json`](./assignment-2/data/users.json)                  | Test data with user credentials.                                            |
|                  | [`mobile-automation/`](./assignment-2/mobile-automation/)            | Sub-project for mobile automation tests (Android & iOS).                    |
| **Assignment 3** | [`javascript/`](./assignment-3/javascript/)                          | A suite of API tests using Javascript.                                      |
|                  | [`python/`](./assignment-3/python/)                                  | A complete Python solution for Assignment 3.                                |
|                  | [`java/`](./assignment-3/java/)                                      | A complete Java solution for Assignment 3.                                  |

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository.
2. Navigate to the project root directory.
3. Install the dependencies for all assignments:
   ```bash
   npm install
   # Navigate to assignment-3/javascript and install its dependencies
   cd assignment-3/javascript && npm install && cd ../..
   ```

## Running the Solutions

### Assignment 1: Programming Basics & OOP

To run the Jest tests for these assignments, execute the following command from the root of the project directory:

```bash
npm test
```

To execute individual scripts, for example `mobileNumbersSet.js`, run:

```bash
node assignment-1/mobileNumbersSet.js
```

### Assignment 2: Web & Mobile Automation

To run the Playwright E2E tests, execute the following command from the root of the project directory:

```bash
npx playwright test
```

### Assignment 3: API Testing

To run the API tests, navigate to the assignment directory and run the test command:

```bash
cd assignment-3/javascript
npm test
```

#### Python Solution

To run the Python solution, navigate to the Python solution directory, install the dependencies, and run pytest:

```bash
cd assignment-3/python
pip install -r requirements.txt
pytest
```

#### Java Solution

To run the Java solution, navigate to the Java solution directory and run the Maven tests:

```bash
cd assignment-3/java
mvn test

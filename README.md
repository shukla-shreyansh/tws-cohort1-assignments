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
| **Assignment 4** | [`assignment-4/`](./assignment-4/)                                   | Solutions for performance, security, and usability testing.                 |
| **Assignment 5** | [`assignment-5/`](./assignment-5/)                                   | Solutions for CI/CD, Docker, and Observability.                             |

## CI/CD

This repository is equipped with a CI/CD pipeline to automate testing.

### GitHub Actions

A GitHub Actions workflow is configured in `.github/workflows/ci.yml`. It automatically runs the Playwright test suite on every push and pull request to the `main` branch, generates an Allure report, and uploads it as a build artifact.

### Jenkins

A `Jenkinsfile` is also available in `assignment-5/` for running the same CI pipeline on a Jenkins server.

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
```

### Assignment 4 & 5: Performance, Security, Usability & Observability

#### Performance Testing with Grafana Integration

This project includes a complete setup for running k6 performance tests and visualizing the results in Grafana using Docker.

1.  **Navigate to the assignment directory:**
    ```bash
    cd assignment-5
    ```
2.  **Start the monitoring stack:**
    ```bash
    docker-compose up -d
    ```
    This command will start k6, InfluxDB, and Grafana. The k6 container will execute the test script from `assignment-4/performance/k6-test.js`.

3.  **View the dashboard:**
    Open your browser and go to `http://localhost:3000` to see the live performance metrics on the pre-configured "k6 Load Test" dashboard.

4.  **Stop the services:**
    ```bash
    docker-compose down
    ```

To run the performance tests standalone, you will need to have k6 and Locust installed.

**k6 Test**

1.  Install k6: `brew install k6`
2.  Run the test: `k6 run assignment-4/performance/k6-test.js`

**Locust Test**

1.  Install Locust: `pip install locust`
2.  Run Locust: `locust -f assignment-4/performance/locust-test.py`
3.  Open your browser to `http://localhost:8089` and start the test.

#### Security Testing

The security testing was performed using OWASP ZAP on the site `http://testphp.vulnweb.com`. The following vulnerabilities were identified:

-   **SQL Injection (High Risk):** Allows an attacker to execute arbitrary SQL commands.
-   **Cross-Site Scripting (XSS) - Reflected (Medium Risk):** Allows an attacker to inject malicious scripts into a URL.
-   **Insecure Cookies (Low Risk):** Cookies are not flagged as `Secure` or `HttpOnly`.

For more details, see the `assignment-4/security/` directory.

#### Usability Testing

A heuristic review was conducted on the Spotify Web application. The review is based on Nielsen's 10 Usability Heuristics and includes observations and suggestions for improvement.

For a detailed breakdown of the review, see the `assignment-4/usability/` directory.

## Git Hooks

This project includes Git hooks to enforce branch naming conventions and commit message standards.

### Setup

To enable the Git hooks, run the following script from the root of the project:

```bash
./setup-githooks.sh
```

This will configure Git to use the hooks located in the `.git-hooks` directory.

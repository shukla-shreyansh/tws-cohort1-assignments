# Module 5: CI/CD for Test Engineers – Assignments & Exploration

This directory contains the solutions for the assignments in Module 5.

## Assignment 1: CI Integration

This assignment involves setting up a GitHub Actions workflow to automatically run tests and generate an Allure report.

### GitHub Actions Workflow

The workflow is defined in `.github/workflows/ci.yml`. It is configured to trigger on two events:
-   **Push**: Every time code is pushed to the `main` branch.
-   **Pull Request**: Every time a pull request is opened or updated that targets the `main` branch.

This ensures that tests are run automatically for both direct pushes and before merging pull requests, maintaining code quality.

The workflow performs the following steps:
1.  Checks out the code.
2.  Sets up Node.js.
3.  Installs dependencies from `assignment-2`.
4.  Installs Playwright browsers.
5.  Runs the Playwright tests from `assignment-2`.
6.  Generates an Allure report.
7.  Uploads the Allure report as a build artifact.

### Jenkins Pipeline

A `Jenkinsfile` is also provided in this directory to achieve a similar CI process using Jenkins. The pipeline is configured to:
1.  Check out the code.
2.  Set up a Node.js environment.
3.  Install dependencies.
4.  Install Playwright browsers.
5.  Run the Playwright tests.
6.  Generate and archive the Allure report.

## Assignment 2: Dockerize Your Tests

This assignment involves creating a `Dockerfile` to run the automation suite in a container.

### Dockerfile

The `Dockerfile` is located in this directory. It performs the following steps:
1.  Uses a base image with Node.js and Playwright dependencies.
2.  Copies the project files.
3.  Installs npm dependencies.
4.  Runs the Playwright tests.

To build and run the Docker container, use the following commands:
```bash
docker build -t playwright-tests .
docker run playwright-tests
```

## Assignment 3: Observability Challenge

This assignment involves exporting test metrics to a monitoring platform like Grafana Cloud or ELK.

### Conceptual Solution

Integrating with Grafana/ELK typically involves these steps:
1.  **Test Metric Exporter**: Use a library or custom script to collect test metrics (e.g., pass/fail counts, duration, response times) and export them in a format that your monitoring system can ingest (e.g., Prometheus, InfluxDB).
2.  **Time-Series Database**: Store the metrics in a time-series database like Prometheus or InfluxDB.
3.  **Visualization**: Use Grafana or Kibana to create dashboards that visualize the test metrics from the database.

For this assignment, a detailed implementation is out of scope, but the above steps outline the general process.

### k6, InfluxDB, and Grafana Integration

As a practical example of observability, this directory includes a `docker-compose.yml` file to run your k6 performance tests and visualize the results in Grafana.

#### How to Run

1.  **Start the services:**
    From the `assignment-5` directory, run the following command:
    ```bash
    docker-compose up -d
    ```
    This will start three containers: `k6`, `influxdb`, and `grafana`. The `k6` container will run the test script from `assignment-4/performance/k6-test.js` and send the metrics to `influxdb`.

2.  **View the dashboard:**
    Open your browser and navigate to `http://localhost:3000`. You should see a pre-configured Grafana dashboard named "k6 Load Test" that visualizes the performance test metrics in real-time.

3.  **Stop the services:**
    When you are finished, you can stop the containers with the following command:
    ```bash
    docker-compose down
    ```

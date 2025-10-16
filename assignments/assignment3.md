# Assignment 3: API Testing

## 1. API Testing Basics
Write API tests for the following endpoints on `https://testwithshreyansh.com/api`:
- **Python `requests`**: Test `GET` and `POST` endpoints.
- **Java `RestAssured`**: Implement a full CRUD (Create, Read, Update, Delete) flow for `/courses`.
- **Node.js `http`**: Perform a simple `GET` request on `/users`.

## 2. Framework Extension
Enhance your testing framework with the following features:
- Add configuration-driven endpoints for `testwithshreyansh.com`.
- Implement reusable API client methods.
- Add `pytest` fixtures and markers for better test organization.

## 3. GraphQL Testing
- Write a query and a mutation test for `https://testwithshreyansh.com/graphql`.
- Include schema validation in your tests.

## 4. Schema Validation
- Create a JSON schema for a `user` or `course` object from `testwithshreyansh.com`.
- Validate an API response against the schema you created.

## 5. Database Integration
- **Create and Validate**: After making an API call to `/register`, query the database to validate that the values were inserted or updated correctly.
- **E2E Flow**: Automate a flow that creates a user via the API and then validates the entry in the `testwithshreyansh_db`.
- **Unique Constraints**: Test and validate unique constraints, such as ensuring an email is not duplicated.

## 6. Contract Testing
- Implement a Pact test between a consumer and the `testwithshreyansh.com` API provider to ensure the contract is not broken.

## 7. API Virtualization
- Use a tool like **WireMock** or **Postman Mock Server** to simulate the `testwithshreyansh.com` payment API.
- Write tests against the mock server, and design them to be switchable to the real API later.

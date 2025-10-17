import pytest
from pact import Consumer, Provider
import requests

PACT_BROKER_URL = "http://localhost:9292"  # Example Pact Broker URL
PACT_DIR = "./pacts"

@pytest.fixture(scope="module")
def pact():
    consumer = Consumer("MyConsumer")
    provider = Provider("TestWithShreyanshAPI")
    pact = consumer.has_pact_with(provider, pact_dir=PACT_DIR)
    pact.start_service()
    yield pact
    pact.stop_service()

def test_get_user(pact):
    """
    Defines a contract for getting a user.
    """
    expected = {
        "id": 1,
        "name": "Shreyansh Shukla",
        "email": "testwithshreyansh@gmail.com"
    }

    (pact
     .given("a user with ID 1 exists")
     .upon_receiving("a request for user 1")
     .with_request("get", "/api/users/1")
     .will_respond_with(200, body=expected))

    with pact:
        response = requests.get(f"{pact.uri}/api/users/1")
        assert response.status_code == 200
        assert response.json() == expected
        print("\nPact contract test for GET /api/users/1 successful.")

    # In a real CI/CD pipeline, you would publish the pact file to a Pact Broker.
    # publisher = PactPublisher(PACT_BROKER_URL)
    # publisher.publish(PACT_DIR, consumer_version="1.0.0")

import pytest
import requests
import responses

PAYMENT_API_URL = "https://testwithshreyansh.com/api/payments"

@responses.activate
def test_mock_payment_api():
    """
    Tests the payment API using a mock server.
    """
    # Mock the POST request to the payment API
    responses.add(
        responses.POST,
        PAYMENT_API_URL,
        json={"status": "success", "transaction_id": "txn_12345"},
        status=201
    )

    # Make a request to the mocked API
    payment_data = {
        "amount": 100.00,
        "currency": "USD",
        "card_number": "1234-5678-9012-3456"
    }
    response = requests.post(PAYMENT_API_URL, json=payment_data)

    # Assertions
    assert response.status_code == 201
    response_data = response.json()
    assert response_data["status"] == "success"
    assert "transaction_id" in response_data
    print("\nMock payment API test successful. Response:", response_data)

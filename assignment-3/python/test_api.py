import requests
import pytest
import json

class ApiClient:
    def __init__(self, base_url):
        self.base_url = base_url

    def get(self, endpoint):
        return requests.get(f"{self.base_url}/{endpoint}")

    def post(self, endpoint, data):
        return requests.post(f"{self.base_url}/{endpoint}", json=data)

@pytest.fixture(scope="module")
def api_client():
    with open("tws-cohort1-assignments/assignments/assignment-3/solution/python/config.json") as f:
        config = json.load(f)
    return ApiClient(config["base_url"])

@pytest.mark.smoke
def test_get_users(api_client):
    """
    Tests the GET /users endpoint.
    """
    response = api_client.get("users")
    assert response.status_code == 200
    assert isinstance(response.json(), list)
    print("\nGET /users response:", response.json())

@pytest.mark.regression
def test_create_course(api_client):
    """
    Tests the POST /courses endpoint.
    """
    new_course = {
        "title": "API Testing with Python",
        "description": "A comprehensive course on API testing.",
        "instructor": "Shreyansh Shukla"
    }
    response = api_client.post("courses", new_course)
    assert response.status_code == 201
    response_data = response.json()
    assert response_data["title"] == new_course["title"]
    assert "id" in response_data
    print("\nPOST /courses response:", response_data)

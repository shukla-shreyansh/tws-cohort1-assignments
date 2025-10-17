import pytest
import requests

GRAPHQL_URL = "https://testwithshreyansh.com/graphql"

def test_graphql_query():
    """
    Tests a GraphQL query.
    """
    query = """
    query {
      courses {
        id
        title
      }
    }
    """
    response = requests.post(GRAPHQL_URL, json={'query': query})
    assert response.status_code == 200
    response_data = response.json()
    assert "data" in response_data
    assert "courses" in response_data["data"]
    print("\nGraphQL query response:", response_data)

def test_graphql_mutation():
    """
    Tests a GraphQL mutation.
    """
    mutation = """
    mutation {
      createCourse(title: "GraphQL Testing", description: "A course on GraphQL.", instructor: "Tester") {
        id
        title
      }
    }
    """
    response = requests.post(GRAPHQL_URL, json={'query': mutation})
    assert response.status_code == 200
    response_data = response.json()
    assert "data" in response_data
    assert "createCourse" in response_data["data"]
    assert response_data["data"]["createCourse"]["title"] == "GraphQL Testing"
    print("\nGraphQL mutation response:", response_data)

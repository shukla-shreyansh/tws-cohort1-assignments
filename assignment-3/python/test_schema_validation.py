import pytest
import requests
from jsonschema import validate

COURSE_SCHEMA = {
    "type": "object",
    "properties": {
        "id": {"type": "number"},
        "title": {"type": "string"},
        "description": {"type": "string"},
        "instructor": {"type": "string"},
    },
    "required": ["id", "title", "description", "instructor"]
}

def test_get_course_and_validate_schema():
    """
    Gets a course and validates its response against a JSON schema.
    """
    response = requests.get("https://testwithshreyansh.com/api/courses/1")
    assert response.status_code == 200
    course_data = response.json()

    # Validate the response against the schema
    validate(instance=course_data, schema=COURSE_SCHEMA)
    print("\nSchema validation successful for course:", course_data)

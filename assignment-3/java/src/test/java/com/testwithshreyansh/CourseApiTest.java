package com.testwithshreyansh;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import io.restassured.response.Response;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

@TestMethodOrder(OrderAnnotation.class)
public class CourseApiTest {

    private static ApiClient apiClient;
    private static int courseId;

    @BeforeAll
    public static void setup() {
        apiClient = new ApiClient();
    }

    @Test
    @Order(1)
    public void testCreateCourse() {
        String requestBody = "{ \"title\": \"Java for Testers\", \"description\": \"A course for learning Java.\", \"instructor\": \"Shreyansh\" }";
        Response response = apiClient.post("/courses", requestBody);
        response.then().statusCode(201).body("title", equalTo("Java for Testers"));
        courseId = response.jsonPath().getInt("id");
    }

    @Test
    @Order(2)
    public void testGetCourse() {
        Response response = apiClient.get("/courses/" + courseId);
        response.then().statusCode(200).body("id", equalTo(courseId)).body("title", equalTo("Java for Testers"));
    }

    @Test
    @Order(3)
    public void testUpdateCourse() {
        String requestBody = "{ \"title\": \"Advanced Java for Testers\", \"description\": \"An advanced course.\", \"instructor\": \"Shreyansh Shukla\" }";
        Response response = apiClient.put("/courses/" + courseId, requestBody);
        response.then().statusCode(200).body("title", equalTo("Advanced Java for Testers"));
    }

    @Test
    @Order(4)
    public void testDeleteCourse() {
        Response response = apiClient.delete("/courses/" + courseId);
        response.then().statusCode(204);
    }
}

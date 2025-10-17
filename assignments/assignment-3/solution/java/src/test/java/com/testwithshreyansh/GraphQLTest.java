package com.testwithshreyansh;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasKey;

public class GraphQLTest {

    @BeforeAll
    public static void setup() {
        RestAssured.baseURI = "https://testwithshreyansh.com";
    }

    @Test
    public void testGraphQLQuery() {
        String query = "{ \"query\": \"query { courses { id title } }\" }";

        given()
            .contentType(ContentType.JSON)
            .body(query)
        .when()
            .post("/graphql")
        .then()
            .statusCode(200)
            .body("data", hasKey("courses"));
    }

    @Test
    public void testGraphQLMutation() {
        String mutation = "{ \"query\": \"mutation { createCourse(title: \\\"GraphQL Testing in Java\\\", description: \\\"A course on GraphQL.\\\", instructor: \\\"Tester\\\") { id title } }\" }";

        given()
            .contentType(ContentType.JSON)
            .body(mutation)
        .when()
            .post("/graphql")
        .then()
            .statusCode(200)
            .body("data.createCourse.title", equalTo("GraphQL Testing in Java"));
    }
}

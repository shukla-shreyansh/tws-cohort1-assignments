package com.testwithshreyansh;

import io.restassured.RestAssured;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;

public class SchemaValidationTest {

    @BeforeAll
    public static void setup() {
        RestAssured.baseURI = "https://testwithshreyansh.com/api";
    }

    @Test
    public void testCourseSchema() {
        given()
            .when()
            .get("/courses/1")
            .then()
            .assertThat()
            .body(matchesJsonSchemaInClasspath("course_schema.json"));
    }
}

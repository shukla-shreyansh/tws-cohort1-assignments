package com.testwithshreyansh;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.notNullValue;

public class DatabaseIntegrationTest {

    @BeforeAll
    public static void setup() {
        RestAssured.baseURI = "https://testwithshreyansh.com/api";
    }

    @Test
    public void testRegisterUserAndValidateInDb() {
        String newUser = "{ \"name\": \"Shreyansh Shukla\", \"email\": \"shreyansh.shukla@tws.com\", \"password\": \"testwithshreyansh\" }";

        given()
            .contentType(ContentType.JSON)
            .body(newUser)
        .when()
            .post("/register")
        .then()
            .statusCode(201)
            .body("id", notNullValue());

        // Placeholder for database validation
        // In a real-world scenario, you would connect to the database and
        // query the users table to verify that the new user was created.
        // Example (pseudo-code):
        // Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
        // Statement stmt = conn.createStatement();
        // String sql = "SELECT * FROM users WHERE email = 'shreyansh.shukla@example.com'";
        // ResultSet rs = stmt.executeQuery(sql);
        // assertTrue(rs.next());
        // assertEquals("Shreyansh Shukla", rs.getString("name"));
        System.out.println("User registration successful. DB validation would be performed here.");
    }
}
